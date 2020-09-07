import styled from "styled-components/native";
import Constants from "expo-constants";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.lightPrimary};
  flex: 1;
  padding-top: ${statusBarHeight + "px"};

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.black};
  font-family: "openSans400";
  font-size: 30px;
`;
