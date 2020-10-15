import React from 'react';
import TodoInputField from './TodoInputField';
import TodoList from './TodoList';
import StatusListSelector from './StatusListSelector';


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={ todo: '', todos: [] }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(todo) {
        console.log("todo: "+ todo);
        this.setState({todo: todo});
    }

    handleSubmit(event) {
        event.preventDefault();

        const task = {
            todo: this.state.todo,
            id: Date.now()
        }

        this.setState(state => ({
            todos: state.todos.concat(task),
            todo: ''
        }));
    }

    render() {
        //const todos = ["shop", "cook", "eat", "wash"];

        return(
            <div>
                <h1>Todos</h1>
                <TodoInputField todo={ this.state.todo } onHandleChange={ this.handleChange } onHandleSubmit={ this.handleSubmit } />    
                <StatusListSelector />
                <TodoList todos={ this.state.todos } />
            </div>
        );
    }
}

export default TodoApp;
