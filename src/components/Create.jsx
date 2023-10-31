import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const baseURL = "https://localhost:44395/api/"


const saveNewItem = async (data) => {
    try {
        const res = await axios.post(`${baseURL}Tdl`, { ...data })
        return res.data
    } catch (error) {
        
    }
}
const Create = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        saveNewItem(values)
        navigate("/")
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
  return (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
        label="ID User"
        name="id"
        rules={[
            {
            // required: true,
            message: 'Please input your id!',
            },
        ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
        label="Name"
        name="name"
        rules={[
            {
            required: true,
            message: 'Please input your password!',
            },
        ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
        name="isComplete"
        valuePropName="checked"
        // wrapperCol={{
        //     offset: 8,
        //     span: 16,
        // }}
        >
            <Checkbox type='checkbox'>Complete ?</Checkbox> 
        </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>  )
}

export default Create