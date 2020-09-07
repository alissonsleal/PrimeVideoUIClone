import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

import Routes from "./src/routes";

import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    openSans300: OpenSans_300Light,
    openSans400: OpenSans_400Regular,
    openSans700: OpenSans_700Bold,
    useFonts,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
