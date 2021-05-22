import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainSection = styled.section`
  background-color: #3928ff;
  height: 75vh;
  overflow: hidden;
  `;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 40px;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const MainWrapper = styled.div`
  width: 58%;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const MainCTAWrapper = styled.div`
  width: 40%;
  
  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  background: #ccc;
  width: fit-content;
  text-align: center;
  padding: 5px;
  
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const MainP = styled.p`
  font-size: 1.25rem;
  margin-top: 25px;
  line-height: 30px;
  width: 80%;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MainCTA = styled(Link)`
  display: block;
  text-align: center;
  width: fit-content;
  background-color: rgba(253,0,159,255);
  padding: 15px 45px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  
  @media screen and (max-width: 768px) {
    margin: 25px auto;
  }
`;