import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className=" md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="md:text-lg mb-4 font-semibold">
        Oops! It looks like you're lost in cyberspace.
      </p>
      <p className="md:text-2xl mb-8 font-semibold text-center">
      We're sorry, but the page you're trying to access doesn't seem to exist.
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
