import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'



const Update = () => {
    const {id}= useParams()
    const users = useSelector((state) => state.users)
    const existingUser=users.filter(f => f.id == id)
    const {name,email}=existingUser[0]
    const [uname,setName]=useState(name)
    const [uemail,setEmail]=useState(email)
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail



        }) )
        navigate('/')
    }
    
   
   
    const handleSubmit =()=>{
        // if (uu){
            
        // }
    }
  return (
    <div>
    <h3>Update New User</h3>

    <form  onSubmit={handleUpdate}>
      <div>
        <label>Name:</label>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={uname}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={uemail}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Update