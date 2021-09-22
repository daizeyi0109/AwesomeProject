import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as ImagePicker from 'expo-image-picker';
import { Auth } from 'aws-amplify';


const PersonalScreen = ({  }) => {
  const [image, setImage] = useState('/Users/daizeyi/RN/Test-Expo/AwesomeProject/assets/images/Userprofile/MVtjq6SnT1A.jpg');


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        // onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={pickImage}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const logout = () => {
    Auth.signOut();
  }

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const bs = React.useRef(null);
  const fall = new Animated.Value(1);

  return (
    <>
      <View
        style={{
          position: "absolute",
          width: 343,
          left: "50%",
          marginLeft: -172,
        }}
      >
        {/* HeadPortrait */}
        <View style={styles.title}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            {/* <Image
              source={{ uri:"https://facebook.github.io/react/logo-og.png"}}
              style={styles.headPortrait}
            /> */}
          <Image source={{ uri: image }} style={styles.headPortrait} />
          </TouchableOpacity>
          {/* Username */}
          <Text style={styles.accountname}>Jane</Text>
          {/* Usertype */}
          <Text style={[styles.accountname, { fontSize: 15 }]}>
            Digital,Clothes,Toy
          </Text>
          {/* Button */}
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/images/Userprofile/published.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/images/Userprofile/bought.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/images/Userprofile/sold.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Image
              source={require("../../assets/images/Userprofile/logout.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* BottomSheet */}
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        callbackNodes={fall}
        enabledGestureInteraction={true}
        renderContent={renderInner}
        renderHeader={renderHeader}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 104,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headPortrait: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  accountname: {
    fontSize: 30,
    fontFamily: "Futura",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.67,
    marginTop: 15,
  },
  button: {
    marginTop: 20,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,

  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "tomato",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default PersonalScreen;
