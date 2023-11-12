import React, { useState, useEffect } from "react";
import axios from "axios";
import './app.css'
import { Link } from "react-router-dom";


const Home = () => {
  
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getUsers");
      setUserData(response.data || []); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
       
        <table className="table" border={1}>
          <thead>
            <tr>
              <th scope="col">User id </th>
              <th scope="col">Name</th>
              <th scope="col">User name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <button  type="button" className="btn1 ">View </button>
                <Link to={`/EditUser/${user.id}`}  type="button" className="btn2 ">Edit</Link>
                <button  type="button" className="btn3 " >Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
