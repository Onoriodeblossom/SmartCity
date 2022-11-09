import styled from "styled-components";

export const ScrollingContainer = styled("div")`
  background: ${(props) => props.scrollOuterBg || "white"};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .scrollMoreMain_right,
  &:hover .scrollMoreMain_left {
    visibility: visible;
  }

  .main {
    width: ${(props) => props.scrollInnerWidth || "94%"};
    margin: 0 auto;
  }

  .cardsContainer {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    align-items: stretch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding: ${(props) => props.scrollInnerPad || "0px 10px"};
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
      height: 0;
      width: 0;
    }
  }

  .scrollMoreMain_right {
    background: ${({ RightIconActive }) => (true ? "#fff" : "white")};
    border-radius: 50%;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.8);
    position: absolute;
    right: 0;
    bottom: 0px;
    cursor: pointer;
    @media (max-width: 800px) {
      height: 40px;
      width: 40px;
    }
    & svg {
      font-size: 2rem;
      color: white;
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
  .scrollMoreMain_left {
    background: white;
    position: absolute;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.8);
    left: 0;
    bottom: 0px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 800px) {
      height: 40px;
      width: 40px;
    }
    & svg {
      font-size: 2rem;
      color: "red";
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
`;
