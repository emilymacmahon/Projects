import React from 'react'
import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'Dr App',
            day: '2/5 at 2pm',
            reminder: true,
        },
        {
            id:2,
            text: 'school meeting',
            day: '2/6 at 3pm',
            reminder: true,
        },
        {
            id:3,
            text: 'get groceries',
            day: '2/7 at 4pm',
            reminder: true,
        },
    ])

    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>
                    {task.text}
                </h3>
            ))}
        </>
    )
}

export default Tasks