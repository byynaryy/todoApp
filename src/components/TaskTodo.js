import React from 'react';


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
            <div>
                { todo }
            </div>
        );
    }
}

export default TaskTodo;
