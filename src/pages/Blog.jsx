import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray-800 text-success-600 p-6 rounded-lg text-26 flex items-center justify-center flex-col gap-6">
        This is blog page
        <Link
          to="/"
          className="bg-cyan-600 text-white text-14 px-4 py-1 rounded w-max"
        >
          back to home
        </Link>
      </div>
    </div>
  );
};

export default Blog;
