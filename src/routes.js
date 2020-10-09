import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  MaterialCommunityIcons,
  Entypo,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import colors from "./styles/colors";

import Header from "./components/Header/index";

import Home from "./pages/Home/HomeTab/index";
import ComingSoon from "./pages/ComingSoon";
import Find from "./pages/Find/Find";
import Downloads from "./pages/Downloads/Downloads";

const Bot = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

function HomeRoutes() {
  return (
    <>
      <Header />
      <Top.Navigator
        swipeEnabled={false}
        lazy={true}
        tabBarOptions={{
          style: {
            height: 40,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          labelStyle: {
            fontFamily: "openSans400",
            fontSize: 12,
            marginTop: 0,
            textTransform: "none",
          },

          inactiveTintColor: colors.gray,
          activeTintColor: colors.black,
        }}
      >
        <Top.Screen
          name="Home"
          component={Home}
          options={{ upperCaseLabel: false }}
        />
        <Top.Screen name="TV Shows" component={Home} />
        <Top.Screen name="Movies" component={Home} />
        <Top.Screen name="Kids" component={Home} />
      </Top.Navigator>
    </>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Bot.Navigator
        lazy={true}
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.tag,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: "center",
            justContent: "center",
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: "openSans400",
            fontSize: 11,
            marginTop: 10,
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.blue,
        }}
      >
        <Bot.Screen
          name="Home"
          component={HomeRoutes}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={size}
                  color={focused ? colors.blue : colors.blackOff}
                />
              );
            },
          }}
        />
        <Bot.Screen
          name="Find"
          component={Find}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Entypo
                  name="magnifying-glass"
                  size={size}
                  color={focused ? colors.blue : colors.blackOff}
                />
              );
            },
          }}
        />
        <Bot.Screen
          name="Downloads"
          component={Downloads}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Feather
                  name="download"
                  size={size}
                  color={focused ? colors.blue : colors.blackOff}
                />
              );
            },
          }}
        />
        <Bot.Screen
          name="My Stuff"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-person"
                  size={size}
                  color={focused ? colors.blue : colors.blackOff}
                />
              );
            },
          }}
        />
      </Bot.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
