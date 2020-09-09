import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView``;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 0;
`;

export const ShowsContainer = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const ShowsImage = styled.Image`
  height: 90px;
  width: 160px;
`;
