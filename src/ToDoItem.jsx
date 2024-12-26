import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
export default function ToDoItem({title, description, Completed, onToggleCompleted}){

        let descriptionText = (!description) ? 'default text' : description;
        let CompletedText = (Completed) ? 'Completed' : 'Not Completed';
        let buttonClass = `btn btn-${(Completed) ? 'success' : 'danger'}`;
        return (
            
                    <div id ='item-id' className="to-do-item p-3 d-flex justify-content-between rounded ">
                    <div>
                    <h5>{title}</h5>
                    <p>{descriptionText}</p>
                    </div>
                    <button className={buttonClass}
                    onClick={()=>onToggleCompleted()}
                    >{CompletedText}</button>
                    </div>
                    
        );
    }

