import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButtom/index.js";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
    }){
    return (
        <>
      <TodoCounter
        total = {totalTodos}
        completed= {completedTodos}
      />
      
      <TodoSearch searchValue = {searchValue} 
                  setSearchValue = {setSearchValue}/>
      
      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = { () => deleteTodo(todo.text)}                    />
        ))}
        
      </TodoList>
      <CreateTodoButtom/>
      
    </>
    )
}

export {AppUI}