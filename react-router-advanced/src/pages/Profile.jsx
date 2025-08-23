import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Profile Page</h1>
      <nav className="space-x-4 mt-4">
        <Link to="details" className="text-blue-500">
          Details
        </Link>
        <Link to="settings" className="text-blue-500">
          Settings
        </Link>
      </nav>
      <div className="mt-6 p-4 border rounded-lg">
        <Outlet /> {/* Nested routes render here */}
      </div>
    </div>
  );
};

export default Profile;
