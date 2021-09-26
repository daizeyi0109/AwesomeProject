import "react-native-gesture-handler";
import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/Detail/detail";
import RecommendScreen from "../screens/recfunctionScreen/recommend";
import Post from "../screens/recommendlist/postlist";

const PostStack = createNativeStackNavigator();

export default function PostDetailScreen() {
  return (
    <PostStack.Navigator
      initialRouteName="DetailScreen"
      screenOptions={{ headerStyle: { backgroundColor: "rgb(134,134,132)" }}}
    >
      <PostStack.Screen name="Post" component={Post} />
      <PostStack.Screen
        name="postRecommendScreen"
        component={RecommendScreen}
        option={{ headerShown: false }}
      />
  
      <PostStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "Detail Screen",
          headerBackTitle: "",
          headerTitleStyle: {color: "white"},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Image source={require("../assets/images/backicon.png")} />
            </TouchableOpacity>
          ),
        })}
      />
    </PostStack.Navigator>
  );
}
