import { useState } from "react";
import PropTypes from 'prop-types';

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add state for error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!title || !description) {
        setErrorMessage("Please fill in both title and description");
        return;
    }

    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        await response.json();
        alert("TODO CREATED");
        setTitle(""); // Clear input fields
        setDescription("");
        setErrorMessage(""); // Clear error message
      } else {
        setErrorMessage("Error creating todo");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title} // Use the state variable to manage the input value
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          id="desc"
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Create Todo</button>
        {errorMessage && <p>{errorMessage}</p>} {/* Display error if it exists */}
      </div>
    </form>
  );
}
