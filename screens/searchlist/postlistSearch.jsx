import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Button } from "react-native";
import Post from "./postSearch";
import feed from "../../assets/data/feed";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries.js";

const SearchResultsScreen = (props) => {
  console.log("------------------------------------------------");
  console.log(props);
  const searchKeys = props.item;
  console.log(searchKeys);

  const [post, setPost] = useState([]);


  const fetchPost = async () => {
    try {
      const postsResult = await API.graphql(
        graphqlOperation(listPosts, {
          filter: { title: { contains: searchKeys } },
        })
      );
      // console.log(postsResult);
      setPost(postsResult.data.listPosts.items);
      setLoad(true);
      // console.log(load);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //  const fetchPost = async () => {
  //     try {
  //       const postsResult = await API.graphql(
  //         graphqlOperation(listPosts, {
  //           filter: { title: { contains: searchKeys } },
  //         })
  //       );
  //       // console.log(postsResult);
  //       setPost(postsResult.data.listPosts.items);
  //       setLoad(true);
  //       // console.log(load);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchPost();
  // }, []);

  setInterval(() => {
    fetchPost();
  }, 3000);


  return (
    <>
      <View>
        <FlatList data={post} renderItem={({ item }) => <Post post={item} />} />
      </View>
    </>
  );
};

export default SearchResultsScreen;
