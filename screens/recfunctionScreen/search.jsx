import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import  SearchResultsScreen from "../searchlist/postlistSearch";

const SearchScreen = ({ navigation }) => {
  const [inputText,setInputText] = useState ("");
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
          Search
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="WHAT YOU WANT？"
        placeholderTextColor="#ccc"
        keyboardType="default"
        returnKeyType="next"
        value = {inputText}
        onChangeText = {setInputText}
      />
      {/* MAYBE YOU WANT...*/}
      <View >
        <Text
          style={{
            fontSize: 13,
            // fontWeight: "3",
            fontFamily: "Verdana",
            fontWeight: "bold",
          }}
        >
          MAYBE YOU WANT...
        </Text>
      </View>
      <SearchResultsScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 104,
    marginBottom: 16,
  },
  input: {
    paddingLeft: 10,
    marginBottom: 16,
    // backgroundColor: "white",
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
  },
});

export default SearchScreen;
