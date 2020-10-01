import React from "react";

import MainCarousel from "../../../components/MainCarousel/index";
import ShowsCarousel from "../../../components/ShowsCarousel/index";

import { Wrapper, Container, Heading, Main } from "./styles";

const HomeTab = () => {
  return (
    <Wrapper>
      <Container>
        <MainCarousel />
        <Main>
          <Heading>Watch Next TV and movies</Heading>
          <ShowsCarousel />
          <Heading>Amazon Originals and Exclusives</Heading>
          <ShowsCarousel />
          <Heading>Recommended movies</Heading>
          <ShowsCarousel />
          <Heading>Watch Next TV and movies</Heading>
          <ShowsCarousel />
          <Heading>Watch Next TV and movies</Heading>
          <ShowsCarousel />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default HomeTab;
