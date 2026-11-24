
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function User() {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            setUsers(response.data);

        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    function handleDelete(user){
        

    }

    return (
        <div>
            <h1>List of Users</h1>
            <Link to="/register">Register</Link>

            <table border='1' >
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th colSpan={2}>action</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={()=> handleEdit(user.id) }>edit</button>
                            </td>
                            <td>
                                <button onClick={()=> handleDelete(user.id) }>delete</button>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;
