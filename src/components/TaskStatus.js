import React from 'react';


class TaskStatus extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmitStatus = this.handleSubmitStatus.bind(this);
    }

    handleChangeStatus(event) {
        this.props.onHandleChangeStatus(event.target.value);
    }
    
    handleSubmitStatus(event) {
        this.props.onHandleSubmitStatus(event);
    }

    render() {
        return(
            <form onSubmit={ this.handleSubmitStatus }>
                <input type="radio"  name={ this.props.name } value="todo" checked={ this.props.statusValue === "todo" } onChange={ this.handleChangeStatus } />
                <label htmlFor="todo">Todo</label>
                <input type="radio" name={ this.props.name } value="doing" checked={ this.props.statusValue === "doing" } onChange={ this.handleChangeStatus } />
                <label htmlFor="doing">Doing</label>
                <input type="radio" name={ this.props.name } value="done" checked={ this.props.statusValue === "done" } onChange={ this.handleChangeStatus } />
                <label htmlFor="done">Done</label>
                <input type="submit" value="Status" />
            </form>
        );
    }
}

export default TaskStatus;

