import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import IndexScreen from "../screens/index";
import IndexScreen from "./nav_00";
import BottomTabStack from "./nav_02.";
// import PostDetailScreen from "./nav_03";
import DetailScreen from "../screens/Detail/detail";

const navStack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        {/* huan  */}
        <navStack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={{ headerShown: false }}
        />
        <navStack.Screen
          name="BottomTabStack"
          component={BottomTabStack}
          options={{ gestureEnabled: false, headerShown: false }}
        />
        <navStack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={({ navigation }) => ({
            headerTransparent: true,
            headerTitle: "Detail Screen",
            headerBackTitle: "",
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: "tomato" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../assets/images/backicon.png")} />
              </TouchableOpacity>
            ),
          })}
        />
      </navStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
