import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButtom/index.js";

function AppUI(){
    return (
        <>
      <TodoCounter/>
      
      <TodoSearch/>
      
      <TodoContext.Consumer>
        { ({error,loading,searchedTodos,completeTodo,deleteTodo}) => (
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
        )

        }
      </TodoContext.Consumer>
      <CreateTodoButtom/>
      
    </>
    )
}

export {AppUI}