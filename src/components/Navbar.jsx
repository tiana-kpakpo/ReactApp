import React from "react";
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <>
  

    <div className="bg-green-600 border-b border-gray-500">

    <div className="navbar  flex justify-between items-center mx-auto  max-w-screen-xl text-white ">
    <div className="flex flex-col border-r-2">
      <h5 className>Sign In / Join</h5>
      <div className="flex items-center">
        <h5 className>My Account</h5>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

      </div>
    </div>
        <img src={logo} alt=""  className=" h-24 w-32"/>
  
<div className="flex gap-x-6 border-l-2 ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-slate-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-slate-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  hover:text-slate-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-slate-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

</div>

    </div>
    </div>
    <div className="bg-green-600">

    <div className="navbar  flex justify-between items-center mx-auto  max-w-screen-xl text-white">
      {/* <div>
        <img src={logo} alt=""  className="h-20 w-15"/>
      
        </div> */}
      <ul className="menu menu-vertical lg:menu-horizontal">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">About </a>
          
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
  
<div className="flex gap-x-6 ">



</div>

    </div>
    </div>
    </>

  );
}
