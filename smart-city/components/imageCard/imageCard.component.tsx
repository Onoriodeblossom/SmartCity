import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Image from "next/image";
import { ImageCardWrapper, IconContainer } from "./imageCard.styles";
import CardBg from "../../public/Assets/cardBg.png";
import { FiPlayCircle as PlayIcon } from "react-icons/fi";

const ImageCard = ({icon,width,height,resWidth,resHeight}) => {
  return (
    <ImageCardWrapper background="blue" width={width} height={height} resWidth={resWidth} resHeight={resHeight}>
      <Image
        src={CardBg}
        alt="cardImage"
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
        layout="fill"

      />
      {icon?<IconContainer>
        <PlayIcon color="#fff" size="5rem" />
      </IconContainer>:null}
    </ImageCardWrapper>
  );
};

export default ImageCard;
