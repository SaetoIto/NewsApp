import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import NewsKizi from "./components/NewsKizi";

const URI =
  "https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=ba3f34e9002f443bbdcf1b4729455e05";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URI);
    //console.log(response);
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsKizi
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center", //横の移動
    // justifyContent: "center", //縦の移動
  },
});
