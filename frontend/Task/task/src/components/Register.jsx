import { useState } from "react";
import {axios} from 'axios'
function Register(){
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
});
const handleChange= (e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
})

}
const handleSubmit= async (e)=>{
e.preventDefault()
alert(`registration successfully and then  user's name is ${formData.name},user's email is ${formData.email} , and user"s phone is ${formData.phone} `)
 await axios.post("http://localhost:3000/api/user/register")
}

 return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register