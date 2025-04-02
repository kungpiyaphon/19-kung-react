import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          Home - User Sector
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
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <table className="border">
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Lastname</th>
              <th className="border">Position</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.position}</td>
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

export default User;
