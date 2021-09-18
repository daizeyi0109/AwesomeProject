/* eslint-disable react-native/no-inline-styles */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

function HomeScreen({ navigation }) {
  const [name, setName] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Home Screen </Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
        // onChangeText={this.handleName}
      />
      <Button
        title="GO to Detail"
        onPress={() => navigation.navigate("Detail", { name })}
        onPress={() => navigation.navigate("HelloWorldApp")}
      />
      <Button
        title="GO to Modal"
        onPress={() => navigation.navigate("Modal", { name })}
      />
    </View>
  );
}

function ModalScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}> Hi {name}, This is a ModalScreen </Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> DetailScreen Screen - Welcome {name} </Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function SettingScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> DetailScreen Screen - Welcome </Text>
    </View>
  );
}

const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Setting = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// ....................................................................
function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "tomato" } }}
    >
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <MainStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          // headerStyle: {backgroundColor: 'tomato'},
          title: "Detail Screen",
          headerRight: () => (
            // eslint-disable-next-line no-alert
            <Button title={"Tips"} onPress={() => alert("Hi")} />
          ),
          headerBackTitle: "Back",
        }}
      />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "tomato" } }}
    >
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

function SettingTabScreen() {
  return (
    <Setting.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "tomato" } }}
    >
      <Setting.Screen name="Setting" component={SettingScreen} />
    </Setting.Navigator>
  );
}

function MyTasb() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "reload-circle-outline" : "reload-circle";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowIcon: "true",
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={RootStackScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingTabScreen}
        options={{ tabBarBadge: 1, headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default class Nav extends React.Component {
  render() {
    return (

        <Drawer.Navigator>
          <Drawer.Screen
            name="MainPage"
            component={MyTasb}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>

    );
  }
}
const styles = StyleSheet.create({
  TextInput: {
    margin: 50,
    paddingTop: 23,
  },
});
