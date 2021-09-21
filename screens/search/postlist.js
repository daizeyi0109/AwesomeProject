import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Post from "./post";
import feed from "../../assets/data/feed";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries.js";

const SearchResultsScreen = (props) => {
 
    const [post,setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const postsResult = await API.graphql (
                    graphqlOperation(listPosts)
                )
                console.log(postsResult);
                setPost(postsResult.data.listPosts.items);
            } catch(e){
                console.log(e);
            }
        }
        fetchPost();
    },[])

  return (
    <View>
      <FlatList data={post} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
