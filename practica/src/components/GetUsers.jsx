import { useEffect, useState } from "react";
import axios from "axios";

export default function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        alert("An error occurred: ", error);
      });
  }, []);
  return (
    <div>
      <h1>User List</h1>
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <p>
              Name: {user.first_name} {user.last_name} | Email: {user.email}
            </p>
            <img src={user.avatar} alt={user.first_name + "'s foto"} />
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}
