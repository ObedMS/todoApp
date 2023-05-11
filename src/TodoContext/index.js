import React, {createContext} from 'react'
import {useLocalStorage} from './useLocalStorage'

const TodoContext = createContext();

function TodoProvider(props) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');  
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length  

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));  

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);    

    saveTodos(newTodos)
  }


    return(
        <TodoContext.Provider value = {{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue, 
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}