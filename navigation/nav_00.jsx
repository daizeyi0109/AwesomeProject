import "react-native-gesture-handler";
import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "../screens/index";
import Register from "../screens/register";
import Login from "../screens/login";
import RegisterType from "../screens/registerType";

const indexStack = createNativeStackNavigator();

export default function IndexScreen() {
  return (
    <indexStack.Navigator initialRouteName="Index">
      <indexStack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />

      <indexStack.Screen
        name="Register"
        component={Register}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "",
          headerBackTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Index")}>
              <Image source={require("../assets/images/backicon.png")} />
            </TouchableOpacity>
          ),
        })}
      />
      <indexStack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "",
          headerBackTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Index")}>
              <Image source={require("../assets/images/backicon.png")} />
            </TouchableOpacity>
          ),
        })}
      />
      <indexStack.Screen
        name="RegisterType"
        component={RegisterType}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "",
          headerBackTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Image source={require("../assets/images/backicon.png")} />
            </TouchableOpacity>
          ),
        })}
      />
    </indexStack.Navigator>
  );
}
