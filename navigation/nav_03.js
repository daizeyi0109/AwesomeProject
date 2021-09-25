import "react-native-gesture-handler";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/Detail/detail";
import RecommendScreen from "../screens/recfunctionScreen/recommend";
import Post from "../screens/recommendlist/postlist";

const PostStack = createNativeStackNavigator();

export default function PostDetailScreen() {
  return (
    <PostStack.Navigator initialRouteName="DetailScreen">
      <PostStack.Screen name="postDetailScreen" component={RecommendScreen} />
      <PostStack.Screen name="DetailScreen" component={DetailScreen} />
      <PostStack.Screen name="Post" component={Post} />
    </PostStack.Navigator>
  );
}
