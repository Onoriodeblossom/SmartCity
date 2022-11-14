import React from "react";
import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

const Wrapper = styled(FlexibleDiv)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: max-content;
  margin-bottom:1.2rem;
`;

const InnerLabel = styled.label`
  background: #fff;
  min-width: 30%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  color: #bdbdbd;
  text-align: center;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "0.4rem"};
  padding: 0.4rem;
  position: relative;
  z-index: 1;
  bottom: -0.9rem;
  margin-left: 3%;
`;

const Label = styled.label`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: #0d1e07;
  font-weight: 500;
  padding: 0.4rem;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  transition: top 0.5s ease-in-out;
  margin-bottom: 0.3rem;
`;

const InputStyles = styled.input`
  border: ${({ border }) => (border ? border : `1px solid #808080`)};
  width: ${({ width }) => (width ? width : `100%`)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  outline: none;
  padding: ${({ padding }) => (padding ? padding : "0.8rem")};
  background: ${({ background }) => (background ? background : `#fff`)};
`;
const ErrorText = styled.div`
  width: 100%;
  text-transform: capitalize;
  color: red;
`;

const TextAreaStyles = styled.textarea`
  border: ${({ border }) => (border ? border : `1px solid #000`)};
  height: 130px;
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  padding: 1rem;
  resize: none;
  outline: none;
  background: ${({ background }) => (background ? background : `#fff`)};
`;

const DropDownStyles = styled.select`
  border: ${({ border }) => (border ? border : `1px solid green`)};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  color: #000;
  padding: 1rem;
  outline: none;
`;

export const Input = ({
  type,
  placeholder,
  border,
  fontSize,
  borderRadius,
  background,
  error,
  name,
  label,
  labelFontSize,
  innerLabel,
  onChange,
  onInput,
  onMouseMove,
  value,
  min,
  max,
  padding,
  width,
  style,
  ...props
}) => {
  return (
    <Wrapper paddingVertical="0">
      {value === "" ? (
        label ? (
          <>
            <Label fontSize={labelFontSize}>{label}</Label>
           
          </>
        ) : null
      ) : (
        <>
          <Label top={"-12px !important"} fontSize={labelFontSize}>
            {label}
          </Label>
         
        </>
      )}

      {innerLabel ? <InnerLabel htmlFor="">{innerLabel}</InnerLabel> : null}
      <InputStyles
        {...props}
        name={name}
        type={type}
        placeholder={placeholder}
        border={border}
        fontSize={fontSize}
        borderRadius={borderRadius}
        background={background}
        onChange={onChange}
        onInput={onInput}
        onMouseMove={onMouseMove}
        value={value}
        min={min}
        max={max}
        width={width}
        padding={padding}
        style={style}
      />
      <ErrorText>{error[name]}</ErrorText>
    </Wrapper>
  );
};

export const TextArea = ({
  type,
  placeholder,
  border,
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
        type={type}
        placeholder={placeholder}
        border={border}
        fontSize={fontSize}
        borderRadius={borderRadius}
        background={background}
      />
      <ErrorText>{error[name]}</ErrorText>
    </>
  );
};
TextArea.defaultProps = {
  error: {},
};
Input.defaultProps = {
  error: {},
};

export const DropDown = ({ border, fontSize, borderRadius }) => {
  return (
    <DropDownStyles
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="vw">VW</option>
      <option value="audi" selected>
        Audi
      </option>
    </DropDownStyles>
  );
};
