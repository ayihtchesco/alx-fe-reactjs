import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <nav className="space-x-4 mt-4">
        <Link to="/about" className="text-blue-500">
          About
        </Link>
        <Link to="/profile/details" className="text-blue-500">
          Profile
        </Link>
        <Link to="/blog/123" className="text-blue-500">
          Blog Post 123
        </Link>
      </nav>
    </div>
  );
};

export default Home;
