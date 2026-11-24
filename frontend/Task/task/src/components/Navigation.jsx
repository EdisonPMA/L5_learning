import React from "react";
import {Link} from 'react-router-dom'
function Navigation(){
    return(
<>
<navbar>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/user">User</Link>
</navbar>
</>
    )
}
 export default Navigation