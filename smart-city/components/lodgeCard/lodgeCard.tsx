import React  from "react"
import {Amount, CardTitle, Container, Dot, Flex, List, Section,Text} from "./styles"
import Image from "next/image"


 const LodgeCard = () =>{
    return(
        <Container>
            <Image
              src={'/Assets/lodge.png'}
              alt="vid"
              width={340}
              height={200}
              quality={100}
            />
            <Section>
            <CardTitle>Tiled Self contained Room</CardTitle>
            {/* <CardTitle>Tiled Self contained Room</> */}
<Text>Ekosodin,pay #2,000 to unlock location</Text>
            </Section>
            <Section>
                <Flex>
                <List>
                    <Dot/>
                    <Text color="#333">Light</Text>

                </List>
                <List>
                    <Dot/>
                    <Text color="#333">Light</Text>

                </List>
                <List>
                    <Dot/>
                    <Text color="#333">Light</Text>

                </List>
               
                </Flex>
                    
                
                
            </Section>
            {/* <Section>
                <Flex>
                    
             
            
                </Flex>
            </Section> */}
        </Container>
    
    )
}

export default LodgeCard;
