import React from "react";

import data from "./data";

import { Wrapper, ShowsContainer, ShowsImage, List } from "./styles";

const ShowsCarousel = () => {
  const ShowsItem = ({ item }) => (
    <ShowsContainer>
      <ShowsImage source={item.source} />
    </ShowsContainer>
  );
  return (
    <Wrapper>
      <List>
        {data.map((item) => (
          <ShowsItem key={item.name} item={item} />
        ))}
      </List>
    </Wrapper>
  );
};

export default ShowsCarousel;
