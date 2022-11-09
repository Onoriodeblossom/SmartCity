import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Image from "next/image";
import {
  ImageTextCardWrapper,
  ImageWrapper,
  CardText,
} from "./imageTextCard.styles";
import CardBg from "../../public/Assets/cardBg.png";
import { FiPlayCircle as PlayIcon } from "react-icons/fi";

const ImageTextCard = () => {
  return (
    <ImageTextCardWrapper flexDirection="column" alignItems="flex-start">
      <ImageWrapper>
        <Image
          src={CardBg}
          alt="cardImage"
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          layout="fill"
        />
      </ImageWrapper>
      <CardText>hello text</CardText>
    </ImageTextCardWrapper>
  );
};

export default ImageTextCard;
