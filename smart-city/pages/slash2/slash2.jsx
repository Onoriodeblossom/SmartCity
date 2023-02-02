import React from 'react'
import {CheckBoxCard, CheckBoxContainer, Container, HeaderText, InnerContainer, Text} from "./styles"
import background from "../../public/Assets/background1.png"



 const Slash2 =()=>{
    return(
        <Container image={background}>
           <InnerContainer>
            <HeaderText>Hey dear, what do you want?</HeaderText>
            <Text>Welcome back please enter your details back</Text>

            <CheckBoxContainer>
                <CheckBoxCard>
                    ccc
                </CheckBoxCard>
                <CheckBoxCard>
                    ccc
                </CheckBoxCard>
                <CheckBoxCard>
                    ccc
                </CheckBoxCard>
            </CheckBoxContainer>
           </InnerContainer>
        </Container>
    )
}
export default Slash2;