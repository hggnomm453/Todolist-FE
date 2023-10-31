import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Button, Tooltip } from 'antd';
import { getAllDatas } from '../api'
import { NavLink, useNavigate } from 'react-router-dom';
const baseURL = "https://localhost:44395/api/"

export const Home = () => {
    const navigate = useNavigate();

    const [list, setList] = useState([])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Complete',
            dataIndex: 'isComplete',
            key: 'isComplete',
            render: (value) => {
                const color = value ? 'green' : 'red'
                return (
                    <Tag key={value} color={color}>
                        {value ? 'TRUE' : 'FALSE'}
                    </Tag>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            // HOW ?
            render: (text, item) => (
              <Space size="middle">
                <NavLink to={`/Tdl/${item.id}`} >
                    <Button type='primary'>Edit</Button>
                </NavLink>
                <Button danger onClick={() => onDelete(item.id)}>Delete</Button>
              </Space>
            ),
        },
    ]

    const onDelete = (id) => {
        deleteItem(id)
        const updatedList = list.filter(i => i.id !== id)
        setList(updatedList);
    }

    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`${baseURL}Tdl/${id}`)
            return res
        } catch (error) {
            
        }
    }
    const getAllData = async () => {
        try {
            const res = await axios.get(`${baseURL}Tdl`)
            console.log(res.data)
            setList(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        /* Error code */
        // const dataList = getAllDatas()
        // setList(dataList)

        getAllData();
    }, [])

    console.log(`list: ${JSON.stringify(list)}`)
    
    return (
        <>
            <Tooltip title="Create">
                <NavLink to="/Tdl/create" >
                    <Button type="primary" shape="circle" icon={<PlusCircleOutlined />} />
                </NavLink>
            </Tooltip>  
            <Table columns={columns} dataSource={list} />
        </>
      
    )
}
