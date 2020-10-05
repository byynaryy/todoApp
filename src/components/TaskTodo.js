import React from 'react';


class TaskTodo extends React.Component {
    render() {

        return(
            <div>{ this.props.todo }</div>
        );
    }
}

export default TaskTodo;
