import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.View``;

export const SearchContainer = styled.View`
  flex-direction: row;
  margin-vertical: 35px;
  padding: 10px;
  background-color: ${colors.primary};
  border-color: ${colors.gray};
  border-width: 1px;
  border-radius: 5px;
  height: 45px;
  color: ${colors.black};
  align-items: center;
  justify-content: space-between;
`;

export const SearchBar = styled.TextInput.attrs({
  placeholder: "Search by actor, title..",
})`
  height: 45px;
  width: 75%;
  margin-horizontal: 5px;
  color: ${colors.black};
  font-size: 18px;
  font-family: openSans400;
`;

export const MicButton = styled.TouchableOpacity``;
