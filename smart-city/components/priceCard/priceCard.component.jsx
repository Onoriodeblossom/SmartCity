import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Image from "next/image";
import {
  PriceCardWrapper,
  HeaderSection,
  BigText,
  SmallText,
  HorizontalCardSection,
  HorizontalCard,
  Circle,
  HorizontalCardTextWrapper,
  HorizontalCardText,
} from "./priceCard.styles";
import CardBg from "../../public/Assets/cardBg.png";
import { FiPlayCircle as PlayIcon } from "react-icons/fi";

const PriceCard = () => {
  const cardData = [
    { cardText: "hello this important to get right" },
    { cardText: "hello this important to get right" },
    { cardText: "hello this important to get right" },
    { cardText: "hello this important to get right" },
    { cardText: "hello this important to get right" },
  ];
  return (
    <PriceCardWrapper background="blue">
      <HeaderSection>
        <BigText>Price: N150,000</BigText>
        <SmallText>Yearly</SmallText>
      </HeaderSection>

      <HorizontalCardSection>
        {cardData.map(({ cardText }) => (
          <HorizontalCard>
            <Circle />
            <HorizontalCardTextWrapper>
              <HorizontalCardText>{cardText}</HorizontalCardText>
            </HorizontalCardTextWrapper>
          </HorizontalCard>
        ))}
      </HorizontalCardSection>
    </PriceCardWrapper>
  );
};

export default PriceCard;
