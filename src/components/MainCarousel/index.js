import React from "react";

import data from "./data";

import { Carousel, CarouselContainer, CarouselImage } from "./styles";

const MainCarousel = () => {
  const CategoryItem = ({ item }) => (
    <CarouselContainer>
      <CarouselImage source={item.source} />
    </CarouselContainer>
  );

  return (
    <Carousel>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </Carousel>
  );
};

export default MainCarousel;
