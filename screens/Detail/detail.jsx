import React, { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries.js";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const DetailScreen = () => {
  //  接收参数
  const route = useRoute();

  const [post, setPost] = useState();
  const [load, setLoad] = useState(false);
  const currentIndexRef = useRef();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: { id: { eq: route.params.itemid } },
          })
        );
        setPost(postsResult.data.listPosts.items);
        setLoad(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, []);

  if (!load) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          marginBottom: 10,
          borderRadius: 10,
          fontSize: 20,
        }}
      >
        <Text>Loading Items...</Text>
      </View>
    );
  } else {
    return (
      <View style={{ padding: 15 }}>
        <FlatList
          data={post}
          renderItem={({ item }) => <Post posts={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
};

const Post = (props) => {
  const posts = props.posts;
  const id = props.posts.id;
  console.log(id);
  const days = 7;

  return (
    <>
      <Pressable style={styles.container}>
        {/* Description */}
        <Text style={styles.description} numberOfLines={2}>
          <AntDesign name="notification" size={24} color="tomato" />:{" "}
          {posts.title}
        </Text>

        {/* Image  */}
        <Image
          style={styles.image}
          source={{
            uri: posts.image,
          }}
        />
        {/* Like & Dislike  */}
        <Text style={[styles.bedrooms]}>
          {posts.bed} <SimpleLineIcons name="like" size={15} color="red" />{" "}
          {posts.bedroom}{" "}
          <SimpleLineIcons name="dislike" size={15} color="black" />
        </Text>

        <View style={[styles.bottom_container]}>
          <Text style={styles.description}>Detail</Text>
          {/* Type */}
          <Text style={styles.type} numberOfLines={2}>
            <AntDesign name="tagso" size={24} color="black" />: {posts.type}
          </Text>

          {/*Detail description  */}
          <Text style={styles.type} numberOfLines={2}>
            <MaterialCommunityIcons name="details" size={24} color="black" />:{" "}
            {posts.description}
          </Text>

          {/*  Old price & new price */}
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.prices}>
              <Text style={styles.oldPrice}>${posts.oldPrice}</Text>
              <Text style={styles.price}> ${posts.newPrice} </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Image source={require("../../assets/images/Connect.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../assets/images/Buyit.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    // marginBottom: 20,
    // backgroundColor: "purple",
    borderRadius: 10,
    padding: 5,
    height: 800,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
    alignSelf: "flex-end",
  },
  description: {
    marginTop: 20,
    lineHeight: 30,
    fontSize: 25,
    fontFamily: "Futura",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.67,
    marginBottom: 10,
  },
  type: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 10,
  },
  prices: {
    fontSize: 30,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
    color: "tomato",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
  bottom_container: {
    borderRadius: 10,
    backgroundColor: "rgba(252,248,248,0.9)",
    height: 300,
  },
});
