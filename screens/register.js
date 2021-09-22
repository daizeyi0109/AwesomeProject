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


s

function Register({ navigation }) {
  // state = {
  //   email: "XXXX@mail.com",
  // };
  const [email, setEmail] = useState("");

  const emailChangeText = (email) => {
    // this.setState({ email });
    useState(email);
  };

  const emailSubmitEditing = () => {
    // console.log('完成');
    // 对邮箱格式进行校验
    const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    // const email = this.state.email;
    console.log(email);
    console.log(reg.test(email))
    if (!reg.test(email)) {
      // this.setState({emailValid});
      alert("Please enter a valid email address");
      // return;
    }
  }
  // // 邮箱输入
  // emailChangeText = (email) => {
  //   this.setState({ email });
  // };

  // emailSubmitEditing=()=> {
  //   // console.log('完成');
  //   // 对邮箱格式进行校验
  //   const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  //   const email = this.state.email;
  //   console.log(email);
  //   console.log (reg.test(email))
  //   if(!reg.test(email)) 
  //   {
  //       // this.setState({emailValid});
  //       alert("Please enter a valid email address");
  //       // return;
  //   }
  // }

  // render()
  //  {
  // const { email } = this.state;
  return (
    <View style={{ position: 'absolute', width: 343, left: "50%", marginLeft: -172 }}>
      {/* Title */}
      <View style={styles.title}>
        <Text style={{ fontSize: 40, fontFamily: "Futura" }}>Register</Text>
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
          value={{ email }}
          // onChangeText={this.emailChangeText}
          onChangeText={emailChangeText(email)}
          // onSubmitEditing={this.emailSubmitEditing}
          onSubmitEditing={emailSubmitEditing}
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
      <TouchableOpacity style={styles.input_icon} onPress={() => navigation.navigate("RegisterType")}>
        <Image source={require("../assets/images/register_next.png")} />
      </TouchableOpacity>
    </View>
  );
  // }
}




const styles = StyleSheet.create({
  title: {
    marginTop: 104,
  },
  input: {
    paddingLeft: 10,
    marginBottom: 16,
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
  },
  input_icon: {
    marginTop: 16,

  },
});

export default Register;
