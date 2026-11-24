import React from "react";
function About(){
    function hanleClick(event){
        alert(event.type)
        alert(event.target)
    }
    return(
<>
<div onClick={()=>{alert("parent clicked")}}>
    <button onClick={()=>{alert("clickd buttn ")}}>click me </button>
</div>
</>
        
    )
}
export default About;