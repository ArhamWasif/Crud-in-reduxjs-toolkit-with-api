import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div>
      <h3>Add New User</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
