import React from 'react'
import {CheckBoxCard, CheckBoxContainer, Container, HeaderText, InnerContainer, Text} from "./styles"
import background from "../../public/Assets/background1.png"
import Link from "next/link";
import { Checkbox } from "@mui/material";
import { Flex } from '../../components/hostelCard/styles';
import { Button } from '../../components/button/button.component';



 const Slash2 =()=>{
    return(
        <Container image={background}>
           <InnerContainer>
            <HeaderText>Hey dear, what do you want?</HeaderText>
            <Text>Welcome back please enter your details back</Text>

            <CheckBoxContainer>
                <div className=" flex items-center justify-between border border-[#808080] border-solid rounded-md pl-3   my-[0.5em]" style={{width:"50%"}}>
                    <label htmlFor="roomDetails" className="label text-sm  sm:text-md text-#333333">
                    Are you open to hosting someone?
                    </label>
                    <Checkbox 
                    name="roomDetails" />
                </div>


    
                <div className=" flex items-center justify-between border border-[#808080] border-solid rounded-md pl-3  my-[0.5em]"  style={{width:"50%"}}>
                    <label htmlFor="roomDetails" className="label text-sm  sm:text-md text-#333333">
                    Are you open to hosting someone?
                    </label>
                    <Checkbox 
                    name="roomDetails" />
                </div>



                <div className=" flex items-center justify-between border border-[#808080] border-solid rounded-md pl-3  my-[0.5em]"  style={{width:"50%"}}>
                    <label htmlFor="roomDetails" className="label text-sm  sm:text-md text-#333333">
                    Are you open to hosting someone?
                    </label>
                    <Checkbox 
                    name="roomDetails" />
                </div>

                <div style={{ width:"60%", display:"flex", justifyContent:"space-around"}} width="80%">
                <Button
              btnText="Save"
              background="transperent"
              border={"1px solid #2131c2"}
              btnColor="#2131c2"
              btnWidth="30%"
              btnMinWidth={"200px"}
            />

            <Button
            btnText={"Continue Search"}
            />
                </div>
            </CheckBoxContainer>
           </InnerContainer>
        </Container>
    )
}
export default Slash2;