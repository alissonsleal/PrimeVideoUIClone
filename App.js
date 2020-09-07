import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

import { OpenSans_400Regular, useFonts } from "@expo-google-fonts/open-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    openSans400: OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Routes />
      <StatusBar style="light" translucent={false} />
    </>
  );
}
