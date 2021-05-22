import React from 'react'

import {
  MainSection,
  MainContainer,
  MainWrapper,
  MainTitle,
  MainP,
  MainCTA,
  MainCTAWrapper
} from './MainSectionElements';

const Main = () => {
  return (
    <MainSection>
      <MainContainer>
        
        <MainWrapper>
          <MainTitle>ToDo List</MainTitle>
          <MainP>Hi! This app will help you to track all your pending activities like chores, meetings, and must-not-forget responsibilities.</MainP>
        </MainWrapper>
        
        <MainCTAWrapper>
          <MainCTA to="/todo">ToDo</MainCTA>
        </MainCTAWrapper>
        
      </MainContainer>
    </MainSection>
  )
}

export default Main;