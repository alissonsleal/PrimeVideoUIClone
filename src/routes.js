import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Entypo,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import colors from "./styles/colors";

import Home from "./pages/Home/HomeRoutes";
import ComingSoon from "./pages/ComingSoon";

const { Navigator, Screen } = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
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
            /* fontFamily: "openSans400", */
            fontSize: 11,
            marginTop: 10,
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.blue,
        }}
      >
        <Screen
          name="Home"
          component={Home}
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
        <Screen
          name="Find"
          component={ComingSoon}
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
        <Screen
          name="Downloads"
          component={ComingSoon}
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
        <Screen
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
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
