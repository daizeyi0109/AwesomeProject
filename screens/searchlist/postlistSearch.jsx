import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import Post from "./postSearch";
import feed from "../../assets/data/feed";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries.js";

const SearchResultsScreen = (props) => {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPosts));
        console.log(postsResult);
        setPost(postsResult.data.listPosts.items);
        setLoad(true);
        console.log(load);
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
          padding: 5,
          borderRadius: 10,
          fontSize:20
        }}
      >
        <Text>Loading movies...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FlatList data={post} renderItem={({ item }) => <Post post={item} />} />
      </View>
    );
  }
};

export default SearchResultsScreen;
