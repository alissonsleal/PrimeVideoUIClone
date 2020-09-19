import React from "react";

import { Container, Heading, Wrapper, SeeMore } from "./styles";

import TopCategories from "../../../components/TopCategories/index";
import Search from "../../../components/Search/index";
import Genres from "../../../components/Genres/index";

const Find = () => {
  return (
    <Container>
      <Wrapper>
        <Search />

        <Heading>Top categories</Heading>
        <TopCategories />

        <Heading>Genres</Heading>
        <Genres name="Action and adventure" />
        <Genres name="Comedy" />
        <Genres name="Drama" />
        <Genres name="Documentary" />
        <Genres name="Kids and family" />
        <SeeMore>See more</SeeMore>

        <Heading>Channels</Heading>
        <Genres name="Starzplay" />
        <Genres name="Paramount+" />
        <Genres name="MGM" />
        <Genres name="Looke" />
        <Genres name="Noggin" />
      </Wrapper>
    </Container>
  );
};

export default Find;
