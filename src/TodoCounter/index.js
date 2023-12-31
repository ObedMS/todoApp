import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

function TodoCounter(){
    const {totaltodos,completedTodos} = React.useContext(TodoContext);

    return(
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totaltodos} TODOs</h2>
    )
}

export { TodoCounter }