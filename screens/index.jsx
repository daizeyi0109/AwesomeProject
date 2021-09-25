import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Auth } from "aws-amplify";

// Sign-UP

//  Index.page
const Index = ({ navigation }) => {
  const SignUp = () => {
    Auth.signUp();
  };
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/images/i2L2eWqrSxs.jpg")}
          style={styles.Indeximg}
        />

        <View style={{ position: "absolute" }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.button}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("BottomTabStack")}
          >
            <Image source={require("../assets/images/go.png")} />
          </TouchableOpacity>

          {/* <TouchableOpacity
            // style={styles.register}
            // onPress={() => navigation.navigate("Register")}
            onPress={() => navigation.navigate("Register")}
          >
            <Image source={require("../assets/images/register_index.png")} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Index;

//  Styles
const styles = StyleSheet.create({
  Indeximg: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  logo: {
    // backgroundColor:'gray',
    position: "absolute",
    margin: 99,
    marginTop: 250,
    resizeMode: "contain",
    width: 190,
  },
  button: {
    position: "absolute",
    flexDirection: "row",
    // justifyContent: "space-between",
    width: 343,
    height: 52,
    top: 727,
    left: "50%",
    marginLeft: -170,
    justifyContent: "center",
    alignItems: "center",
  },
});
