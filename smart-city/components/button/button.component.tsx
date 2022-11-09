import styled from "styled-components";

export const ButtonStyles = styled.button`
  cursor: pointer;
  width: auto;
  background: ${({ background }) =>
    background
      ? background
      : "linear-gradient(270deg, #2131C2 0%, #101861 102.99%);"};
  border: ${({ border }) => (border ? border : "0px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  padding: ${({ size }) => (size ? "2rem" : "1rem 2rem")};
  color: ${({ btnColor }) => (btnColor ? btnColor : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.p`
  padding: 0 0.5rem;
  color: ${({ btnColor }) => (btnColor ? btnColor : "#fff")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : "bold"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
`;

export const Button = ({
  btnText,
  background,
  border,
  borderRadius,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  onClick,
  loading,
  RightIcon,
  LeftIcon,
  iconSize,
  size,
  disabled,
}) => {
  return (
    <ButtonStyles
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick ? onClick : null}
      size={size}
      disabled={disabled}
    >
      {LeftIcon ? (
        <LeftIcon
          color={btnColor ? btnColor : "#fff"}
          size={iconSize ? iconSize : "18px"}
        />
      ) : null}
      <BtnText
        btnColor={btnColor}
        textTransform={textTransform}
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {btnText}
      </BtnText>

      {RightIcon ? (
        <RightIcon
          color={btnColor ? btnColor : "#fff"}
          size={iconSize ? iconSize : "18px"}
        />
      ) : null}
    </ButtonStyles>
  );
};
