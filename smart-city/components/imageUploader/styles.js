import styled from "styled-components"

export const Container = styled.div`


`;
export const Input = styled.input`
background:pink;

display:none;

`;



export const Button = styled.label`
border: ${({ border }) => (border ? border : `1px solid #808080`)};
width:100%;
border-style:dashed;
padding: ${({ padding }) => (padding ? padding : "0.8rem")};
justify-content:center;
align-content:center;
display:inline-block;
display:flex;
font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
outline: none;
color:#000;

background: ${({ background }) => (background ? background : `#fff`)};

`