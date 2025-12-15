import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, clearUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (!toggle) {
      dispatch(fetchUsers());
      
    } else {
      dispatch(clearUsers());
    }
    setToggle(!toggle); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      <button onClick={handleToggle}>
        {toggle ? "Hide Users" : "Show Users"}
      </button>

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {users.map((u) => (
        <div
          key={u.id}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        >
          <h3>{u.name}</h3>
          <p>{u.email}</p>
          <p>{u.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
