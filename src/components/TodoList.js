import React from 'react';
import TaskTodo from './TaskTodo';


class TodoList extends React.Component {
    render() {
        const todoList = [];

        this.props.todos.forEach((todo) => {
            todoList.push(<TaskTodo todo={ todo } key={ todo} />);
        });

        return(
            <div>{ todoList }</div>
        );
    }
}

export default TodoList; 
