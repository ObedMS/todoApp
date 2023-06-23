import react from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){
    const onclickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return(
        <button className="CreateTodoButton"
                onClick={onclickButton}
        >+</button>
    );
}

export { CreateTodoButtom };