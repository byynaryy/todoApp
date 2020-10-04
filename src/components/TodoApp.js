import React from 'react';
import TodoInputField from './TodoInputField';


class TodoApp extends React.Component {
    render() {
        return(
            <div>
                <h1>Todos</h1>
                <TodoInputField />    
            </div>
        );
    }
}

export default TodoApp;
