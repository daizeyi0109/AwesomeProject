import * as React from "react";
import IndexScreen from "./screens/index";
import Navigator from "./navigation/nav_01";

// import config from './src/aws-exports'
// import Amplify from 'aws-amplify'
// import { withAuthenticator } from 'aws-amplify-react-native'
// Amplify.configure(config)

function App() {
  return (<Navigator></Navigator>);
}

// export default withAuthenticator(App);
export default App;
