import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Listing = styled.ScrollView``;

export const Heading = styled.Text`
  color: ${colors.black};
  font-family: "openSans400";
  font-size: 30px;
`;

export const Wrapper = styled.View`
  background: ${colors.lightPrimary};
  justify-content: center;
  align-items: center;
  height: 800px;
  flex: 1;
`;
