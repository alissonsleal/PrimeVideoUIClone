import React from "react";

import { Container, SearchBar, SearchContainer, MicButton } from "./styles";

import { Entypo, FontAwesome } from "@expo/vector-icons";

const Search = () => {
  return (
    <Container>
      <SearchContainer>
        <Entypo name="magnifying-glass" size={30} color="#FFF" />
        <SearchBar />
        <MicButton>
          <FontAwesome name="microphone" size={20} color="#FFF" />
        </MicButton>
      </SearchContainer>
    </Container>
  );
};

export default Search;
