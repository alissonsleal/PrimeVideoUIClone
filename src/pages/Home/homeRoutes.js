import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../../styles/colors";

import Home from "./index";
import ComingSoon from "./ComingSoon/index";
import Header from "../../components/Header/index";

const { Navigator, Screen } = createMaterialTopTabNavigator();

function homeRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Header />
      <Navigator
        tabBarOptions={{
          style: {
            height: 40,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          labelStyle: {
            fontFamily: "openSans400",
            fontSize: 12,
            marginTop: -20,
          },

          inactiveTintColor: colors.gray,
          activeTintColor: colors.black,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="TV Shows" component={ComingSoon} />
        <Screen name="Movies" component={ComingSoon} />
        <Screen name="Kids" component={ComingSoon} />
      </Navigator>
    </NavigationContainer>
  );
}

export default homeRoutes;
