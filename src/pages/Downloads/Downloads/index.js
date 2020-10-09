import React from "react";

import {
  Container,
  EditOptionView,
  EditOptionLeft,
  EditOptionText,
  EditOptionButton,
  EditOptionButtonText,
  EachChild,
} from "./styles";

import DownloadedShow from "../../../components/DownloadedShow";
import data from "../../../components/ShowsCarousel/data";

const Downloads = () => {
  return (
    <Container>
      <EditOptionView>
        <EditOptionLeft>
          <EditOptionText>3 videos • 1h37min • 450 MB</EditOptionText>
        </EditOptionLeft>
        <EditOptionButton>
          <EditOptionButtonText>Edit</EditOptionButtonText>
        </EditOptionButton>
      </EditOptionView>

      <EachChild>
        <DownloadedShow item={data[13]} name="Undone"></DownloadedShow>
      </EachChild>
      <EachChild>
        <DownloadedShow item={data[0]} name="The Boys"></DownloadedShow>
      </EachChild>
      <EachChild>
        <DownloadedShow item={data[1]} name="Community"></DownloadedShow>
      </EachChild>
    </Container>
  );
};

export default Downloads;
