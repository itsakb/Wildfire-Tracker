/*eslint-disable*/
import React from 'react'

const getDate=new Date();
const getyear=getDate.getFullYear();

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl"><img className="logo" src="https://www.pinclipart.com/picdir/middle/565-5659650_flame-fire-blog-clip-art-animated-fire-gif.png" alt="logo" />FIREout</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {getyear} Ipsita Behera | Abhilash Kumar Behera
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/ipsita-behera-a1b462206/" target="_blank">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/abhilash-kumar-behera-331b58200/" target="_blank">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </a>
            </span>
        </div>
        </footer>
    )
}
