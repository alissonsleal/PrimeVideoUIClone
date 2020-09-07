import React from "react";
import { Text } from "react-native";

import MainCarousel from "../../../components/MainCarousel/index";

import { Wrapper } from "./styles";

const HomeTab = () => {
  return (
    <Wrapper>
      <MainCarousel />
      <Text>HomeTab</Text>
    </Wrapper>
  );
};

export default HomeTab;
