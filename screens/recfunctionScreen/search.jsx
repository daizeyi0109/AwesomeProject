import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Post from "../searchlist/postSearch";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries";

const SearchScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  // const [inputItem, setInputItem] = useState(false);
  const [post, setPost] = useState([]);

  const inputChange = (content) => {
    setInputText(content);
    // setInputItem(true);
    fetchPost();
  };

  const fetchPost = async () => {
    try {
      const postsResult = await API.graphql(
        graphqlOperation(listPosts, {
          filter: { type: { contains: inputText } },
        })
      );
      console.log(postsResult);
      setPost(postsResult.data.listPosts.items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{
        position: "absolute",
        width: 343,
        left: "50%",
        marginLeft: -172,
        height: "100%",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {/* Input */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignContent: "center",
            // backgroundColor: "blue",
            // height: 70,
          }}
        >
          {/* <View> */}
          <TextInput
            style={styles.input}
            placeholder="WHAT YOU WANT？"
            placeholderTextColor="#ccc"
            keyboardType="default"
            returnKeyType="next"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={() => inputChange(inputText)} style={{alignSelf:"center"}}>
            <FontAwesome name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>

        {/* MAYBE YOU WANT...*/}
        <View>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Verdana",
              fontWeight: "bold",
            }}
          >
            MAYBE YOU WANT...
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={post}
            renderItem={({ item }) => <Post post={item} />}
          />
        </View>
      </ScrollView>
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
    marginTop: 16,
    marginBottom: 16,
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
    width: 300,
  },
});

export default SearchScreen;
