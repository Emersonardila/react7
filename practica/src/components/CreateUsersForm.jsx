import { useState } from "react";
import axios from "axios"

export default function CreateUsersForm() {
  const [message, setMessage] = useState("");

  function handleReset() {
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      job: e.target.job.value,
    };
    if (!user.name || !user.job) {
      setMessage("Please fill in all the fields.");
      return;
    }

    axios
      .post("https://reqres.in/api/users", user)
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
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <br />
        <label>
          Job:
          <input type='text' name='job' />
        </label>
        <br />

        <input type='submit' value='Create User' />
        <input type='reset' value='Reset' onClick={handleReset} />
      </form>

      <p>{message}</p>
    </div>
  )
}
