import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    console.log("Form submitted:", { username, email, password });
    // You can later send this to API
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username} // ✅ controlled input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email} // ✅ controlled input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password} // ✅ controlled input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
