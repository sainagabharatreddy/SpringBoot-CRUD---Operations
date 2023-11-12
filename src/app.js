import Navbar from "./navbar/navbar";
import "./app.css";
import Home from "./home";
import {  Route, Routes } from "react-router-dom";
import Adduser from "./pages/addUser";
import Delete from "./pages/delete";
import Edituser from "./pages/editUser";

const App = () => {
  return (
    
    <div className="crud">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addUser" element={<Adduser/>}></Route>
        <Route path="/deleteUser" element={<Delete/>}></Route>
        <Route path="/EditUser/:id" element={<Edituser/>}></Route>
        

      </Routes>
    </div>
  );
};

export default App;
