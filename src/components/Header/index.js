import React from "react";

import primeLogo from "../../images/logo_white.png";

import { Container, Logo } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo source={primeLogo} />
    </Container>
  );
};

export default Header;
