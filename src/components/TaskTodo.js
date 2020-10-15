import React from 'react';


class TaskTodo extends React.Component {
    render() {
        const todo = this.props.todo;

        return(
            <li>{ todo.todo }</li>
        );
    }
}

export default TaskTodo;
