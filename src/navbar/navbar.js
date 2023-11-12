import { Link } from "react-router-dom";
import "../app.css"
const navbar=()=>{

    return(
        <>
           <nav className="nav">
             
             <h1>Full Stack Crud Application </h1>
             <Link to={'/addUser'} className="add">Add user</Link>
            
           </nav>
           
        </>
    )

}

export default navbar;