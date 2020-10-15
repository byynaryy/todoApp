import React from 'react';
import TaskTodo from './TaskTodo';
import TaskStatus from './TaskStatus';


class TodoList extends React.Component {
    render() {
        const todoList = [];

        this.props.todos.forEach((todo) => {
            todoList.push(<TaskTodo todo={ todo } key={ todo.id } />);
        });

        return(
            <ul>{ todoList }</ul>
        );
    }
}

export default TodoList; 
