import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './create.css'

function Create() {

  const [uname,setUname] = useState();
  const [email,setEmail] = useState();
  const [age,setAge] = useState();
  const navigate = useNavigate();

  const submit = () => {
    const res = axios.post('http://localhost:5000/api/create',{uname,email,age})
    console.log(res)
    navigate('/')
  }

  return (
    <div className='create-div'>
      <form action="" onSubmit={submit}>
        <div className='create-inner-div'>
         <span>Name : </span>
        <input value={uname} onChange={(e)=>setUname(e.target.value)} type="text" placeholder='Enter Name' />
        </div>
        <div>
          <span>Email : </span>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Email' />
        </div>
        <div>
          <span>Age : </span>
          <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder='Enter Age' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create