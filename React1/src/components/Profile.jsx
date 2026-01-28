import {useContext} from 'react'
import { userContext } from '../App'

// const Profile = (props) => {
//   return (
//     <div>
//         <h3> I am {props.name}</h3>
//     </div>
//   )
// }

const Profile = ({age,skill}) => {
  const name=useContext(userContext)
  return (
    <div>
        <h3> I am {name} {age} year old</h3>
        <ul>
            {skill.map((skill)=>{
                return <li>{skill}</li>
            })}
        </ul>
    </div>
  )
}

export default Profile