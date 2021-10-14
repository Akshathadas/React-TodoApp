import { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import { DateTime } from 'luxon';

const DisplayList = () => {
    const [todos, setTodos] = useState();
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
        console.log(todos)
    }, [todos]);

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


        }

    ];
    return (
        <div>
            <Table dataSource={todos} columns={columns} />
        </div>
    )
}
export default DisplayList;