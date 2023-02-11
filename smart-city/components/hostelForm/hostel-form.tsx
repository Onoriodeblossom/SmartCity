import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { ButtonWrapper, SubHeaderText, } from "../formSection/formSection.styles";
import { Input } from "../input/input.component";
import { Container, HeaderText, Flex, FormInputWrappers, InputContainer, Label, InputChecker, Inputt, FormWrapper, Wrapper, ReviewSectionWrapper, CustomImageButton, ImagePickerContainer, Width } from "./styled";
import { Checkbox } from "@mui/material";
import { TextArea } from "../textArea/textArea.component";
import { Button } from "../button/button.component";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import Image from "next/image";
import FileUploader from "../imageUploader/fileUpload";


export const HostelForm = () => {

  const [phone, setPhone] = useState("");
  const [image1, setImage] = useState([]);
  const [image1URLs, setImage1URLs] = useState([])
  const hiddenFileInput = React.useRef(null);

  const onChangeImage = (e) => {
    setImage([...e.target.file]);
  }

  useEffect(() => {
    if (image1.length < 1) return;
    const newImage1URLs = [];
    image1.forEach(image => newImage1URLs.push(URL.createObjectURL(image)));
    setImage1URLs(newImage1URLs);
  }, [image1]);
  return (
    <Container>
      {/* <SubHeaderText>
          You are making a payment to unlock a 4bedroom flat location
        </SubHeaderText> */}
      <FormInputWrappers>
        {/* <Label>
        Percentage Free
        </Label> */}

        <Flex>
          <InputContainer>




            <Input
              type={"text"}
              placeholder={"initial amount"}
              label={"Percentage Free"}
            // error={}
            // name={}
            // onChange={}
            // value={}
            />
          </InputContainer>
          <InputContainer>




            <Input
              type={"text"}
              placeholder={"subsequent amount"}
              label={"*p*"}
              color={"white"}
            // error={}
            // name={}
            // onChange={}
            // value={}
            />
          </InputContainer>
        </Flex>


        <ImagePickerContainer>
          <Width>

            <Input
              placeholder={"country"}
            />
          </Width>
          <Width>

            <Input
              placeholder={"state"}
            />
          </Width>
          <Width>

            <Input
              placeholder={"city"}
            />
          </Width>
          <Width>

            <Input
              placeholder={"community"}
            />
          </Width>
          <Width>

            <Input
              placeholder={"street"}
            />
          </Width>




        </ImagePickerContainer>


        <Label>
          Room Details
        </Label>
        <Flex width="50%">

          <InputChecker  >
            <Inputt />

            <Checkbox
              name="roomDetails" />
          </InputChecker>

          {/* </div> */}
          {/* </div> */}
        </Flex>
        <Flex width="50%">
          <Input
            type={"text"}
            label={"House type "}
          />
        </Flex>
        <Label>
          Upload Room Images
        </Label>

        <ImagePickerContainer>
          <FileUploader Text="Kitchen jpg" />

          <FileUploader Text="Toilet jpg" />

          <FileUploader Text="Bathroom jpg" />

          <FileUploader Text="Room jpg" />

          <FileUploader Text="Other" />



        </ImagePickerContainer>
        <Label>
          Upload Videos
        </Label>

        <ImagePickerContainer>
          <FileUploader Text="Kitchen jpg" />

          <FileUploader Text="Toilet jpg" />

          <FileUploader Text="Bathroom jpg" />

          <FileUploader Text="Room jpg" />

          <FileUploader Text="Other" />



        </ImagePickerContainer>

        <ReviewSectionWrapper flexDirection="column" paddingVertical="2.5rem">

          <FormWrapper>
            <Wrapper width="60%">
              <HeaderText>Description of Hostel</HeaderText>
              <textarea
                className=" text-sm px-3 outline-none my-1 sm:px-4 py-1 sm:py-2 text-[#808080] w-[100%]   bg-transparent border border-[#808080] border-solid h-[150px] resize-none  rounded-[3px] placeholder-[#808080]" placeholder="Enter Short details about yourself"
                aria-label="Enter Description"
                name="description"
                autoComplete="off"
                required
              />
            </Wrapper>

          </FormWrapper>
        </ReviewSectionWrapper>

        <Flex width="50%" flexibleDirection="column">
          <Label>
            Phone Number 1
          </Label>



          <PhoneInput
            country={"ng"}
            enableSearch={false}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            containerStyle={{ background: "red", borderRadius: "8px", height: 50 }}
            inputStyle={{ width: "100%", borderRadius: "8px", height: 50 }}
          />
        </Flex>

        <Flex width="50%" top="20px" flexibleDirection="column">
          <Label>
            Phone Number 2
          </Label>


          <PhoneInput
            country={"ng"}
            enableSearch={false}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            containerStyle={{ background: "red", borderRadius: "8px", height: 50 }}
            inputStyle={{ width: "100%", borderRadius: "8px", height: 50 }}
          />
        </Flex>

        <Flex width="50%" top="30px">
          <Button

            btnText="Upload"
            btnWidth="30%"
            btnMinWidth={"200px"}


          />
          <Button
            btnText="Cancel"
            btnWidth="30%"
            btnMinWidth={"200px"}


          />

        </Flex>
        <Flex top="30px" />


      </FormInputWrappers>

    </Container>

  )
}


