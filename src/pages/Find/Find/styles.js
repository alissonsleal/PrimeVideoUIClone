import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.primary};
  height: 100%;
  flex-direction: column;
`;

export const Wrapper = styled.View`
  padding-horizontal: 20px;
`;

export const Heading = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: openSans700;
  padding-vertical: 4px;
`;

export const SeeMore = styled.Text`
  color: ${colors.blueLink};
  font-family: openSans400;
  margin-bottom: 35px;
`;
