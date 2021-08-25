/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl"><Link to="/"><img className="logo" src="https://www.pinclipart.com/picdir/middle/565-5659650_flame-fire-blog-clip-art-animated-fire-gif.png" alt="logo" />FIREout</Link></span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" ><Link to='/'>Home</Link></a>
            <a class="mr-5 hover:text-gray-900"><Link to='/about'>About</Link></a>
            </nav>
        </div>
        </header>
        </div>
    )
}
