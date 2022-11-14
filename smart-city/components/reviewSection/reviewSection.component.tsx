import React from "react";
import {
  ReviewSectionWrapper,
  HeaderText,
  FormWrapper,
  Wrapper,
  ButtonWrapper,
} from "./reviewSection.styles";
import {Button} from "../button/button.component"
import { TextArea } from "../textArea/textArea.component";

const ReviewSection = ({
  text,
  color,
  fontSize,
  textAlign,
  
}) => {
  return (
    <ReviewSectionWrapper flexDirection="column" paddingVertical="2.5rem">
      <HeaderText>have a question or drop a review</HeaderText>

      <FormWrapper>
        <Wrapper width="60%">
          <TextArea height="290px"/>
        </Wrapper>
        <ButtonWrapper width="10%">
          <Button btnText="Post" />
        </ButtonWrapper>
      </FormWrapper>
    </ReviewSectionWrapper>
  );
};

export default ReviewSection;
