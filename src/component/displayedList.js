import { Table, Tag, Checkbox, Menu, Dropdown, Space } from 'antd';
import { DateTime } from 'luxon';
import { EllipsisOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

const DisplayList = (props) => {

    const rowSelection = {
        onChange: props.deleteRows
    };

    const onClick = (key, id) => {
        if (key == 1) {
            props.deleteItem(id)
            console.log(1);
        } else {
            props.markComplete(id)
            console.log(2);
        }
    };

    const menu = (id, row) => {
        return (
            <Menu onClick={({ key }) => onClick(key, id)} >
                <Menu.Item key="1" >Delete</Menu.Item>
                <Menu.Item key="2" disabled={row.isCompleted || DateTime.fromISO(new Date(row.date).toISOString()).diffNow('hours').hours < 0}>Mark as completed</Menu.Item>
            </Menu>
        );
    }

    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'message',
            render: (key, value) => <p><Link to={"/display/" + value.key}> {value.message} </Link></p>
        },
        {
            title: 'Task Description',
            dataIndex: 'description',

        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Due Date',
            dataIndex: 'date',
            render: value => <p>{DateTime.fromISO(new Date(value).toISOString()).toFormat('dd/MM/yyyy HH:mm')}
            </p>
        },
        {
            title: 'Status',
            dataIndex: 'date',
            render: (value, row) => <p>{row.isCompleted == true ? <Tag color="green">Completed</Tag> : DateTime.fromISO(new Date(value).toISOString()).diffNow('hours').hours > 0 ? <Tag color="gold">Pending</Tag> : <Tag color="red" >Overdue</Tag>}  </p>
        },
        {
            title: 'Action',
            dataIndex: 'key',
            render: (id, row) => <Space direction="vertical">
                <Space wrap>
                    <Dropdown overlay={menu(id, row)} trigger={['click']}>
                        <EllipsisOutlined />
                    </Dropdown>
                </Space>
            </Space>
        },
        {
            title: 'Created On',
            dataIndex: 'creationTime',
            render: (value) => <p>{DateTime.fromISO(value).toFormat('dd/MM/yyyy HH:mm')}
            </p>

        },

        // {
        //     title: 'Completed',
        //     dataIndex: 'key',
        //     render: (key, row) => <Button disabled={row.isCompleted} onClick={() => props.markComplete(key)} > Completed</Button >,
        // },
    ];

    return (
        <div>
            <Table
                rowSelection={{
                    type: Checkbox,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={props.messageList}
            />
        </div >

    )
}
export default DisplayList;