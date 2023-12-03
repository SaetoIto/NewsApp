import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DetailScreen from "./screens/DetailScreen";
import NewsScreen from "./screens/NewsScreen";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ニュース" component={NewsScreen} />
        <Stack.Screen name="詳細ページ" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
