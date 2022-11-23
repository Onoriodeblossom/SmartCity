import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const FormSectionWrapper = styled(FlexibleDiv)`
align-items: flex-start;
  @media (max-width: 1300px) {
   
  }
`;

export const LeftSection = styled(FlexibleDiv)`
  width: 45%;
  /* background: teal; */
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1300px) {
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const RightSection = styled(FlexibleDiv)`
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  /* background:red; */

  @media (max-width: 1300px) {
  }
  @media (max-width: 900px) {
    margin-top: 4rem;
    width: 100%;
  }
`;

export const HeaderText = styled.h2`
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  padding: 0;
`;

export const SubHeaderText = styled.p`
  color: #0d1e07;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
`;
export const TextWrapper = styled(FlexibleDiv)`
  margin-right: 1rem;
  /* padding: 0; */
  justify-content: flex-start;

  @media (max-width: 1100px) {
  }
  @media (max-width: 900px) {
    flex-direction: row;
  }
  /* @media (max-width: 800px) {
    flex-direction: row;
  } */
`;

export const Wrapper = styled(FlexibleDiv)`
  margin-right: 20%;
  width: auto;
  @media (max-width: 900px) {
    width: auto;
    margin-right: 20%;
    flex-direction: row;
  }
`;
export const PayRentTextWrapper = styled(FlexibleDiv)`
  width: auto;

  /* margin-right:30%; */
  @media (max-width: 1100px) {

  }
  @media (max-width: 900px) {
    width: auto;
  }
`;


export const BigText = styled.h2`
  color:#2131c2;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
  margin-right: 0.3rem;
`;

export const SmallText = styled.p`
  color: #808080;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
`;

export const PayRentText = styled.h2`
  color:#2131c2;
  text-decoration: underline;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
`;





// export const Wrapper = styled(FlexibleDiv)`
//   margin-right: 1rem;

//   @media (max-width: 1100px) {
//     width: 100%;
//     margin-right: 0px;
//   }
// `;

export const FormWrapper = styled.form`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const FormHeaderWrapper = styled(FlexibleDiv)`
padding:0;

  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const FormHeader = styled.h2`
  color: #16320c;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0;
`;


export const FormInputWrappers = styled(FlexibleDiv)`
  padding:0.5rem 0;
  
  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0px;
  }
`;
export const ButtonWrapper = styled(FlexibleDiv)`
  justify-content: flex-start;
  button:first-of-type {
    margin-right: 5vw;
  }
  button {
    margin-bottom: 1rem;
  }
  @media (max-width: 1300px) {
  }
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;


export const SelectPaymentHeaderText = styled.h2`
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
`;

export const CardWrapper = styled(FlexibleDiv)`
  width: 60%;

  @media (max-width: 1550px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction:row;
  }
`;
export const PairedInputContainer = styled(FlexibleDiv)`
  padding: 0;
  /* @media (max-width: 800px) {
    width: 100%;
  } */
`;