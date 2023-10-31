import React from 'react'
import './App.css'
import { DatePicker } from 'antd';
import { Space, Table, Tag } from 'antd';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';

// const App = () => {
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text) => <a>{text} </a>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       render: (_, { tags }) => (
//         <>
//           {tags.map((tag) => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="middle">
//           <a>Invite {record.name}</a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ];
//   const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['loser'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sydney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ];

//   return (
//     <Table columns={columns} dataSource={data} />
//   )
// }

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Tdl/create' element={<Create />} />
      <Route path='/Tdl/:id' element={<Edit />}/> 
    </Routes>
  )
}

export default App
