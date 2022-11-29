import React from "react";
import {
  Amount,
  CardTitle,
  Container,
  Dot,
  Flex,
  List,
  Section,
  Text,
} from "./styles";
import Image from "next/image";

const HostelCard = () => {
  return (
    <Container>
      <Image
        src={"/Assets/Agent.png"}
        alt="vid"
        // layout="fill"

        width={300}
        height={200}
        style={{padding:0, margin:0}}
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
            <Dot />
            <Text color="#333">Light</Text>
          </List>
          <List>
            <Dot />
            <Text color="#333">Light</Text>
          </List>
          <List>
            <Dot />
            <Text color="#333">Light</Text>
          </List>
          <List>
            <Dot />
            <Text color="#333">Light</Text>
          </List>
        </Flex>
      </Section>
      <Section>
        <Flex>
          <Flex width="50%">
            <Amount>N2,000</Amount>
            <Text>Yearly</Text>
          </Flex>
          <button
            className="bg-gradient-to-r from-[#101861] to-[#2131C2] rounded-sm text-sm lg:text-md py-2 px-4 text-white
             w-[100px] hover:bg-blue-500 hover:text-white"
          >
            inspect
          </button>
        </Flex>
      </Section>
    </Container>
  );
};

export default HostelCard;
