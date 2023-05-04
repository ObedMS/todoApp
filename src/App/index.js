import React from 'react'
import './App.css';
import { AppUI } from './AppUI'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro a React', completed:true},
//   { text: 'Llorar con la llorona', completed: false}
// ]

function useLocalStorage(itemName,initialValue){
  const [error,setError] = React.useState();
  const [loading,setLoading] = React.useState(true);
  const [item,setItem] = React.useState(initialValue);
  React.useEffect(() => {    
    setTimeout(() =>{

      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        
        if(!localStorageItem) {
          localStorage.setItem(itemName,JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    },4000)
  })

  
  
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      setItem(newItem)
    } catch (error) {
       setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App() {
    
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');  
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  // let searchedTodos = [];

  // // Lógica para filtrar
  // if (!searchValue.length >= 1) {
  //   searchedTodos = todos;
  // } else {
  //   searchedTodos = todos.filter(todo => {
  //     const todoText = todo.text.toLowerCase();
  //     const searchText = searchValue.toLowerCase();
  //     return todoText.includes(searchText);
  //   });
  // }

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));  

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    //setTodos(newTodos)

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);

    //setTodos(newTodos)

    saveTodos(newTodos)
  }

  // console.log('Render (antes del use effect)');

  // React.useEffect(() => {
  //   console.log('use effect');
  // },[totalTodos])

  // console.log('Render (despues del use effect)');

  return [    
    <AppUI loading={loading}
           error={error}
           totalTodos = {totalTodos}
           completedTodos= {completedTodos}
           searchValue = {searchValue} 
           setSearchValue = {setSearchValue}
           searchedTodos= {searchedTodos}
           completeTodo = {completeTodo}
           deleteTodo = {deleteTodo}
           onDelete = {deleteTodo}/>
    ];
}

export default App;
