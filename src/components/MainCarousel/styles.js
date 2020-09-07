import styled from "styled-components/native";

export const Carousel = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  snapToStart: true,
})`
  padding: 0;
  margin: 0;
  height: 125px;
  width: 400px;
`;

export const CarouselContainer = styled.TouchableOpacity`
  margin: 0px;
  overflow: hidden;
  align-items: center;
  background-color: white;
  height: 125px;
  width: 400px;
`;

export const CarouselImage = styled.Image`
  height: 125px;
  width: 400px;
`;
