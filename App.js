import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import DetailScreen from "./screens/DetailScreen";
import NewsScreen from "./screens/NewsScreen";
import WeatherScreen from "./screens/WeatherScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ニュース" component={NewsScreen} />
      <Stack.Screen name="詳細ページ" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const WeatherStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="天気予報" component={WeatherScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    if (route.name === "ニュース") {
      iconName = "newspaper-o";
    } else if (route.name === "天気予報") {
      iconName = "sun-o";
    }

    // You can return any component that you like here!
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ニュース" component={NewsStacks} />
        <Tab.Screen name="天気予報" component={WeatherStacks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
