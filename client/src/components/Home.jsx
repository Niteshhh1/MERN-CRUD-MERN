import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import axios from 'axios'

function Home() {

  const [user,setUser] = useState([]);

  useEffect(()=>{  
        async function fetc() {
            try {
              const response = await axios.get('http://localhost:5000/api/get');
              setUser(response.data.users);
            } catch (error) {
              console.log(error)
           }
        }
        fetc();
  },[])
   
  const deleteFun = async (id) => {
  try {
   axios.delete(`http://localhost:5000/api/delete/${id}`)
   alert('delete ');
   setUser(prev => prev.filter(u => u._id !== id));
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

  return (
    <div className='div'>
        <div className='home-div'>
            <Link className='home-button' to='/create'>Add</Link>
        </div>
        <div >
            <table className='table'>
           <tr className='table-row'>
             <th className='t-h'>Name</th>
             <th className='t-h'>Email</th>
             <th className='t-h'>Age</th>
             <th className='t-h'>Action</th>
           </tr>
           {user.map((val,idx)=>( 
            <tr key={idx} className='table-row'>
              <td className='t-d'>{val.uname}</td>
              <td className='t-d'>{val.email}</td>
              <td className='t-d'>{val.age}</td>
              <td className='t-d'>
                <Link to={`/update/${val._id}`} className='home-button'>Edit</Link>
                <button onClick={()=>deleteFun(val._id)} className='home-button'>Delete</button>
              </td>
            </tr>
           ))}
        </table>
        </div>
    </div>
  )
}

export default Home