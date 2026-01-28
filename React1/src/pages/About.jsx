
import React, { useEffect, useState } from 'react'


const About = () => {
  const [users,setUser]=useState([])
  useEffect(()=>{fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUser(data));
  },[])
  return (
    <div>
       <h1>User</h1>
              {users.map((user)=>(
                  <div key={user.id}>
                      <h4>{user.username}</h4>
                      <h4>{user.email}</h4>
                  </div>
              ))}
    </div>
  )
}

export default About