import React, { Component } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
export const DetailScreen = () => {
  const route = useRoute();
  console.log(route.params.itemid);
  return (
    <View style={{marginTop: 100}}>
      <Text> {route.params.itemid}</Text>
    </View>
  );
};

export default DetailScreen;
