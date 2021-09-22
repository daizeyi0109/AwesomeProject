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

function RegisterType({ navigation }) {
  const [email, setEmail] = useState("");
  const emailChangeText = (email) => {
    // this.setState({ email });
    useState(email);
  };

  // Digital
  const [selected_D, setSelected_D] = useState(true);
  const [selectstyle_D, setSelectStyle_D] = useState(null);
  const selectState_D = () => {
    console.log(selected_D);
    setSelected_D(!selected_D);
    if (selected_D === true) {
      setSelectStyle_D("#B9B8B8");
    } else {
      setSelectStyle_D(null);
    }
  };

  // Clothes
  const [selected_C, setSelected_C] = useState(true);
  const [selectstyle_C, setSelectStyle_C] = useState(null);
  const selectState_C = () => {
    console.log(selected_C);
    setSelected_C(!selected_C);
    if (selected_C === true) {
      setSelectStyle_C("#B9B8B8");
    } else {
      setSelectStyle_C(null);
    }
  };

  // Furniture
  const [selected_F, setSelected_F] = useState(true);
  const [selectstyle_F, setSelectStyle_F] = useState(null);
  const selectState_F = () => {
    console.log(selected_F);
    setSelected_F(!selected_F);
    if (selected_F === true) {
      setSelectStyle_F("#B9B8B8");
    } else {
      setSelectStyle_F(null);
    }
  };

  // Makeup
  const [selected_M, setSelected_M] = useState(true);
  const [selectstyle_M, setSelectStyle_M] = useState(null);
  const selectState_M = () => {
    console.log(selected_M);
    setSelected_M(!selected_M);
    if (selected_M === true) {
      setSelectStyle_M("#B9B8B8");
    } else {
      setSelectStyle_M(null);
    }
  };

  // Game
  const [selected_G, setSelected_G] = useState(true);
  const [selectstyle_G, setSelectStyle_G] = useState(null);
  const selectState_G = () => {
    console.log(selected_G);
    setSelected_G(!selected_G);
    if (selected_G === true) {
      setSelectStyle_G("#B9B8B8");
    } else {
      setSelectStyle_G(null);
    }
  };

  // Toy
  const [selected_T, setSelected_T] = useState(true);
  const [selectstyle_T, setSelectStyle_T] = useState(null);
  const selectState_T = () => {
    console.log(selected_T);
    setSelected_T(!selected_T);
    if (selected_T === true) {
      setSelectStyle_T("#B9B8B8");
    } else {
      setSelectStyle_T(null);
    }
  };

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
        <Text style={{ fontSize: 40, fontFamily: "Futura" }}>Register</Text>
      </View>

      <View
        style={{
          // backgroundColor: "gray",
          width: 343,
          height: 68,
          // marginLeft: 20,
          marginTop: 46,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter your Account name"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          returnKeyType="next"
          value={{ email }}
          // onChangeText={this.emailChangeText}
          onChangeText={emailChangeText(email)}
          // onSubmitEditing={this.emailSubmitEditing}
          // onSubmitEditing={emailSubmitEditing}
        />
      </View>

      <View style={styles.title_type}>
        <Text
          style={{ fontSize: 15, fontFamily: "Courier", fontWeight: "bold" }}
        >
          Choose your Type
        </Text>
      </View>

      {/* Type选择 （数码）（生活用品） （） （） （） （） （） （） */}
      <View style={styles.typecontainer}>
        <TouchableOpacity
          style={[styles.typeitem, { backgroundColor: selectstyle_D }]}
          onPress={selectState_D}
        >
          <Text style={{ lineHeight: 24, textAlign: "center" }}>Digital</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeitem, { backgroundColor: selectstyle_C }]}
          onPress={selectState_C}
        >
          <Text style={{ lineHeight: 24, textAlign: "center" }}>Clothes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeitem, { backgroundColor: selectstyle_F }]}
          onPress={selectState_F}
        >
          <Text style={{ lineHeight: 24, textAlign: "center" }}>Furniture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeitem, { backgroundColor: selectstyle_M }]}
          onPress={selectState_M}
        >
          <Text style={{ lineHeight: 24, textAlign: "center" }}>Makeup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeitem, { backgroundColor: selectstyle_G }]}
          onPress={selectState_G}
        >
          <Text style={{ lineHeight: 24, textAlign: "center" }}>Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeitem, { backgroundColor: selectstyle_T }]}
          onPress={selectState_T}
        >
          <Text style={{ lineHeight: 24, textAlign: "center" }}>Toy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.input_icon}
        onPress={() => navigation.navigate("BottomTabStack")}
      >
        <Image source={require("../assets/images/signup.png")} />
      </TouchableOpacity>

      <View style={[styles.title_type, { width: 365 }]}>
        <Text style={{ fontSize: 14, fontFamily: "Futura" }}>
          By signing up, you agree to Photo’s Terms of Service and Privacy
          Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 104,
    // marginLeft: 20,
  },
  title_type: {
    marginTop: 15,
    // marginLeft: 20,
  },
  input: {
    paddingLeft: 10,
    marginBottom: 16,
    // backgroundColor: "white",
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
  },
  typecontainer: {
    width: 343,
    height: 75,
    // marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  typeitem: {
    width: 87,
    height: 28,
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 15,
    // backgroundColor: "blue",
  },
  input_icon: {
    marginTop: 16,
    // marginLeft: 20,
  },
});

export default RegisterType;
