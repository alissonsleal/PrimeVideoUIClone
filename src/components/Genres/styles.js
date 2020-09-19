import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Wrapper = styled.View``;

export const GenreContainer = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 0.5px;
  border-color: ${colors.lightGray};
`;

export const GenreText = styled.Text`
  font-size: 14px;
  font-family: openSans400;
  color: ${colors.lightGray};
`;

export const Arrow = styled.View``;
