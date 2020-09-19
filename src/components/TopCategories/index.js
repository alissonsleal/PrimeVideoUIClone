import React from "react";

import {
  Wrapper,
  CategoryContainer,
  CategoryChild,
  CategoryLeft,
  CategoryRight,
  CategoryText,
} from "./styles";

const TopCategories = () => {
  return (
    <Wrapper>
      <CategoryContainer>
        <CategoryLeft>
          <CategoryChild>
            <CategoryText>Included with Prime</CategoryText>
          </CategoryChild>
          <CategoryChild>
            <CategoryText>TV</CategoryText>
          </CategoryChild>
          <CategoryChild>
            <CategoryText>Amazon Originals</CategoryText>
          </CategoryChild>
        </CategoryLeft>
        <CategoryRight>
          <CategoryChild>
            <CategoryText>Channels</CategoryText>
          </CategoryChild>
          <CategoryChild>
            <CategoryText>Movies</CategoryText>
          </CategoryChild>
          <CategoryChild>
            <CategoryText>Kids</CategoryText>
          </CategoryChild>
        </CategoryRight>
      </CategoryContainer>
    </Wrapper>
  );
};

export default TopCategories;
