import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

// import config from "../src/aws-exports"
// // import config from './src/aws-exports'
// import Amplify from 'aws-amplify'
// import { withAuthenticator } from 'aws-amplify-react-native'
// Amplify.configure(config)

function Login({navigation}) {
  return (
    <View style={{position: 'absolute',width:343,left:"50%",marginLeft:-172}}>
      {/* Title */}
      <View style={styles.title}>
        <Text style={{ fontSize: 40, fontFamily: "Futura" }}>Login</Text>
      </View>

      <View
        style={{
          // backgroundColor: "gray",
          width: 343,
          height: 120,
          marginTop: 46,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter your Email address"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#ccc"
          keyboardType="default"
          secureTextEntry={true}
          returnKeyType="done"
        />
      </View>
      {/* <TouchableOpacity style={styles.input_icon} onPress={() => navigation.navigate("BottomTabStack")}> */}
      <TouchableOpacity style={styles.input_icon} onPress={() => navigation.navigate("BottomTabStack")}>
        <Image source={require("../assets/images/login.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 104,

  },
  input: {
    marginBottom: 16,
    // backgroundColor: "white",
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
    paddingLeft:10,
  },
  input_icon: {
    marginTop:16,


  }
});

export default Login;
