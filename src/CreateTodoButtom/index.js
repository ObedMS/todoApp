import react from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(){
    const onclickButton = (msg) => {
        alert(msg)
    }
    return(
        <button className="CreateTodoButton"
                onClick={() => onclickButton('Aquí deberia abrir el modal')}
        >+</button>
    );
}

export { CreateTodoButtom };