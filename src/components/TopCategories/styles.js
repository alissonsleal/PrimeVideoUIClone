import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Wrapper = styled.View``;

export const CategoryContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 35px;
`;

export const CategoryLeft = styled.View`
  justify-content: flex-start;
  width: 48%;
`;
export const CategoryRight = styled.View`
  justify-content: flex-end;
  width: 48%;
`;

export const CategoryChild = styled.TouchableOpacity`
  background-color: #1f2932;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 10px;
`;

export const CategoryText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-family: openSans700;
  text-align: center;
`;
