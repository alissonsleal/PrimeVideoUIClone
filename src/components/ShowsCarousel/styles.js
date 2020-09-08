import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.SafeAreaView``;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 0;

  /*  flex: 1;
  width: 100%;
  height: 75px; */
`;

export const ShowsContainer = styled.TouchableOpacity`
  /*   width: 133px; */
  margin-left: 15px;
`;

export const ShowsImage = styled.Image`
  height: 75px;
  width: 133px;
`;
