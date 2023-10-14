import React, { useState } from 'react'
import data from '../data'
import{v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate=useNavigate()
    const [name, setName] = useState('')
   const[gender,setGender]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid()
        let unique = id.slice(0, 8)
        let a = name
        let b = gender
        
        data.push({ id: unique, name: a, gender: b})
        navigate('/')
    }
    return (
        <div className='text-black md:mt-[50px]'>
            <h1 className='text-center mb-5 text-2xl font-bold'>Create the list</h1>
            <form onSubmit={handleSubmit} className='flex flex-col md:w-[500px] md:m-auto'>
                <label htmlFor="name" className='font-bold'>Name:</label>
                <input type="text" placeholder='Enter name' id='name' value={name} onChange={(e) => setName(e.target.value)} className='border p-2'/>

                <label htmlFor="gender" className='font-bold'>Gender:</label>
                <input type="text" placeholder='Enter gener' id='gender' value={gender} onChange={(e) => setGender(e.target.value)} className='border p-2'/>
                <button type='submit' className='bg-[#262685] text-white text-center'>Submit</button>
            </form>
        </div>
    )
}

export default Add