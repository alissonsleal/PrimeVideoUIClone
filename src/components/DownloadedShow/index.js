import React from "react";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  LeftSize,
  ThumbnailImage,
  RightSize,
  Title,
  Description,
  Prime,
  Arrow,
} from "./styles";

const DownloadedShow = ({ item, name }) => {
  return (
    <Container>
      <LeftSize>
        <ThumbnailImage source={item.source} />
      </LeftSize>
      <RightSize>
        <Title>{name}</Title>
        <Description>1 episode 150 MB</Description>
        <Prime>prime</Prime>
        <Arrow>
          <Feather name="chevron-right" size={34} color="gray" />
        </Arrow>
      </RightSize>
    </Container>
  );
};

export default DownloadedShow;
