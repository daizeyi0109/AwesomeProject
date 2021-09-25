import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import Swiper from "react-native-swiper";
import RecommendResultsScreen from "../recommendlist/postlist";
import DetailScreen from "../Detail/detail";

const RecommendScreen = ( {route,navigation} ) => {
  console.log(route.params);
  return (
    <View
      style={{
        position: "absolute",
        width: 343,
        left: "50%",
        marginLeft: -172,
        height: "100%",
        flex: 1,
      }}
    >
      {/* Scroll */}
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
            Recommend
          </Text>
        </View>
        {/* What’s new today */}
        <View style={styles.title_type}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "3",
              fontFamily: "Verdana",
              fontWeight: "bold",
            }}
          >
            WHAT'S NEW TODAY
          </Text>
        </View>

        {/* 轮播图 */}
        <View style={{ width: 345, height: 380 }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            loop={true}
            autoplay={true}
            dot={
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.3)",
                  width: 10,
                  height: 10,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
          >
            <TouchableOpacity testID="Hello" style={styles.slide1}>
              <Image
                source={require("../../assets/images/Carousel/Carousel_1.png")}
                style={styles.text}
              />
            </TouchableOpacity>
            <TouchableOpacity testID="Beautiful" style={styles.slide2}>
              <Image
                source={require("../../assets/images/Carousel/Carousel_2.png")}
                style={styles.text}
              />
            </TouchableOpacity>
            <TouchableOpacity testID="Simple" style={styles.slide3}>
              <Image
                source={require("../../assets/images/Carousel/Carousel_3.png")}
                style={styles.text}
              />
            </TouchableOpacity>
            <TouchableOpacity testID="Nice" style={styles.slide3}>
              <Image
                source={require("../../assets/images/Carousel/Carousel_4.png")}
                style={styles.text}
              />
            </TouchableOpacity>
          </Swiper>
        </View>
        {/* You may like */}
        <View style={styles.title_type}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "3",
              fontFamily: "Verdana",
              fontWeight: "bold",
            }}
          >
            YOU MAY LIKE
          </Text>
        </View>
        <Button title="Go to detail" onPress={() => navigation.navigate(DetailScreen)} />

        <RecommendResultsScreen />
      </ScrollView>
    </View>
  );
};



export default RecommendScreen;
const styles = StyleSheet.create({
  title: {
    marginTop: 104,
  },
  title_type: {
    marginTop: 15,
  },
  wrapper: {
    marginTop: 25,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 50,
  },
});


