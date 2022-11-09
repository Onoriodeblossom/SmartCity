import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Image from "next/image";
import {
  TestimonialCardWrapper,QuoteIconWrapper,
  Testimonial,
  UserDetailsWrapper,
  ImageWrapper,
  Name,
} from "./testimonialCard.styles";
import CardBg from "../../public/Assets/cardBg.png";
import { IoIosQuote as QuoteIcon } from "react-icons/io";

const TestimonialCard = ({testimonial,name,image}) => {
  return (
    <TestimonialCardWrapper flexDirection="column" alignItems="flex-start">
        <QuoteIconWrapper>

      <QuoteIcon color="#000" size="1.3rem" />
        </QuoteIconWrapper>

      <Testimonial>
        {testimonial}
      </Testimonial>
      <UserDetailsWrapper>
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
        <Name>{name}</Name>
      </UserDetailsWrapper>
    </TestimonialCardWrapper>
  );
};

export default TestimonialCard;
