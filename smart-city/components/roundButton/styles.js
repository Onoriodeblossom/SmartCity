import styled from "styled-components"

export const Container= styled.div`
justify-content:center;
align-items:center;
flex-direction:column;
display:flex;

@media (max-width: 1020px) {


  }

  @media (max-width: 800px) {

    
  }


`;

export const Button = styled.button`
background-color:white;
border-radius:50%;
justify-content:center;
align-items:center;
flex-direction:column;
height:60px;
width:60px;
display:flex;
font-size:18px;
@media (max-width: 1020px) {
    background-color:white;
border-radius:50%;
justify-content:center;
align-items:center;
flex-direction:column;
height:40px;
width:40px;
display:flex;
font-size:18px;
    

  }

  @media (max-width: 800px) {

    
  }



`







export const ButtonText = styled.div`
color:#000;
font-weight:700;
font-size:24px;
@media (max-width: 800px) {
font-size:20px
    
}





`
export const Text = styled.div`
font-weight:700;
font-size:14px

@media (max-width: 600px) {
displap:none;
    
}

`