import React from "react";
import { CardWrapper, Card, CardText } from "./transactionCard.styles";
import { BsCheckCircleFill as CheckIcon } from "react-icons/bs";

import {
  RiPaypalLine as PayPal,
  RiBankCardLine as CreditCard,
  RiWallet3Line as Wallet,
} from "react-icons/ri";

const TransactionCard = ({
  cardText,
  active,
  creditCard,paypal,wallet,
}) => {
  return (
    <Card active={active}>
      {active ? (
        <CheckIcon className="checkIcon" size="1rem" color="#fff" />
      ) : null}
      {creditCard ? (
        <CreditCard size="1.7rem" color={active ? "#fff" : "#000"} />
      ) : paypal ? (
        <PayPal size="1.7rem" color={active ? "#fff" : "#000"} />
      ) : wallet ? (
        <CreditCard size="1.7rem" color={active ? "#fff" : "#000"} />
      ) : (
        <CreditCard size="1.7rem" color={active ? "#fff" : "#000"} />
      )}
      <CardText active={active}>{cardText}</CardText>
    </Card>
  );
};

export default TransactionCard;
