import styled from "styled-components/native";

export const Carousel = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  snapToStart: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 400px;
`;

export const CarouselContainer = styled.TouchableOpacity`
  width: 400px;
`;

export const CarouselImage = styled.Image`
  height: 125px;
  width: 400px;
`;
