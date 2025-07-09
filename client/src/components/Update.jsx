import axios from "axios";
import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update(){

   const [uname,setUname] = useState();
   const [email,setEmail] = useState();
   const [age,setAge] = useState();
   const navigate = useNavigate();
   const {id} = useParams();

   useEffect(()=>{
    const fetchData = async() =>{
      try {
        const response = await axios.get(`http://localhost:5000/api/get/${id}`);
        const user = response.data.user
        setUname(user.uname);
        setEmail(user.email)
        setAge(user.age);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
   },[])

   const update = async (e) => {
       e.preventDefault();
       try {
        const response = await axios.put(`http://localhost:5000/api/put/${id}`,{uname,email,age});
        console.log(response.data.message)
        navigate('/')
       } catch (error) {
         console.log(error)
       }
   }


   return(
    <>
        <form onSubmit={(e) => update(e)}>
          <div>
          <input type="text" onChange={(e)=>setUname(e.target.value)} placeholder="update name" value={uname} />
          </div>
          <div>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="update name" value={email} />
          </div>
          <div>
            <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="update name" value={age} />
          </div>
          <button>Update</button>
        </form>
    </>
   )
}

export default Update