import React from "react";

import { Wrapper, GenreContainer, GenreText, Arrow } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

const Genres = ({ name }) => {
  return (
    <Wrapper>
      <GenreContainer>
        <GenreText>{name}</GenreText>
        <Arrow>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#d3d3d3"
          />
        </Arrow>
      </GenreContainer>
    </Wrapper>
  );
};

export default Genres;
