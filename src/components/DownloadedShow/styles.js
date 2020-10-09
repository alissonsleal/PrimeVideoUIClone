import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 110px;
`;
export const LeftSize = styled.View``;
export const ThumbnailImage = styled.Image`
  width: 180px;
  height: 100%;
  background-color: ${colors.blue};
`;

export const RightSize = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #1b2531;
  opacity: 1;
  padding: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 17px;
  font-family: openSans700;
  color: ${colors.black};
  margin-bottom: 5px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  font-family: openSans400;
  color: ${colors.gray};
  margin-bottom: 5px;
`;

export const Prime = styled.Text`
  font-size: 14px;
  font-family: openSans700;
  color: ${colors.blue};
  margin-bottom: -15px;
`;

export const Arrow = styled.Text`
  margin-left: 160px;
  justify-content: flex-end;
`;
