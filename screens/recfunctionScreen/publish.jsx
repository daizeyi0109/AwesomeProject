// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Button,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { Formik } from "formik";
// import { API, graphqlOperation } from "aws-amplify";
// // import { createPost } from "../../src/graphql/mutations";
// import * as mutations from "../../src/graphql/mutations";
// const PublishScreen = ({ navigation }) => {
// const [inputitems, setInputItems] = useState({
//   image: "",
//   type: "",
//   title: "",
//   description: "",
//   bed: 0,
//   bedroom: 0,
//   oldPrice: 0,
//   newPrice: 0,
// });

//   const fetchPost = async () => {
//     try {
//       const postsResult = await API.graphql(
//         graphqlOperation(mutations.createPost, { input: inputitems })
//       );
//       console.log(postsResult);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   // const testfunction = () => {
//   //   // console.log(items);
//   //   // setInputItems(items);
//   //   console.log("test");
//   //   console.log(inputitems);
//   //   // fetchPost();
//   // };

//   return (
//     <View
//       style={{
//         position: "absolute",
//         width: 343,
//         left: "50%",
//         marginLeft: -172,
//         height: "100%",
//       }}
//     >
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Title */}
//         <View style={styles.title}>
//           <Text style={styles.title_type}>PublishScreen</Text>
//         </View>

//         {/* MAYBE YOU WANT...*/}
//         <View>
//           <Text style={styles.title_type_littler}>WHAT YOU WANNA SELL...</Text>
//         </View>

//         <Formik
//           initialValues={{
//             image: "",
//             type: "",
//             title: "",
//             description: "",
//             bed: 0,
//             bedroom: 0,
//             oldPrice: 0,
//             newPrice: 0,
//           }}
//           onSubmit={(values) => setInputItems(values)}

//         >
//           {({ handleChange, handleBlur, handleSubmit, values }) => (
//             <View style={{ marginTop: 20 }}>
//               <TextInput
//                 onChangeText={handleChange("image")}
//                 onBlur={handleBlur("image")}
//                 value={values.image}
//                 style={styles.textInput}
//                 placeholder="image"
//               />
//               <TextInput
//                 onChangeText={handleChange("type")}
//                 onBlur={handleBlur("type")}
//                 value={values.type}
//                 style={styles.textInput}
//                 placeholder="type"
//               />
//               <TextInput
//                 onChangeText={handleChange("title")}
//                 onBlur={handleBlur("title")}
//                 value={values.title}
//                 style={styles.textInput}
//                 placeholder="title"
//               />
//               <TextInput
//                 onChangeText={handleChange("description")}
//                 onBlur={handleBlur("description")}
//                 value={values.description}
//                 style={styles.textInput}
//                 placeholder="description"
//               />
//               <TextInput
//                 onChangeText={handleChange("bed")}
//                 onBlur={handleBlur("bed")}
//                 value={values.bed}
//                 style={styles.textInput}
//                 placeholder="bed"
//               />
//               <TextInput
//                 onChangeText={handleChange("bedroom")}
//                 onBlur={handleBlur("bedroom")}
//                 value={values.bedroom}
//                 style={styles.textInput}
//                 placeholder="bedroom"
//               />
//               <TextInput
//                 onChangeText={handleChange("oldPrice")}
//                 onBlur={handleBlur("oldPrice")}
//                 value={values.oldPrice}
//                 style={styles.textInput}
//                 placeholder="oldPrice"
//               />
//               <TextInput
//                 onChangeText={handleChange("newPrice")}
//                 onBlur={handleBlur("newPrice")}
//                 value={values.newPrice}
//                 style={styles.textInput}
//                 placeholder="newPrice"
//               />
//               <Button onPress={handleSubmit} title="Submit" />
//             </View>
//           )}
//         </Formik>
//         {/* <Button onPress={console.log(inputitems)} title="Show" /> */}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     marginTop: 104,
//   },
//   title_type: {
//     fontSize: 40,
//     fontFamily: "Futura",
//     shadowColor: "rgba(0,0,0,0.5)",
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.67,
//   },
//   title_type_littler: {
//     fontSize: 13,
//     fontFamily: "Verdana",
//     fontWeight: "bold",
//     marginTop: 20,
//   },
//   textInput: {
//     paddingLeft: 10,
//     marginBottom: 16,
//     height: 52,
//     borderColor: "#000000",
//     borderWidth: 2,
//   },
// });

// export default PublishScreen;

import React, { useState } from "react";
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
// import { createPost } from "../../src/graphql/mutations";
import * as mutations from "../../src/graphql/mutations";
const PublishScreen = ({ navigation }) => {
  const [inputImage, setInputImage] = useState();
  const [inputType, setInputType] = useState();
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [inputOld, setInputOld] = useState();
  const [inputNew, setInputNew] = useState();
  const [inputitems, setInputItems] = useState({
    image: "",
    type: "",
    title: "",
    description: "",
    bed: 0,
    bedroom: 0,
    oldPrice: 0,
    newPrice: 0,
  });

  const fetchPost = async () => {
    try {
      const postsResult = await API.graphql(
        graphqlOperation(mutations.createPost, { input: inputitems })
      );
      console.log(postsResult);
    } catch (e) {
      console.log(e);
    }
  };

  const testFunctions = () => {
    console.log("----------------------------------------");
    console.log("!!!!!!!");
    console.log(inputitems);
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

        {/* Input Form */}
        <View style={{ marginTop: 20 }}>
          <TextInput
            value={inputImage}
            style={styles.textInput}
            onChangeText={setInputImage}
            placeholder="image"
          />
          <TextInput
            value={inputType}
            style={styles.textInput}
            onChangeText={setInputType}
            placeholder="type"
          />
          <TextInput
            value={inputTitle}
            style={styles.textInput}
            onChangeText={setInputTitle}
            placeholder="title"
          />
          <TextInput
            value={inputDescription}
            style={styles.textInput}
            onChangeText={setInputDescription}
            placeholder="description"
          />
          <TextInput
            value={inputOld}
            style={styles.textInput}
            onChangeText={setInputOld}
            placeholder="oldPrice"
          />
          <TextInput
            value={inputNew}
            style={styles.textInput}
            onChangeText={setInputNew}
            placeholder="newPrice"
          />
        </View>

        <Button
          onPress={() =>
            setInputItems({
              image: inputImage,
              type: inputType,
              title: inputTitle,
              description: inputDescription,
              bed: 0,
              bedroom: 0,
              oldPrice: inputOld,
              newPrice: inputNew,
            })
          }
          title="confirm"
        />
        <Button onPress={() => testFunctions()} title="Submit" />
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
    marginBottom: 16,
    height: 52,
    borderColor: "#000000",
    borderWidth: 2,
  },
});

export default PublishScreen;
