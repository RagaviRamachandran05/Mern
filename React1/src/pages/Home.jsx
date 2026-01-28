import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../App'
import Profile from '../components/Profile'
import Parent from '../components/Parent'

const Home = () => {
  const [user, setUser] = useState("abcd")

  return (
    <div>
      <Link to='/form'>Form</Link><br />
      <Link to='/state'>Use State</Link><br />
      <Link to='/reducer'>Reducer</Link><br />

      <userContext.Provider value={user}>
        <Profile age={4} skill={["HTML", "CSS", "JS"]} />
      </userContext.Provider>
      <Parent/>
    </div>
  )
}

export default Home
