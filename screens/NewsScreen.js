import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import NewsKizi from "../components/NewsKizi";

const URI =
  "https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=ba3f34e9002f443bbdcf1b4729455e05";

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []); //第二引数が空の配列の場合はリロードした際に発火される

  const getNews = async () => {
    const response = await axios.get(URI); //axiosを用いてURIよりデータを引っ張て来る
    //console.log(response);
    setNews(response.data.articles); //data.articles配列から
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsKizi
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
            onPress={() => navigation.navigate("詳細ページ", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
