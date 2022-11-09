import React, { useState, useEffect,useRef } from "react";
import { ScrollingContainer } from "./scrollingCard.styled";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  GoChevronLeft as LeftIcon,
  GoChevronRight as RightIcon,
} from "react-icons/go";

const ScrollingDiv = ({
  children,
  autoScroll = false,
  scrollOuterBg,
  scrollInnerWidth,
  scrollInnerPad,
  scrollCardWidth,
  scrollCardHeight,
  scrollCardBg,
  scrollArrowBg,
  scrollArrowCol,
  scrollCardGaps,
}) => {
  const cards = useRef();

  const [callScroll, setCallScroll] = useState(true);
  const [scrollLeftValue, setScrollLeftValue] = useState(null);
  const [scrollLeftMaxValue, setScrollLeftMaxtValue] = useState(null);

  const handleScroll = (direction) => {
    direction === "left" &&
      (cards.current.scrollLeft -= cards.current.clientWidth);
    direction === "right" &&
      (cards.current.scrollLeft += cards.current.clientWidth);

    setScrollLeftValue(cards.current.scrollLeft);
    setScrollLeftMaxtValue(
      cards.current.scrollWidth - cards.current.offsetWidth
    );
  };

  const handlePlainScroll = () => {
    try {
      const { scrollLeft } = cards.current;

      setScrollLeftValue(scrollLeft);
      setScrollLeftMaxtValue(
        cards.current.scrollWidth - cards.current.offsetWidth
      );
    } catch (err) {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePlainScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePlainScroll);
  });

  const mouseEvent = (event) => {
    event === "enter" && setCallScroll(false);
    event === "leave" && setCallScroll(true);
  };

  autoScroll &&
    callScroll &&
    setInterval(() => {
      try {
        const { scrollLeft } = cards.current;

        setScrollLeftValue(scrollLeft);
        setScrollLeftMaxtValue(
          cards.current.scrollWidth - cards.current.offsetWidth
        );

        cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
          ? (cards.current.scrollLeft = 0)
          : (cards.current.scrollLeft += cards.current.clientWidth);
      } catch (err) {}
    }, 1500);

  return (
    <ScrollingContainer
      scrollOuterBg={scrollOuterBg}
      scrollInnerWidth={scrollInnerWidth}
      scrollInnerPad={scrollInnerPad}
      scrollCardWidth={scrollCardWidth}
      scrollCardHeight={scrollCardHeight}
      scrollCardBg={scrollCardBg}
      scrollCardGaps={scrollCardGaps}
      scrollArrowBg={scrollArrowBg}
      scrollArrowCol={scrollArrowCol}
      onMouseEnter={() => mouseEvent("enter")}
      onMouseLeave={() => mouseEvent("leave")}
      LeftIconActive={scrollLeftValue !== 0 ? true : false}
      RightIconActive={!(scrollLeftMaxValue === scrollLeftValue) ? true : false}
    >
      <div className="main">
        <div className="cardsContainer" ref={cards}>
          {/* takes already prepared cards */}
          {children}
        </div>
      </div>
      <FlexibleDiv
        style={{ position: "absolute" }}
        paddingVertical="0"
        justifyContent="center"
        resFlexDirection="row"
      >
        <FlexibleDiv
          height="30px"
          background="white"
          width="30px"
          className="scrollMoreMain_left"
          onClick={() => handleScroll("left")}
          paddingVertical="0"
          justifyContent="center"
          alignItems="center"
          resFlexDirection="row"
          resjustifyContent="center"
        >
          <LeftIcon size="20px" color="#000" />
        </FlexibleDiv>
        <FlexibleDiv
          background="white"
          height="30px"
          width="30px"
          className="scrollMoreMain_right"
          onClick={() => handleScroll("right")}
          paddingVertical="0"
          justifyContent="center"
          alignItems="center"
          resFlexDirection="row"
          resjustifyContent="center"
        >
          <RightIcon size="20px" color="#000" />
        </FlexibleDiv>
      </FlexibleDiv>
    </ScrollingContainer>
  );
};


export default ScrollingDiv;
