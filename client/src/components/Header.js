import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-none 20 w-full md:w-8/12 mx-auto sticky top-0 rounded-3xl z-30 backdrop-blur-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href='/' onClick={e => {
                  let hero = document.getElementById("home");
                  e.preventDefault();  // Stop Page Reloading
                  hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} className="mr-6 hover:text-white" >Home</a>
              </li>
              <li>
                <a href='/' onClick={e => {
                  let hero = document.getElementById("aboutus");
                  e.preventDefault();  // Stop Page Reloading
                  hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} className="mr-6 hover:text-white" >About Us</a>
              </li>
              <li>
                <a href='/' onClick={e => {
                  let hero = document.getElementById("faculty");
                  e.preventDefault();  // Stop Page Reloading
                  hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} className="mr-6 hover:text-white" >Our Faculty</a>
              </li>
              <li>
                <a href='/' onClick={e => {
                  let hero = document.getElementById("team");
                  e.preventDefault();  // Stop Page Reloading
                  hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} className="mr-6 hover:text-white" >Our Team</a>
              </li>
              <li>
                <a href='/' onClick={e => {
                  let hero = document.getElementById("event");
                  e.preventDefault();  // Stop Page Reloading
                  hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} className="mr-6 hover:text-white" >Events</a>
              </li>
              <li>
                <a href='/' onClick={e => {
                  let hero = document.getElementById("contactus");
                  e.preventDefault();  // Stop Page Reloading
                  hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} className="mr-6 hover:text-white" >Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="">
            <img className="h-10 ml-4 w-auto " src="logoTasc.png" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href='/' onClick={e => {
                let hero = document.getElementById("home");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="mr-6 hover:text-white" >Home</a>
            </li>
            <li>
              <a href='/' onClick={e => {
                let hero = document.getElementById("aboutus");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="mr-6 hover:text-white" >About Us</a>
            </li>
            <li>
              <a href='/' onClick={e => {
                let hero = document.getElementById("faculty");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="mr-6 hover:text-white" >Our Faculty</a>
            </li>
            <li>
              <a href='/' onClick={e => {
                let hero = document.getElementById("team");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="mr-6 hover:text-white" >Our Team</a>
            </li>
            <li>
              <a href='/' onClick={e => {
                let hero = document.getElementById("event");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="mr-6 hover:text-white" >Events</a>
            </li>
            <li>
              <a href='/' onClick={e => {
                let hero = document.getElementById("contactus");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="mr-6 hover:text-white" >Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">

        </div>
      </div>
    </>
  );
}

// navbar fix

{/* <Link className="mr-6 hover:text-white" to="/">Home</Link>
          <Link className="mr-6 hover:text-white" to="/">About Us</Link>
          <Link className="mr-6 hover:text-white" to="/">Our Faculty</Link>
          <Link className="mr-6 hover:text-white" to="/">Our Team</Link>
          <Link className="mr-6 hover:text-white" to="/">Events</Link>
          <Link className="mr-6 hover:text-white" to="/">Contact Us</Link> */}