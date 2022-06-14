import styled from "styled-components";

export const Nav = styled.nav`
	background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background:  linear-gradient(270deg, #2131C2 0%, #101861 102.99%);
    @media (max-width: 850px) {
      padding: 1rem 1rem;
    }
    @media (max-width: 768px) {
        padding: 0.8rem 0.7rem;
    }`

export const Li = styled.li`
    margin: 0 2rem;
    color:white;
    font-size:1.125rem; 
    &:hover {
    border-bottom: 3px solid #F28E13;
    }
    @media (max-width: 1200px) {
    margin: 0 1.5rem;
    } ;
    @media (max-width: 850px) {
    font-size:1rem;
    margin: 0 1rem;
    }; 
    @media (max-width: 768px) {
      &:hover {
        border-bottom: 1px solid #F28E13;
        }
      };`
export const FooterDiv = styled.footer`

`

export const Article = styled.article`
   text-align: center;
   margin: 0 auto;
   @media (min-width: 768px) {
    width: 75%;
    };
    @media (min-width: 1024px) {
      width: 60%;
    };
    @media (min-width: 1280px) {
      width: 50%;
    };
`

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  @media (min-width: 640px) {
    font-size: 1.25rem; 
    line-height: 1.75rem;
    };
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
    };
    @media (min-width: 1280px) {
      font-size: 1.875rem;
      line-height: 2.25rem; 
    };
`
