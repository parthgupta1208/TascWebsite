import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";


export default function NotFound() {
  return (
    <div className="text-white bg-black">
      
      <Header />

      <div className="flex flex-col justify-center mx-auto mt-8 mb-16 text-center max-w-2x1">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          404 – Unavailable
        </h1>
        <Link
          className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
          to="/"
        >
          Return Home
        </Link>
      </div>
      <div className="mt-96">
        <br></br>
        <div className="mt-52">
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
}
