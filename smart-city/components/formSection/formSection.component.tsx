import React from "react";
import {
  FormSectionWrapper,
  LeftSection,
  RightSection,
  HeaderText,
  SubHeaderText,
  TextWrapper,
  Wrapper,
  BigText,
  SmallText,
  PayRentTextWrapper,
  PayRentText,
  FormWrapper,
  FormHeaderWrapper,
  FormHeader,
  FormInputWrappers,
  ButtonWrapper,
  SelectPaymentHeaderText,
  CardWrapper,
  PairedInputContainer,
} from "./formSection.styles";
import { Button } from "../button/button.component";
import { TextArea } from "../textArea/textArea.component";
import { Input } from "../input/input.component";
import {BsCheckCircleFill as CheckIcon } from "react-icons/bs";

import {RiPaypalLine as Paypal,RiBankCardLine as CreditCard,RiWallet3Line as Wallet} from "react-icons/ri"
import TransactionCard from "./transactionCard/transactionCard.component";


const FormSection = ({ text, color, fontSize, textAlign }) => {
  return (
    <FormSectionWrapper paddingVertical="2.5rem">
      <LeftSection>
        <HeaderText>4 Bed Room Flat</HeaderText>
        <SubHeaderText>
          You are making a payment to unlock a 4bedroom flat location
        </SubHeaderText>

        <TextWrapper>
          <Wrapper>
            <BigText>#200</BigText>
            <SmallText>only</SmallText>
          </Wrapper>
          <PayRentTextWrapper>
            <PayRentText>Pay for rent instead?</PayRentText>
          </PayRentTextWrapper>
        </TextWrapper>

        <FormWrapper>
          <FormHeaderWrapper>
            <FormHeader>
              Fill in the details if you want to pay the full rent
            </FormHeader>
          </FormHeaderWrapper>
          <FormInputWrappers>
            <Input
              type={"text"}
              placeholder={"Eze Lordwish ughiye"}
              label={"Full Name"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
            <Input
              type={"email"}
              placeholder={"ug@gmail.com"}
              label={"Email Address"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
            <Input
              type={"number"}
              placeholder={"0706738753"}
              label={"Phone Number"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
            <Input
              type={"text"}
              placeholder={"Unben back gate teck"}
              label={"Residential Address"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
            <Input
              type={"text"}
              placeholder={"One year"}
              label={"Years needed to rent"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
          </FormInputWrappers>
          <ButtonWrapper>
            <Button
              btnText="Save"
              background="transperent"
              border={"1px solid #2131c2"}
              btnColor="#2131c2"
              btnWidth="30%"
              btnMinWidth={"200px"}
            />
          </ButtonWrapper>
        </FormWrapper>
      </LeftSection>

      <RightSection>
        <SelectPaymentHeaderText>
          Select Payment Methods
        </SelectPaymentHeaderText>

        <CardWrapper>
          <TransactionCard active creditCard cardText="Credit Card" />
          <TransactionCard paypal cardText="Transfer" />
          <TransactionCard wallet cardText="Cash" />
        </CardWrapper>
        <FormWrapper>
          <FormHeaderWrapper>
            <FormHeader>Enter Credit Card Details</FormHeader>
          </FormHeaderWrapper>
          <FormInputWrappers>
            <Input
              type={"number"}
              placeholder={"Enter card number"}
              label={"Enter Card Number"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
            <Input
              type={"text"}
              placeholder={"Enter name on card"}
              label={"Enter Card Name"}
              // error={}
              // name={}
              // onChange={}
              // value={}
            />
            <PairedInputContainer>
              <Input
                type={"password"}
                placeholder={"3355"}
                label={"CVV"}
                width={"47%"}
                // error={}
                // name={}
                // onChange={}
                // value={}
              />
              <Input
                type={"text"}
                placeholder={"MM/YY"}
                label={"Exp Date"}
                width={"47%"}
                // error={}
                // name={}
                // onChange={}
                // value={}
              />
            </PairedInputContainer>
          </FormInputWrappers>
          <ButtonWrapper>
            <Button
              btnText="Make Payment"
              btnWidth="30%"
              btnMinWidth={"200px"}
            />
            <Button
              btnText="Contact landlord"
              background="transperent"
              border={"1px solid #2131c2"}
              btnColor="#2131c2"
              btnWidth="30%"
              btnMinWidth={"200px"}
            />
          </ButtonWrapper>
        </FormWrapper>
      </RightSection>
    </FormSectionWrapper>
  );
};

export default FormSection;
