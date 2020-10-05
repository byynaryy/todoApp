import React from 'react';


class StatusListSelector extends React.Component {
    render() {
        return(
            <form>
                <select name="statusList">
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" value="Status List" />
            </form>
        );
    }
}

export default StatusListSelector;
