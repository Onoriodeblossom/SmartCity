import React from "react";
import styled from "styled-components";

const TextAreaStyles = styled.textarea`
  border: ${({ border }) => (border ? border : `1px solid #999999`)};
  height: ${({ height }) => (height ? height : `150px`)};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  padding: 1rem;
  resize: none;
  outline: none;
  background: ${({ background }) => (background ? background : `#fff`)};
`;


export const TextArea = ({
  type,
  placeholder,
  border,
  height,
  fontSize,
  name,
  error,
  borderRadius,
  background,
  ...props
}) => {
  return (
    <>
      <TextAreaStyles
        {...props}
        name={name}
        height={height}
        type={type}
        placeholder={placeholder}
        border={border}
        fontSize={fontSize}
        borderRadius={borderRadius}
        background={background}
      />
    </>
  );
};