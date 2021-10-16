import React, { useState, useEffect } from 'react';
import constants from "../../utils/constants";
import DisplayList from '../../component/displayedList';
import { Input, Button, DatePicker, Space, Form, Select, } from 'antd';

const TodoList = () => {
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [messageList, setMessageList] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("")
  const { TextArea } = Input;
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("Current List", messageList);
    localStorage.setItem("todos", JSON.stringify(messageList));
  }, [messageList]);


  const onChangeTextArea = e => {
    setDescription(e.target.value)
    console.log('Change:', e.target.value);
  };

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    setDate(value)
    console.log('onOk: ', value);
  }

  function removeItem(id) {
    console.log(id);
    const todoLists = messageList.filter(todo => todo.id !== id)
    setMessageList(todoLists);
  }

  function onFinish(values) {
    setMessageList(messageList => [
      ...messageList,
      {
        id: messageList.length + 1,
        message,
        category,
        date,
        description,
      }
    ]
    );
    setMessage("");
    setCategory("");
    setDate("");
    setDescription("");
    form.resetFields();
    console.log('Success:', values);
  };

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <div>
      <Form
        form={form}
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
                message: 'Enter your username',
              },
            ]}
            type="text"
            value={message}
            placeholder="Enter the task"
            onChange={e => {
              setMessage(e.target.value);
            }}
          >
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Task Description" rules={[
            {
              required: true,
              message: 'Enter Description',
            },
          ]} >
            <TextArea showCount maxLength={100} onChange={e => onChangeTextArea(e)} />
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
        </Space>
      </Form>
      
      <DisplayList deleteItem={removeItem} />
    </div>
  )
}
export default TodoList;