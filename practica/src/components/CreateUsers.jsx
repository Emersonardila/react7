import { useState } from "react";
import axios from "axios"

export default function CreateUsers() {

  const [message, setMessage] = useState("");

  function handleCreateUser() {
    const newUser = {
      name: "Juan Carlos",
      job: "Developer",
    };

    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        setMessage("User created successfully!");
      })
      .catch((error) => {
        setMessage("Failed to create user.");
        console.error(error);
      });
  }
  return (
    <div>
    <h1>Create User</h1>
    <button onClick={handleCreateUser}>Create User</button>
    <p>{message}</p>
    </div>
  )
}
