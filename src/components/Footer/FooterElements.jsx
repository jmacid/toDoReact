import styled from 'styled-components';

export const Footerbar = styled.footer`
  background: #000;
  height: 15vh;
  `;

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const FooterCopy = styled.div`
`;

export const FooterH2 = styled.h2`
  color: #ccc;
  font-size: 1rem;
  font-weight: 400;
`;

export const FooterLinksList = styled.ul`
  list-style: none;
`;

export const FooterItem = styled.a`
  font-size: 1.5rem;
  color: #ccc;
  margin-left: 10px;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
