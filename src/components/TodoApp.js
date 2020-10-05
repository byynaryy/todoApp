import React from 'react';
import TodoInputField from './TodoInputField';
import TodoList from './TodoList';
import StatusListSelector from './StatusListSelector';


class TodoApp extends React.Component {
    render() {
        const todos = ["shop", "cook", "eat", "wash"];

        return(
            <div>
                <h1>Todos</h1>
                <TodoInputField />    
                <StatusListSelector />
                <TodoList todos={ todos } />
            </div>
        );
    }
}

export default TodoApp;
