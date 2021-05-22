import React, { useState } from 'react'
import {
  FaRegEdit,
  FaRegTimesCircle,
  FaRegSave,
} from "react-icons/fa";

import {
  TodoItemContainer,
  TodoItemWrapper,
  TodoItemContent,
  TodoItemButtons,
  TodoItemBtn,
  TodoItemForm,
  TodoItemInput,
  TodoItemBtnSumbit,
} from './TodoItemElements';

const TodoItem = ({id, text, deleteItem, editItem}) => {
  
  const [editMode, setEditMode] = useState(false);
  
  const [itemInputValue, setItemInputValue] = useState(text);
  
  const updateItem = e => {
    e.preventDefault();
       
    editItem(id, itemInputValue);    
    
    setEditMode(false);
  }
  
  return (
    <TodoItemContainer>
      
      {/* Normal mode */}
      <TodoItemWrapper visible={!editMode}>
        <TodoItemContent>{text}</TodoItemContent>
        
        <TodoItemButtons>
          <TodoItemBtn onClick={ () => deleteItem(id) }><FaRegTimesCircle /></TodoItemBtn>
          <TodoItemBtn onClick={ () => setEditMode(true) }><FaRegEdit /></TodoItemBtn>
        </TodoItemButtons>
      </TodoItemWrapper>
      
      {/* Edit mode */}
      <TodoItemWrapper visible={editMode}>
        <TodoItemForm onSubmit={ updateItem }>
          <TodoItemInput 
            type="text"
            value={ itemInputValue }
            onChange={ e => setItemInputValue(e.target.value) }
          />
          <TodoItemButtons>
            <TodoItemBtn visible={editMode} onClick={ () => setEditMode(false)}><FaRegTimesCircle /></TodoItemBtn>
            <TodoItemBtnSumbit visible={editMode} type="submit" ><FaRegSave /></TodoItemBtnSumbit>
          </TodoItemButtons>
        </TodoItemForm>
      </TodoItemWrapper>
      
    </TodoItemContainer>
  )
}

export default TodoItem;
