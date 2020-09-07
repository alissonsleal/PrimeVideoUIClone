import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.View`
  height: 80px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 25px;
  resize-mode: contain;
`;
