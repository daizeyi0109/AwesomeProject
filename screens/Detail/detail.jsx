import React, { Component, useState, useEffect,useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries";

const DetailScreen = () => {
  //  接收参数
  const route = useRoute();

  const [post, setPost] = useState();
  const currentIndexRef = useRef();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: { id: { eq: route.params.itemid } },
          })
        );
        // console.log(postsResult);
        setPost(postsResult.data.listPosts.items);
        currentIndexRef.current = postsResult.data.listPosts.items;
        console.log(currentIndexRef.current);
        console.log(currentIndexRef.current[0].title);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, []);
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text> {currentIndexRef.current[0].title}</Text>
      {/* Image  */}
      <Image
          style={styles.image}
          source={{
            uri: currentIndexRef.current[0].image,
          }}
        />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 100,
    width: 343,
    left: "50%",
    marginLeft: -172,
    height: "100%",
    backgroundColor: "purple",
  },
  title: {

  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
