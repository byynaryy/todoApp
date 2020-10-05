import React from 'react';
import TaskTodo from './TaskTodo';
import TaskStatus from './TaskStatus';


class TodoList extends React.Component {
    render() {
        const todoList = [];

        this.props.todos.forEach((todo) => {
            todoList.push(
                <div>
                    <TaskTodo todo={ todo } key={ todo} />
                    <TaskStatus />
                </div>
            );
        });

        return(
            <div>{ todoList }</div>
        );
    }
}

export default TodoList; 
