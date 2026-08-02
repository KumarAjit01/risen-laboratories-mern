import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-700">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-5">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-700 hover:bg-green-600 text-white px-8 py-4 rounded-full"
        >
          Back To Home
        </Link>

      </div>

    </section>
  );
};

export default NotFound;