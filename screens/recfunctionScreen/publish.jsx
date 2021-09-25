import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../src/graphql/mutations";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PublishScreen = ({ navigation }) => {
  const currentIndexRef = useRef({
    image: "",
    type: "",
    title: "",
    description: "",
    bed: 0,
    bedroom: 0,
    oldPrice: 0,
    newPrice: 0,
  }); // 不能用useState 会导致数据更新不及时

  const fetchPost = async () => {
    try {
      const postsResult = await API.graphql(
        graphqlOperation(mutations.createPost, { input: currentIndexRef.current})
      );
      console.log(postsResult);
    } catch (e) {
      console.log(e);
    }
  };

  const testfunction = (values) => {
    currentIndexRef.current = values;
    console.log("test");
    console.log(currentIndexRef.current);
    fetchPost();
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
          <Text style={styles.title_type}>PublishScreen</Text>
        </View>

        {/* MAYBE YOU WANT...*/}
        <View>
          <Text style={styles.title_type_littler}>WHAT YOU WANNA SELL...</Text>
        </View>

        <Formik
          initialValues={{
            image: "",
            type: "",
            title: "",
            description: "",
            bed: 0,
            bedroom: 0,
            oldPrice: 0,
            newPrice: 0,
          }}
          validate={(values) => {
            let errors = {};
            if (values.image.length === 0) {
              errors.image = "Image URL can not be empty";
            }
            if (values.type.length === 0) {
              errors.type = "Type can not be empty";
            }
            if (values.title.length === 0) {
              errors.title = "Title can not be empty";
            }
            if (values.description.length === 0) {
              errors.description = "Description can not be empty";
            }
            if (!values.oldPrice) {
              errors.oldPrice = "Required";
            }
            if (!values.newPrice) {
              errors.newPrice = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => testfunction(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ flex: 1, fontSize: 17 }}>Image:</Text>
                <TextInput
                  onChangeText={handleChange("image")}
                  onBlur={handleBlur("image")}
                  value={values.image}
                  style={styles.textInput}
                />
              </View>
              {errors.image ? (
                <Text style={styles.tips}>
                  <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={24}
                    color="red"
                  />
                  {errors.image}
                </Text>
              ) : null}

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ flex: 1, fontSize: 17 }}>Type:</Text>
                <TextInput
                  onChangeText={handleChange("type")}
                  onBlur={handleBlur("type")}
                  value={values.type}
                  style={styles.textInput}
                />
              </View>
              {errors.title ? (
                <Text style={styles.tips}>
                  <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={24}
                    color="red"
                  />
                  {errors.title}
                </Text>
              ) : null}

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ flex: 1, fontSize: 17 }}>Title:</Text>
                <TextInput
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  value={values.title}
                  style={styles.textInput}
                />
              </View>
              {errors.title ? (
                <Text style={styles.tips}>
                  <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={24}
                    color="red"
                  />
                  {errors.title}
                </Text>
              ) : null}

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ flex: 1, fontSize: 17 }}>Intro:</Text>
                <TextInput
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                  style={styles.textInput}
                
                />
              </View>
              {errors.description ? (
                <Text style={styles.tips}>
                  <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={24}
                    color="red"
                  />
                  {errors.description}
                </Text>
              ) : null}

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ flex: 1, fontSize: 17 }}>Old💲:</Text>
                <TextInput
                  onChangeText={handleChange("oldPrice")}
                  onBlur={handleBlur("oldPrice")}
                  value={values.oldPrice}
                  style={styles.textInput}
                
                />
              </View>
              {errors.oldPrice ? (
                <Text style={styles.tips}>
                  <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={24}
                    color="red"
                  />
                  {errors.oldPrice}
                </Text>
              ) : null}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ flex: 1, fontSize: 17 }}>New💲:</Text>
              <TextInput
                onChangeText={handleChange("newPrice")}
                onBlur={handleBlur("newPrice")}
                value={values.newPrice}
                style={styles.textInput}
              
              />
              </View>
              {errors.newPrice ? (
                <Text style={styles.tips}>
                  <MaterialCommunityIcons
                    name="exclamation-thick"
                    size={24}
                    color="red"
                  />
                  {errors.newPrice}
                </Text>
              ) : null}
              <TouchableOpacity onPress={handleSubmit} style={styles.upload}>
                {/* <MaterialCommunityIcons
                  name="arrow-up-thick"
                  size={60}
                  color="black"
                /> */}
                <Image source={require("../../assets/images/upload.png")} style={{marginTop:10}}/>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 104,
  },
  title_type: {
    fontSize: 40,
    fontFamily: "Futura",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.67,
  },
  title_type_littler: {
    fontSize: 13,
    fontFamily: "Verdana",
    fontWeight: "bold",
    marginTop: 20,
  },
  textInput: {
    paddingLeft: 10,
    marginBottom: 10,
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
    flex: 4,
  },
  tips: {
    color: "rgb(248,0,22)",
    marginBottom: 10,
  },
  upload: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PublishScreen;
