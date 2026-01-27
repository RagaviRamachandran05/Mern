import React from 'react'

// const Profile = (props) => {
//   return (
//     <div>
//         <h3> I am {props.name}</h3>
//     </div>
//   )
// }

const Profile = ({name,age,skill}) => {
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