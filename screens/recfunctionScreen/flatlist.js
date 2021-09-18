import React, { Component } from "react";

import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from "@expo/vector-icons";

const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={(item) => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.list_price}>
            <Text style={styles.year}>{item.year}</Text>
            <TouchableOpacity>
            <AntDesign name="pushpino" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: "center",
  },
  year: {
    textAlign: "center",
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  list: {
    paddingTop: 20,
    backgroundColor: "rgb(239,239,239)",
  },
  list_price: {
    // backgroundColor:"purple",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
});
