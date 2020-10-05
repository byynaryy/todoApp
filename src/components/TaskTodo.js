import React from 'react';


class TaskTodo extends React.Component {
    render() {
        //const todo = this.props.todo; 

        return(
            <div>{ this.props.todo }</div>
        );
    }
}

export default TaskTodo;
