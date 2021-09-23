import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

const PublishScreen = ({ navigation }) => {
  const [inputitems, setInputItems] = useState([]);
  const testfunction =(items) =>{
    setInputItems(items);
    console.log(inputitems);
  }
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
        <Text style={styles.title_type}>PublishScreen</Text>
      </View>

      <Formik
        initialValues={{ email: "", title: "" }}
        onSubmit={(values) => testfunction(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ marginTop: 50 }}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={{ height: 50, backgroundColor: "blue", marginBottom: 20 }}
            />
            <TextInput
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              style={{ height: 50, backgroundColor: "blue" }}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
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
});

export default PublishScreen;
