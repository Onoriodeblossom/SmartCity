import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Image from "next/image";
import { ImageCardWrapper, IconContainer } from "./imageCard.styles";
import CardBg from "../../public/Assets/cardBg.png";
import { FiPlayCircle as PlayIcon } from "react-icons/fi";

const ImageCard = () => {
  return (
    <ImageCardWrapper background="blue">
      <Image
        src={CardBg}
        alt="cardImage"
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
        layout="fill"

      />
      <IconContainer>
        <PlayIcon color="#fff" size="5rem" />
      </IconContainer>
    </ImageCardWrapper>
  );
};

export default ImageCard;
