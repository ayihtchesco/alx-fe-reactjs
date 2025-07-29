import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [form, setForm] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await searchUsers(form);
      setUsers(results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">
        GitHub Advanced User Search
      </h2>
      <form onSubmit={handleSearch} className="grid gap-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Minimum Repositories"
          value={form.minRepos}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && (
        <p className="mt-4 text-center text-red-600">
          Looks like we cant find users
        </p>
      )}

      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Results:</h3>
          <ul className="grid gap-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 border rounded flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-bold">{user.login}</h4>
                  <a
                    href={user.html_url}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
