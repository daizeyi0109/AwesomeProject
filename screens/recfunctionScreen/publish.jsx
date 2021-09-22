import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PublishScreen = ({ navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        width: 343,
        left: "50%",
        marginLeft: -172,
      }}
    >
      {/* Title */}
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Futura",
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.67,
          }}
        >
          PublishScreen
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 104,
  },
});

export default PublishScreen;
