import React from 'react';


class TodoInputField extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.onHandleChange(event.target.value);
    }
    
    handleSubmit(event) {
        this.props.onHandleSubmit(event);
    }

    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <input type="text" value={ this.props.todo } onChange={ this.handleChange } placeholder="Todo..." />
                <input type="submit" value="Add" />
            </form> 
        );
    }
}

export default TodoInputField;
