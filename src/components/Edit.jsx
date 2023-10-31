import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const baseURL = "https://localhost:44395/api"
import { useNavigate } from 'react-router-dom';


const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams(); // Don't use window.location

    const getListById = async (id ) => {
        try {
            // const res = await axios.get(`${baseURL}Tdl/${id}`)
            const res = await axios.get(`${baseURL}/Tdl/${id}`)
            console.log(res.data)
            return res.data
        } catch (error) {
            
        }
    }
    const updateListById = async (id, data) => {
        try {
            const res = await axios.put(`${baseURL}/Tdl/${id}`, {...data})
            return res.data
        } catch (error) {

        }
    }
    useEffect(() => {
        // getListById(window.location.pathname) ==> Bad code
        getListById(id)
    }, [])

    const onFinish = (values) => {
        console.log('Success Update:', values);
        updateListById(id)
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
            required: true,
            message: 'Please input your id!',
            },
        ]}
        >
            <Input value="0"/>
        </Form.Item>

        <Form.Item
        label="Name"
        name="name"
        rules={[
            {
            required: true,
            message: 'Please input your name!',
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
                Update
            </Button>
        </Form.Item>
    </Form>  
  )
}

export default Edit