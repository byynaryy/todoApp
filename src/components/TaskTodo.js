import React from 'react';
import TaskStatus from './TaskStatus';


class TaskTodo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmitStatus = this.handleSubmitStatus.bind(this);
    }

    handleChangeStatus(event) {
        this.props.onHandleChangeStatus(event);
    }

    handleSubmitStatus(event) {
        this.props.onHandleSubmitStatus(event);
    }

    render() {
        const todo = this.props.todoo;

        return(
            <li>
                { todo.todo }
                <TaskStatus onHandleChangeStatus={ this.handleChangeStatus } statusValue={ this.props.statusValue} onHandleSubmitStatus={ this.handleSubmitStatus } />
            </li>
        );
    }
}

export default TaskTodo;
