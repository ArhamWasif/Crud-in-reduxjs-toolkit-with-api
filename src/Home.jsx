import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div>
      <h2>Crud App with JSON Server</h2>
      <Link to="/create">Create +</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th> {/* Added header for actions column */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
