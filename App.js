import * as React from "react";
import { SafeAreaView } from "react-native";
import IndexScreen from "./screens/index";
import Navigator from "./navigation/nav_01";
import Post from "./screens/search/post";
import SearchResultsScreen from "./screens/search/postlist";
import feed from "./assets/data/feed";

function App() {
  return (<Navigator></Navigator>);
  // return (
  //   <>
  //     <SafeAreaView>
  //       <SearchResultsScreen />
  //     </SafeAreaView>
  //   </>
  // );
}

// export default withAuthenticator(App);
export default App;
