import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import TodoItem from "./ToDoItem";
import CreateTodo from "./CreateTodo";
import EditModel from "./EditModel";


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TodoItem: props.todoItems
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        let TodoItem = this.state.TodoItem.slice();
        TodoItem.push(item);
        this.setState({TodoItem});
    }

    saveItem(todoItems){
        this.setState({todoItems});
        this.props.onSaveItems(todoItems);
    }

    saveItem(index, {title, description}){
        let todoItems = this.state.TodoItem.slice();
        todoItems[index].title = title;
        todoItems[index].description = description;
    }
    onToggleCompleted(index){
        let TodoItem = this.state.TodoItem.slice();
        TodoItem[index].Completed = !TodoItem[index].Completed;
        this.setState({TodoItem});
    }
    render(){
        let items = this.state.TodoItem.map((item, index) => (
            <div className="row align-items-center p-3">
            <div className="'col-11">
            <TodoItem 
            title={item.title}
            description={item.description}
            Completed={item.Completed}
            onToggleCompleted={()=> this.onToggleCompleted(index) }
            />
            </div>
            <div className="col">
                <EditModel
                title={item.title}
                description={item.description}
                onItemEdited={(EditedItem) => this.saveItem(index, EditedItem)}/>
            </div>
            </div>
        ));
        
        return (
            <div className="container">
                <div className="mt-2 mb-5">
                    <CreateTodo
                    onCreateItem={this.addItem}
                    />
                    </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}
