const User = ({ name, dept, skills,hobbies }) => {
  return (
    <div class="full">
      <h1 class="a">I am {name} from {dept} Department</h1>
      <h2 class="head">Skils</h2>
      <ol>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ol>
      <h2 class="head">Hobbies</h2>
      <ul>
        {hobbies.map((h)=>(
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
