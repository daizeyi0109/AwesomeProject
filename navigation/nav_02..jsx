import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import RecommendScreen from "../screens/recfunctionScreen/recommend";
import ChatScreen from "../screens/recfunctionScreen/chat";
import SearchScreen from "../screens/recfunctionScreen/search";
import PersonalScreen from "../screens/recfunctionScreen/personal";
import PublishScreen from "../screens/recfunctionScreen/publish";

import config from "../src/aws-exports";
// import config from './src/aws-exports'
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure(config);

const BottomTab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }) => {
  <TouchableOpacity
    style={{ top: -30, justifyContent: "center", alignItems: "center" }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>;
};

function BottomTabStack() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Recommend") {
            iconName = focused ? "ios-home-outline" : "ios-home-sharp";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search-outline" : "ios-search-sharp";
          } else if (route.name === "Chat") {
            iconName = focused
              ? "ios-chatbubble-outline"
              : "ios-chatbubble-sharp";
          } else if (route.name === "Personal") {
            iconName = focused
              ? "person-circle-outline"
              : "person-circle-sharp";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowIcon: "true",
        headerShown: false,
        initialRouteName: "Recommend",
      })}
    >
      <BottomTab.Screen name="Recommend" component={RecommendScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen
        name="Publish"
        component={PublishScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({}) => (
            <View
              style={{
                position: "absolute",
                bottom: -20, // space from bottombar
                height: 70,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "rgba(0,0,0,0.5)",
                shadowOffset: { height: 4 },
                shadowOpacity: 0.67,
              }}
            >
              {/* <Ionicons name="add-circle-outline" color="grey" size={68}/> */}
              <Image source={require("../assets/images/post.png")} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen name="Chat" component={ChatScreen} />
      <BottomTab.Screen name="Personal" component={PersonalScreen} />
    </BottomTab.Navigator>
  );
}

export default withAuthenticator(BottomTabStack);
