import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const HostelInfoWrapper = styled(FlexibleDiv)`
  padding: 1rem 1.6rem;
  align-items: center;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.4s ease-in-out;
  background: transparent;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding:0;
  }
`;

export const InfoSection = styled(FlexibleDiv)`
  width: 45%;
  padding: 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ImageWrapper = styled(FlexibleDiv)`
  position: relative;
  width: 45%;
  height: 65vh;
  padding: 0;
  border-radius: 10px;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1000px) {
    width: 50%;
    height: 75vh;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom:1rem;
    height:50vh;
  }
`;
export const SubHeaderSection = styled(FlexibleDiv)`
  padding: 1rem 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 870px) {
  }
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    padding: 0.7rem 0;
  }
`;
export const HostelName = styled.h1`
  color:#302121;
  font-weight:500;
  font-size: 40px;
`;

export const SaveSection = styled(FlexibleDiv)`
  width: max-content;
  padding: 0;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
export const SaveText = styled.p`
  color: #2131C2;
  font-size: 14px;
  font-weight:500;
  margin-right:0.3rem;
`;



export const SavedIconWrapper = styled(FlexibleDiv)`
  width: max-content;
  height: max-content;
  padding:0.7rem;
  border-radius: 50%;
  background:rgba(33, 49, 194, 0.25);
  :hover{
    cursor:pointer;
  }

`;
export const DescriptionWrapper = styled(FlexibleDiv)`

`;

export const Description = styled.p`
  color: #747474;
  font-size:16px;
`;

export const OtherMerchsection = styled(FlexibleDiv)`
  padding: 0.8rem 0;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;
export const OtherMerchLink = styled.p`
  color: #2131c2;
  font-size: 14px;
  /* font-weight: 500; */
  text-decoration: underline;
`;
export const MerchOption = styled(FlexibleDiv)`
  width: max-content;
  padding: 0;
  margin-right: 0.7rem;
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const OtherMerchOptions = styled(FlexibleDiv)`
  justify-content: flex-start;

  padding: 1rem 0;
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Circle = styled(FlexibleDiv)`
  background: #2131c2;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  padding: 0;
  margin-right: 0.3rem;
`;
export const OptionTextWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: auto;
`;
export const OptionText = styled.p`
  color: #808080;
  font-size: 1rem;
  padding: 0;
`;
export const Rating = styled.p`
  color: #2131c2;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0;
`;

export const ButtonWrapper = styled(FlexibleDiv)`
  /* padding: 0; */
  justify-content: flex-start;
  > button:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 1100px) {
    > button {
      width: 100%;
    }

    > button:first-child {
      margin-bottom: 1rem;
      margin-right: 0px;
    }
  }
  @media (max-width: 870px) {
  }
  @media (max-width: 800px) {
  }
`;

