import React from 'react';


class StatusListSelector extends React.Component {
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
        return(
            <form onSubmit={ this.handleSubmitStatus }>
                <select name="statusList">
                    <option value="todo" checked={ this.props.status === "todo" } onChange={ this.handleChangeStatus }>Todo</option>
                    <option value="doing" checked={ this.props.status === "doing"} onChange={ this.handleChangeStatus }>Doing</option>
                    <option value="done" checked={ this.props.status === "done" } onChange={ this.handleChangeStatus }>Done</option>
                </select>
                <input type="submit" value="Status List" />
            </form>
        );
    }
}

export default StatusListSelector;
