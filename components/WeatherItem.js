import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WeatherItem = ({ description, icon, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.moziBox}>
          <Text style={styles.text}>{description}</Text>
        </View>

        <View style={styles.gazoBox}>
          <Image style={{ width: 70, height: 70 }} source={{ uri: icon }} />
          <Text style={styles.subText}>{name}</Text>
        </View>
      </View>
    </View>
  );
};
export default WeatherItem;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },

  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  },

  text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "red",
  },
});
