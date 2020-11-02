import React from 'react';
import TodoInputField from './TodoInputField';
import TodoList from './TodoList';
import StatusListSelector from './StatusListSelector';


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={ todo: '', todos: [], statusValue: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmitStatus = this.handleSubmitStatus.bind(this);
    }

    handleChange(todo) {
        console.log("todo: "+ todo);
        this.setState({todo: todo});
    }

    handleSubmit(event) {
        event.preventDefault();

        const task = {
            id: Date.now(),
            todo: this.state.todo,
        }

        this.setState(state => ({
            todos: state.todos.concat(task),
            todo: ''
        }));
    }

    handleChangeStatus(statusValue) {
        console.log("statusValue: "+ statusValue);
        this.setState({statusValue: statusValue});
    }

    handleSubmitStatus(event) {
        event.preventDefault();
        console.log("submited: "+this.state.status);
    }

    render() {
        //const todos = ["shop", "cook", "eat", "wash"];

        return(
            <div>
                <h1>Todos App</h1>
                <TodoInputField todo={ this.state.todo } onHandleChange={ this.handleChange } onHandleSubmit={ this.handleSubmit } />    
                <StatusListSelector />
                <TodoList todos={ this.state.todos } onHandleChangeStatus={ this.handleChangeStatus } statusValue={ this.state.statusValue } onHandleSubmitStatus={ this.handleSubmitStatus } />
            </div>
        );
    }
}

export default TodoApp;
