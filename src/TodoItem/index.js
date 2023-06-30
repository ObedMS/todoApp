import react from "react";
import './TodoItem.css';
import { CompleteIcon } from "../TodoIcon/ComleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {
    // const onComplete = () =>{
    //     alert('Ya completaste el todo ' + props.text)
    // }

    // const onDelete = () =>{
    //     alert('Borraste el todo ' + props.text)
    // }
    return(
        <li className="TodoItem">
            {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                  onClick={props.onComplete}    
            >
                √
            </span> */}
            <CompleteIcon completed={props.completed}
                          onComplete={props.onComplete}/>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            {/* <span className="Icon Icon-delete"
                  onClick={props.onDelete}
            >
                X
            </span> */}
            <DeleteIcon onDelete={props.onDelete}/>
        </li>
    );
}

export { TodoItem };