import styled from "styled-components"
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Input } from "../input/input.component";

export const  Container = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center

`;
export const FormInputWrappers = styled.div`
width:60%;
flex-direction:column;
display:flex;

@media (max-width: 1300px) {
}
@media (max-width: 900px) {
  width: 80%;
}
`;
export const Label = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: #0d1e07;
  font-weight: 500;
  padding: 0.4rem;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  transition: top 0.5s ease-in-out;
  margin-bottom: 0.3rem;
`;

export const Flex = styled.div`
display:flex;
width: ${({ width }) => (width ? width : `60%`)};
justify-content: ${({justify})=> (justify ? justify: "space-between")};
padding-top:${({ top }) => (top ? top : `0`)};
flex-direction:${({ flexibleDirection }) => (flexibleDirection ? flexibleDirection : `flex`)};



@media (max-width: 1300px) {
}
@media (max-width: 900px) {
  width: 100%;
}

`

export const InputContainer = styled.div`
display:flex;
width:44%;
justify-content:space-between;

@media (max-width: 1300px) {
}
@media (max-width: 900px) {
  
}



`
export const InputChecker = styled.div`
width:100%;
display:flex;
padding:0px;
height:50px;
margin:0px;
border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
border: ${({ border }) => (border ? border : `1px solid #808080`)};


@media (max-width: 1300px) {
}
@media (max-width: 900px) {
  width: 100%;
}


`
export const Inputt = styled.input`
border: ${({ border }) => (border ? border : `0px solid #808080`)};
width: ${({ width }) => (width ? width : `90%`)};
font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
outline: none;
color:#000;
padding: ${({ padding }) => (padding ? padding : "0.8rem")};
background: ${({ background }) => (background ? background : `#ff`)};


@media (max-width: 1300px) {
}
@media (max-width: 900px) {
  width: 100%;
}



`
export const ReviewSectionWrapper = styled(FlexibleDiv)`
  padding: 0rem 0rem;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.4s ease-in-out;

  @media (max-width: 1300px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const HeaderText = styled.h2`
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
`;


 export const ImagePickerContainer = styled.div`
 display:flex;
 width:70%;
 padding-bottom:20px;
 justify-content:space-between;
 
 @media (max-width: 920px) {
  width: 100%;
  flex-wrap:wrap;
  margin-right: 0;
}
 
 
 
 `

 export const Width = styled.div`
 width:15%;
 @media (max-width: 1300px) {
  width: 100%;
  
}
 `


export const FormWrapper = styled.form`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  margin-right: 1rem;

  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0px;
  }
`;