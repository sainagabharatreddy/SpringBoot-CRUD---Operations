import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  
    const navigate = useNavigate();


  const [user, setUser] = useState({
    name: '',
    username: '',
    email: ''
  });

  const { name, username, email } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users', user);
      console.log(response.data);

      navigate('/')


    } catch (error) {
      console.error("Error submitting user:", error);
    }
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Adduser;
