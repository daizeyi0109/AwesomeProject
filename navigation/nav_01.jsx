import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import IndexScreen from "../screens/index";
import IndexScreen from "./nav_00"
import BottomTabStack from "./nav_02.";
import PostDetailScreen from "./nav_03";

const navStack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <navStack.Navigator screenOptions={{ headerShown: false }}>
        {/* huan  */}
        <navStack.Screen name="IndexScreen" component={IndexScreen} />
        <navStack.Screen
          name="BottomTabStack"
          component={BottomTabStack}
          options={{ gestureEnabled: false }}
        />
        <navStack.Screen name="DetailScreen" component={PostDetailScreen} />
      </navStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
