import React from 'react'
import ReactDOM from 'react-dom'

const TaskList = props => {
    let displayTask = task => <li key={task}>{task}</li>

    return (
        //let displayTask = function (task) {
        //    return <li>{task}</li>
        //}

        <ul>
            <li>test</li>
            {props.items.map(displayTask)}
        </ul>
    )
}
export default TaskList
