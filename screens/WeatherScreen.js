import React from "react";
import { StyleSheet, View } from "react-native";
import WeatherItem from "../components/WeatherItem";

export default function WeatherScreen() {
  return (
    <View>
      <WeatherItem description="東京" icon="" name="俄雨" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
