import React from "react";
import { Button, ButtonText, Container, Text } from "./styles"


export const RoundButton = (props) =>{
    return(
        <Container onclick={props.onclick}>
            <Button>
                <ButtonText>
                {props.number}
                </ButtonText>
            </Button>
            <Text>{props.text}</Text>
        </Container>
    )
}

