import React from 'react';


class TaskStatus extends React.Component {
    render() {
        return(
            <form>
                <input type="radio"  name="status" value="todo" />
                <label for="todo">todo</label>
                <input type="radio" name="status" value="doing" />
                <label for="doing">doing</label>
                <input type="radio" name="status" value="done" />
                <label for="done">done</label>
            </form>
        );
    }
}

export default TaskStatus;

