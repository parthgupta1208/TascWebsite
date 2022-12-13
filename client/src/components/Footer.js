import { Link } from 'react-router-dom';
import { GiTechnoHeart } from 'react-icons/gi';
export default function Footer() {
  return (
    <footer className="text-white body-font mt-10">
      <div className="container px-5 pb-8 mx-auto flex items-center  justify-between sm:flex-row flex-col">
        <div className='flex' >
          <Link className="flex title-font font-medium items-center md:justify-start justify-center" to="/">
            <span className="ml-3 text-xl">

              <img width={140} src="logoTasc.png" alt="" />
            </span>
          </Link>
          <p className="text-sm md:text-xl items-center text-gray-200 ml-4 pl-4 border-l-2 border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 TASC
          </p>
        </div>

        <a href='https://instagram.com/parthgupta1208?igshid=MWM2YjBjM2Q='>
          Made with <GiTechnoHeart className='inline text-2xl text-red-600 animate-pulse '/>  
        </a>



        <div>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 flex gap-2" target='_blank' href="https://instagram.com/tasc_nmamit">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>Instagram
            </a>

          </span>
        </div>
      </div>
    </footer>
  );
}
