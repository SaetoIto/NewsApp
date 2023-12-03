import Constants from "expo-constants";
import * as React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function DetailScreen(props) {
  const { route } = props;
  const { article } = route.params;
  console.log(article);
  return <WebView source={{ uri: article.url }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
