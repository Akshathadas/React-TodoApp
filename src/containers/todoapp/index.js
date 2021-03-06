import React, { useState, useEffect } from 'react';
import constants from "../../utils/constants";
import DisplayList from '../../component/displayedList';
import { Input, Button, DatePicker, Space, Form, Select, } from 'antd';

const TodoList = () => {
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [messageList, setMessageList] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [category, setCategory] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [date, setDate] = useState("");
  const [creationTime, setCreationTime] = useState();
  const { TextArea } = Input;
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("Current List", messageList);
    localStorage.setItem("todos", JSON.stringify(messageList));
  }, [messageList]);

  const onChangeTextArea = e => {
    setDescription(e.target.value)
  };

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    setDate(value)
    setCreationTime(value)
    console.log('onOk: ', value);
  }

  function removeSelectedRows(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setSelectedRowKeys(selectedRowKeys);
  }

  function onDelete() {
    const deleteValue = messageList.filter(item => !selectedRowKeys.includes(item.key));
    setMessageList(deleteValue);
  }

  function removeItem(id) {
    console.log(id);
    const todoLists = messageList.filter(todo => todo.key !== id)
    setMessageList(todoLists);
  }

  function onComplete(id) {
    const completed = messageList.findIndex(obj => obj.key === id);
    const list = JSON.parse(JSON.stringify(messageList));
    list[completed].isCompleted = true;
    setMessageList(list);
  }

  function onFinish(values) {
    console.log(messageList);
    setMessageList(messageList => [
      ...messageList,
      {
        key: messageList.length + 1,
        message,
        category,
        date,
        description,
        isCompleted: false,
        creationTime: new Date().toISOString(),
      }
    ]
    );
    form.resetFields();
    console.log('Success:', values);
  };

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onClear = () => {
    setMessageList([]);
  };

  return (
    <div>
      <Form
        form={form}
        pagination={false}
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Space direction="vertical" size={12}>
          <Form.Item
            label="Task Name"
            name="username"

            rules={[
              {
                required: true,
                message: 'Enter your task',
              },
            ]}
            type="text"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          >
            <Input placeholder="Enter the task" />
          </Form.Item>

          <Form.Item name="description" label="Task Description" rules={[
            {
              required: true,
              message: 'Enter Description',
            },
          ]} >
            <TextArea placeholder="Enter your task description" showCount maxLength={100} onChange={e => onChangeTextArea(e)} />
          </Form.Item>

          <Form.Item name="category" label="Category" rules={[
            {
              required: true,
              message: 'Select Category!',
            },
          ]} ><Select placeholder="Select Category" onChange={e => {
            setCategory(e);
          }}>
              {
                constants.dropDownOptions.map((dropDownOption) =>
                  <Select.Option value={dropDownOption} > {dropDownOption} </Select.Option>)
              }
            </Select>
          </Form.Item>

          <Form.Item
            label="Pick Due Date"
            name="date"
            rules={[
              {
                required: true,
                message: 'Pick the Due Date',
              },
            ]}
          >
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24, offset: 10 }} >
            <Button type="primary" htmlType="submit" >Add task</Button> {'     '}
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
          <Button htmlType="button" position="center" onClick={onClear}>
            Clear Tasks
          </Button>
        </Space>
      </Form>

      {
        selectedRowKeys.length > 0 && <Button type="danger" onClick={() => onDelete()}>
          Delete
        </Button>

      }

      {/* {selectedRowKeys.length > 0 && <Button type="primary" style={{ background: "green" }} onClick={() => onComplete()}>
        Mark as completed
      </Button>} */}

      <DisplayList deleteItem={removeItem} deleteRows={removeSelectedRows} markComplete={onComplete} messageList={messageList} />
    </div>
  )
}
export default TodoList;