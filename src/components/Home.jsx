import React from 'react'
import data from '../data'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleDelete = (id) => {
        let index = data.map((e) => e.id).indexOf(id)

        data.splice(index, 1)
        navigate('/')

    }
    return (
        <div className='md:w-11/12 m-auto mt-[50px]'>
            <h1 className='text-center text-2xl font-bold mb-6 '>CRUD Operation Using React</h1>
            <table className='mx-auto text-center md:w-9/12 border border-[#26a364]'>
                <thead className='border border-[#26a364] text-xl'>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id} className='border border-[#26a364]'>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}
                                     className='bg-[#eb533c] px-4 py-1 rounded-md ml-3'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br />
            <Link to={'/add'} className=''>
                <div className='text-center bg-fuchsia-700 md:w-9/12 m-auto p-1 text-white text-xl'>
                    Create
                </div></Link>
        </div>
    )
}

export default Home