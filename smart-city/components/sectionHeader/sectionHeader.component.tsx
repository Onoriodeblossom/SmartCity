import React from "react";
import {
  SectionHeaderWrapper,
  SectionHeaderText,
} from "./sectionHeader.styles";

const SectionHeader = ({ text, color, fontSize, textAlign }) => {
  return (
    <SectionHeaderWrapper paddingVertical="2.5rem">
      <SectionHeaderText
        color={color}
        fontSize={fontSize}
        textAlign={textAlign}
      >
        {text}
      </SectionHeaderText>
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
