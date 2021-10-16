import { useEffect, useState } from 'react';
import { Table, Tag, Button } from 'antd';
import { DateTime } from 'luxon';

const DisplayList = (props) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoList);
    }, [localStorage.getItem("todos")]);

    
    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'message',
            key: 'taskname',

        },
        {
            title: 'Task Description',
            dataIndex: 'description',
            key: 'description',

        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Due Date',
            dataIndex: 'date',
            key: 'date',
            render: value => <p>{DateTime.fromISO(new Date(value).toISOString()).toFormat('dd/MM/yyyy HH:mm')}
            </p>
        },
        {
            title: 'Status',
            dataIndex: 'date',
            key: 'date',
            render: value => <p>{DateTime.fromISO(new Date(value).toISOString()).diffNow('hours').hours > 0 ? <Tag color="gold">Pending</Tag> : <Tag color="red">Overdue</Tag>}</p>


        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button onClick={() => props.deleteItem(id)} > Delete</Button >,
        },

    ];

    return (
        <div>
            <Table dataSource={todos} columns={columns} />
        </div>
    )
}
export default DisplayList;