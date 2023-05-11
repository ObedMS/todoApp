import React from 'react'
import './App.css';
import {TodoProvider} from '../TodoContext'
import { AppUI } from './AppUI'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro a React', completed:true},
//   { text: 'Llorar con la llorona', completed: false}
// ]

function App() {      

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )    
        
}

export default App;
