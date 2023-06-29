import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButtom/index.js";
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI(){
  const {error,loading,searchedTodos,completeTodo,deleteTodo,openModal,setOpenModal} = React.useContext(TodoContext)
    return (
        <>
      <TodoCounter/>
      
      <TodoSearch/>
            
      <TodoList>
        {error && <TodoError error = {error}/>}
        {loading && new Array(5).fill(1).map((a,i) => <TodosLoading key = {i}/>)}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = { () => deleteTodo(todo.text)}                    />
        ))}          
      </TodoList>
        
      {
        !!openModal && 
        <Modal>
          <TodoForm/>
        </Modal>
      }

      <CreateTodoButtom setOpenModal = {setOpenModal}
                        openModal = {openModal}/>
      
    </>
    )
}

export {AppUI}