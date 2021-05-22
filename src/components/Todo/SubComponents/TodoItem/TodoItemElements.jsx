import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  border: 1px solid #fff;
  min-height: 25px;
  padding: 10px 15px;
  font-weight: 700;
  border-radius: 5px;
  color: #fff;
   
  @media screen and (max-width: 768px) {
    padding: 10px 10px; 
  }
  
  &:nth-child(4n + 1) {
    background: linear-gradient(to right, #1794ff, #126eff);
  }
      
  &:nth-child(4n + 2) {
    background: linear-gradient(to right, #ff6914, #fe4a13);
  }
  
  &:nth-child(4n + 3) {
    background: linear-gradient(to right, #560cff, #9000f9);
  }
  
  &:nth-child(4n + 4) {
    background: linear-gradient(to right, #ff0aeb, #f9007c);
  }
`;

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${( props ) => props.visible ? 'display: flex;' : 'display: none;'}
`;

export const TodoItemContent = styled.p`
  width: 70%;
  font-size: 1rem;
  
  @media screen and (max-width: 768px) {
    width: 60%;
    font-size: 1rem;
  }
`;

export const TodoItemButtons = styled.div`
  margin-left: 16px;
`;

export const TodoItemBtn = styled.div`
  display: inline;  
  font-size: 1.5rem;
  cursor: pointer;
  
  &:first-child {
    margin-right: 15px;
  }
`;

export const TodoItemBtnSumbit = styled.button`
  display: inline;
  /* margin-right: 15px;   */
  font-size: 1.5rem;
  cursor: pointer;
  background: inherit;
  color: #fff;
  border: none;
`;

export const TodoItemForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TodoItemInput = styled.input`
  background: #161826;
  color: #ccc;
  width: 65%;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0 5px;
  margin-left: -7px;
  
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

