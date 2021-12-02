import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { Card, Button, Alert } from 'antd';
import {
    useParams,
    useHistory,
    useLocation
} from "react-router-dom";

const DisplayId = () => {
    const { id } = useParams();
    const history = useHistory();
    const [taskDetails, setTaskDetails] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [complete, setComplete] = useState();
    const found = taskDetails.find(e => e.key == id);
    let location = useLocation();

    function onDelete() {
        const list = taskDetails.filter((todo) => todo.key !== parseInt(id));
        localStorage.setItem("todos", JSON.stringify(list));
        history.push('/')
    };

    function onComplete() {
        const lol = taskDetails.isCompleted;
        console.log(typeof isCompleted)

        const completed = taskDetails.findIndex(obj => obj.isCompleted === id);
        // const completed = isCompleted;
        console.log(completed)
    }

    return (
        <div>
            {
                found && (
                    <Card title={"Task Details:  " + found.message + "     " + "Created On:  " + DateTime.fromISO(new Date(found.creationTime).toISOString()).toFormat('dd/MM/yyyy HH:mm')} style={{ border: '2px solid black', width: 800 }}>

                        <div>

                            <p><b>Task Description:</b> {found.description} </p>
                            <p><b>Category:</b> {found.category}</p>
                            <p><b>Due Date:</b> {DateTime.fromISO(new Date(found.date).toISOString()).toFormat('dd/MM/yyyy HH:mm ')}</p>
                            <p><b>Status:</b> {found.isCompleted} </p>

                        </div>

                        <Button type="danger" onClick={onDelete}>Delete Task</Button> {""}
                        <Button type="default" onClick={onComplete}>Mark as Completed</Button>
                    </Card>
                )
            }
            {
                !found && <p>Invalid ID
                    <Card style={{ width: 300 }}>
                        <Alert
                            message="404"
                            description={`Page not found ${location.pathname}`}
                            type="error"
                            showIcon
                        />
                    </Card></p>
            }
        </div>
    )
};

export default DisplayId;