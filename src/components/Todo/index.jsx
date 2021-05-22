import React, { useState, useEffect } from 'react'
import {
  TodoContainer,
  TodoWrapper,
  TodoTitle,
  TodoForm,
  TodoInput,
  TodoButton,
  TodoList
} from './TodoElements';
import TodoItem from './SubComponents/TodoItem';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  
  const [inputValue, setInputValue] = useState('');
    
  const [todoItems, setTodoItems] = useState([]);
  
  const addTodoItem = async (e) => {
    e.preventDefault();
    
    if( inputValue === '' ) return;
    
    setTodoItems([...todoItems, {id:uuidv4(), text: inputValue}]);

    setInputValue('');
  }
  
  const deleteTodoItem = (id) => {

    const updatedTodoItems = todoItems.filter( item => item.id !== id);
    
    setTodoItems([...updatedTodoItems]);
  } 
  
  const editTodoItem = (id, newText) => {
    
    const index = todoItems.findIndex( item => item.id === id);
    
    if( index === -1 ) return;
    
    deleteTodoItem(id);
    let newTodoItems = [...todoItems.slice(0,index), {id, text: newText} ,...todoItems.slice(index +1, todoItems.length)];
    
    setTodoItems(newTodoItems);
  }
  
  useEffect( () => {
    let localStoredTodos = localStorage.getItem('todoItems');
    localStoredTodos && setTodoItems(JSON.parse(localStoredTodos));
  }, []);
  
  useEffect(() => {
      localStorage.removeItem('todoItems');
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems])
    
  return (
    <TodoContainer>
      
      <TodoWrapper>
        
        <TodoTitle>What's the Plan for Today?</TodoTitle>
        
        <TodoForm onSubmit={ addTodoItem }>
          <TodoInput
            type="text"
            value={ inputValue }
            onChange={ (e) => setInputValue(e.target.value) }
          />
          <TodoButton type="submit">Add Todo</TodoButton>          
        </TodoForm>
        
        <TodoList>
          
          {
            todoItems.map( item => {
              return (
                <TodoItem
                  key = {item.id}
                  id = {item.id}
                  text = {item.text}
                  deleteItem = { deleteTodoItem }
                  editItem = {editTodoItem}
                />
              )
            })
          }
          
        </TodoList>
        
      </TodoWrapper>
      
    </TodoContainer>
  )
}

export default Todo;
