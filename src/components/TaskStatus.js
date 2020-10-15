import React from 'react';


class TaskStatus extends React.Component {
    render() {
        return(
            <form>
                <input type="radio"  name="status" value="todo" />
                <label htmlFor="todo">todo</label>
                <input type="radio" name="status" value="doing" />
                <label htmlFor="doing">doing</label>
                <input type="radio" name="status" value="done" />
                <label htmlFor="done">done</label>
            </form>
        );
    }
}

export default TaskStatus;

