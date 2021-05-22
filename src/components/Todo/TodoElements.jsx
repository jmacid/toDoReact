import styled from 'styled-components';


export const TodoContainer = styled.div`
  background: #3927ff;
  min-height: 75vh;
  overflow: auto;
`;

export const TodoWrapper = styled.div`
  margin: 25px auto;
  padding: 25px;
  min-height: 50vh;
  background: #161826;
  color: #ccc;
  width: 50%;
  border-radius: 25px;
  
  @media screen and (max-width: 1200px) {
    width: 75%;
  }
  
`;

export const TodoTitle = styled.h1`
  text-align: center;
  margin-top: 25px;
  font-size: 2rem;
  
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const TodoForm = styled.form`
  text-align: center;
  margin-top: 25px;
`;

export const TodoInput = styled.input`
  border: 3px solid #371696;
  width: 50%;
  padding: 10px 10px;
  background: #161826;
  font-size: 1rem;
  color: #ccc;
  border-radius: 4px 0  0 4px;
  
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  &:focus {
    outline: none;
  }
`;

export const TodoButton = styled.button`
  background: linear-gradient(to right, #371696, #9000fc);
  color: #ccc;
  font-size: 1rem;
  font-weight: 700;
  padding: 13px 13px;
  border: none;
  border-radius: 0 4px 4px 0;
  
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const TodoList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  grid-gap: 5px;
  margin-top: 25px;
  width: 80%;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;