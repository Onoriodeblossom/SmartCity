import React, { useState } from "react";
import Image from "next/image";
import {
  HostelInfoWrapper,
  InfoSection,
  SubHeaderSection,
  HostelName,
  SaveSection,
  SaveText,
  SavedIconWrapper,
  DescriptionWrapper,
  Description,
  OtherMerchsection,
  OtherMerchLink,
  MerchOption,
  OtherMerchOptions,
  Circle,
  OptionTextWrapper,
  OptionText,
  Rating,
  ButtonWrapper,
  ImageWrapper,
} from "./HostelInfo.styles";
import CardBg from "../../public/Assets/cardBg.png";
import {
  MdOutlineFavoriteBorder as SaveIcon,
  MdOutlineFavorite as SavedIcon,
} from "react-icons/md";
import { Button } from "../button/button.component";
import { OptionUnstyled } from "@mui/base";

const HostelInfo = () => {
  const [saved, setSaved] = useState(false);

  const handleSaved = () => {
    setSaved(!saved);
  };

  const OptionData = [
    { optionText: "Light" },
    { optionText: "Water" },
    { optionText: "Kitchen" },
    { optionText: "Wardrobe" },
  ];
  return (
    <HostelInfoWrapper>
      <InfoSection flexDirection="column" background="transparent">
        <SubHeaderSection>
          <HostelName>4 Bedroom flat</HostelName>
          <SaveSection>
            <SaveText>{saved ? "Added to Saved" : "Add to Save"}</SaveText>

            <SavedIconWrapper onClick={handleSaved}>
              {saved ? (
                <SavedIcon color="#2131C2" size="1rem" />
              ) : (
                <SaveIcon color="#2131C2" size="1rem" />
              )}
            </SavedIconWrapper>
          </SaveSection>
        </SubHeaderSection>
        <DescriptionWrapper>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            soluta odit amet fuga error nostrum cum quas, optio harum corrupti
            minus atque. Eaque iusto est fuga odio cum adipisci ducimus? Quam
            veniam, esse repellat odit eveniet ex iure distinctio totam nam
            recusandae quos cupiditate commodi vitae sit obcaecati quaerat
            ipsam! Dolorem voluptatibus laudantium minima, laborum similique
          </Description>
        </DescriptionWrapper>

        <OtherMerchsection>
          <OtherMerchLink>Other Merch</OtherMerchLink>
          <OtherMerchOptions>
            {OptionData.map(({ optionText }) => (
              <MerchOption>
                <Circle />
                <OptionTextWrapper>
                  <OptionText>{optionText}</OptionText>
                </OptionTextWrapper>
              </MerchOption>
            ))}
          </OtherMerchOptions>
          <Rating>5 star Rating</Rating>
        </OtherMerchsection>

        <ButtonWrapper>
          <Button btnText="Contact Agent" />
          <Button btnText="Pay #2,000 unlock location" />
        </ButtonWrapper>
      </InfoSection>

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
    </HostelInfoWrapper>
  );
};

export default HostelInfo;
