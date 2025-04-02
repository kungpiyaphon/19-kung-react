import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Admin = () => {
  //ดึงข้อมูล
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //เพิ่มข้อมูล
  const [newUsers, setNewUsers] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
        setError("Filed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const addUsers = async () => {
    try {
      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        newUsers
      );
      setUsers([...users, response.data]);
      setNewUsers({ name: "", lastname: "", position: "" });
    } catch (error) {
      console.log("Error adding user:", error);
    }
  };

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const navigate = useNavigate();

  const navigateUser = () => {
    navigate("/user");
  };
  const navigateAdmin = () => {
    navigate("/admin");
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Generation Thailand <br />
          Home - Admin Sector
        </h1>
        <button
          onClick={navigateUser}
          className="m-5 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
        >
          User Home
        </button>
        <button
          onClick={navigateAdmin}
          className="m-5 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
        >
          Admin Home
        </button>
      </div>
      <h2>Create User Here</h2>

      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Name"
          value={newUsers.name}
          onChange={(e) => setNewUsers({ ...newUsers, name: e.target.value })}
          className="border"
        />
        <input
          type="text"
          placeholder="Lastname"
          value={newUsers.lastname}
          onChange={(e) =>
            setNewUsers({ ...newUsers, lastname: e.target.value })
          }
          className="border"
        />
        <input
          type="text"
          placeholder="Position"
          value={newUsers.position}
          onChange={(e) =>
            setNewUsers({ ...newUsers, position: e.target.value })
          }
          className="border"
        />
        <button onClick={addUsers} className="rounded bg-green-600">
          Save
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <table className="border">
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Lastname</th>
              <th className="border">Position</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.position}</td>
                  <td>
                    <button
                      onClick={() => deleteUsers(user.id)}
                      className="bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
