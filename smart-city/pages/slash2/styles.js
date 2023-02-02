import styled from "styled-components"

export const Nav = styled.nav`
  background-color: blue;
  display: flex;
  height:90px;
  width:100%;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 1rem 2rem;
  background: linear-gradient(270deg, #2131c2 0%, #101861 102.99%);
  @media (max-width: 850px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 768px) {
    padding: 0.8rem 0.7rem;
  }
`;

export const Container = styled.div`
  background-image: url(${(props) => props.image.src});
  height: ${(props) => (props.height ? props.height : "100vh")};
  width: 100%;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.justify ? props.justify : "center")};
  display: flex;
  flex-direction: column;
  background-size: 100% 100vh;
  background-repeat: cover;
  /* background-color: red; */
`;

export const InnerContainer = styled.div`
background-color: white;
width: 70%;
padding: 20px;
height: 75vh;
/* justify-content: center; */
align-items: center;
display: flex;
flex-direction: column;
@media (max-width: 1300px) {
  }
  @media (max-width: 900px) {
    width: 90%;
  }

`;
export const HeaderText = styled.p`
font-size: 40px;
color: #16320C;
font-family: Open Sans;
font-weight: 700;
line-height: 54px;
line-height: 100%;
letter-spacing: 2%;


`;
export const Text = styled.div`
color: #0D1E07;
font-family: Open Sans;
font-style: Regular;
font-size: 18px;
line-height: 100%;
line-height: 64px;
align-self: center;
vertical-align: top;

`;
export const CheckBoxContainer = styled.div`
width:100%;
height: 200px;
/* padding-top: 100px; */
/* background-color: red; */
justify-content: space-between;
align-items: center;
display: flex;
flex-direction: column;


@media (max-width: 1300px) {
  }
  @media (max-width: 900px) {
      width: 100%;
  }

`;

export const CheckBoxCard = styled.div`
width:50%;
border-radius: 5px;

height: 50px;
border-color: #808080;
border-width: 1px;


`