import styled from "styled-components"
import Image from 'next/image';
import { PropaneSharp } from "@mui/icons-material";


export const Container = styled.div`
height:max-content;
justify-content:center;
align-items:center;
display:flex;
padding-bottom:10px;
border-radius: 20px;
flex-direction:column;
margin-top:20px;
margin-bottom:20px;
width:25%;


@media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

`

export const Section = styled.div`

/* background-color:blue; */
width:80%
`

export const CardTitle = styled.p`
font-size:18px;
line-height:32px;

`
export const Text = styled.p`

//styleName: smart button ;
font-family: Open Sans;
font-size: 16px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
color:${(props)=> props.color ? props.color : "#808080"}


`
export const Flex = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
width: ${(props)=> props.width ? props.width : "100%"}

@media (max-width: 900px) {
    width: 100%;
  }

`
export const List = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
/* background:red */
`
export const Dot = styled.div`
border-radius:100px;
background:blue;
width:10px;
height:10px;
`

export const Amount = styled.p`

color:#f28e13;
font-size: 24px;

@media (max-width: 768px) {
    height:max-content;
width:100%;
justify-content:center;
align-items:center;
display:flex;
border-radius: 20px;
flex-direction:column;
box-shadow: 0.3px -5px 10px 0.6px rgba(0, 0, 0, 0.2);
background-color:white;
  
}

`