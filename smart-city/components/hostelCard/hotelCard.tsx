import React  from "react"
import {Container, Section} from "./styles"
import Image from "next/image"


 const HostelCard = () =>{
    return(
        <Container>
            <Image
              src={'/Assets/Agent.png'}
              alt="vid"
              width={340}
              height={200}
              quality={100}
            />
            <p>Tiled Self contained Room</p>
            <Section>

            </Section>
            <Section>
                
            </Section>
        </Container>
    
    )
}

export default HostelCard;

