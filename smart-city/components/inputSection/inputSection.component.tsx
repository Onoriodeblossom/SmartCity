import React from "react";
import {
  InputSectionWrapper,
  HeaderText,
  FormWrapper,
  Wrapper,
  ButtonWrapper,
} from "./inputSection.styles";
import {Button} from "../button/button.component"
import { TextArea } from "../textArea/textArea.component";

const InputSection = ({
  text,
  color,
  fontSize,
  textAlign,
  
}) => {
  return (
    <InputSectionWrapper flexDirection="column" paddingVertical="2.5rem">
      <HeaderText>have a question or drop a review</HeaderText>

      <FormWrapper>
        <Wrapper width="60%">
          <TextArea height="290px"/>
        </Wrapper>
        <ButtonWrapper width="10%">
          <Button btnText="Post" />
        </ButtonWrapper>
      </FormWrapper>
    </InputSectionWrapper>
  );
};

export default InputSection;
