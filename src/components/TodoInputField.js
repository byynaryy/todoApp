import React from 'react';


class TodoInputField extends React.Component {
    render() {
        return(
            <form>
                <input type="text" placeholder="Todo..." />
                <input type="submit" value="Add" />
            </form> 
        );
    }
}

export default TodoInputField;
