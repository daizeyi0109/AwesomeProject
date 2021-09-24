import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Post = (props) => {
  console.log(props);

  const posts = props.posts;
  const days = 7;

  return (
    // <Pressable onPress={goToPostPage} style={styles.container}>
    <>
      <Pressable style={styles.container}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{
            uri: posts.image,
          }}
        />

        {/* Bed & Bedroom  */}
        <Text style={styles.bedrooms}>
          {posts.bed} <SimpleLineIcons name="like" size={15} color="black" />{" "}
          {posts.bedroom}{" "}
          <SimpleLineIcons name="dislike" size={15} color="black" />
        </Text>

        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>
          {posts.type} ---- {posts.title}
        </Text>

        {/*  Old price & new price */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${posts.oldPrice}</Text>
            <Text style={styles.price}> ${posts.newPrice} </Text>
          </Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Foundation name="indent-more" size={25} color="black" />
          </TouchableOpacity>
        </View>

        {/*  Total price */}
        <Text style={styles.totalPrice}>${posts.newPrice * days} total</Text>
      </Pressable>
      <View style={{ width: "100%",borderBottomWidth:0.5,borderBottomColor: "black"}}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});
export default Post;
