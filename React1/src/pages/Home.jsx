import React from 'react'
import State from '../components/State'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import Form from '../components/hooks/Form'

const Home = () => {
  return (
    <div>
      <Profile name="Kani" age={4} skill={["HTML","CSS","Js"]} />
      <Form />
      <State />
      <Parent />
    </div>
  )
}

export default Home
