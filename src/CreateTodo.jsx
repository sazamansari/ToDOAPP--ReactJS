import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import TodoItem from "./ToDoItem";

export default class CreateTodo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            itemTitle: '',

        };
        this.changeTitle = this.changeTitle.bind(this);
        this.submitForm = this.submitForm.bind(this);


    };
    changeTitle(){
        this.setState({
            itemTitle: event.target.value
        });
    }
    submitForm(event){
        event.preventDefault();
        
        this.props.onCreateItem({
            title: this.state.itemTitle,
            Completed: false
        });
    }

    render(){
        return(
           <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="todotitle" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-6">
                </div>
                <input type="text" 
                className="form-control" 
                id="todotitle" placeholder="Title" 
                value={this.state.itemTitle} 
                onChange={this.changeTitle}/>
                <div className="className=col-sm-2">
                    <button className="btn btn-primary">Create
                    </button>
                </div>
                </div>
           </form> 
        )
    }

};