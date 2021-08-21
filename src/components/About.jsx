/*eslint-disable*/
import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function About() {
    return (
        <>
            <Header />
            <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src="https://www.icegif.com/wp-content/uploads/hola-icegif-23.gif" alt="hero"/>
                <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Wildfires Project</h1>
                <p class="mb-8 leading-relaxed">This a project based on the Wildfires.Wildfires have become common in this recent Years.This website allows the User to Track the Current Wildfires around the World.</p>
                </div>
            </div>
            </section>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://avatars.githubusercontent.com/u/79754920?v=4" />
                    </div>
                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Abhilash Kumar Behera</h2>
                    <p class="leading-relaxed text-base">Student of ITER, SOA, Bhubaneswar.</p>
                    <a href="https://github.com/itsakb" target="_blank">
                    <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Abhilash's Github</button>
                    </a>
                    <a href="https://www.linkedin.com/in/abhilash-kumar-behera-331b58200/" target="_blank">
                    <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Abhilash's Linkedin</button>
                    </a>
                </div>
                <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQFiPUjSTr4aww/profile-displayphoto-shrink_100_100/0/1612711076368?e=1632355200&v=beta&t=GteKJSGjwLrEfStTXwEI_77BKK6E-tJsXmMFp2rlDAw" />
                    </div>
                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Ipsita Behera</h2>
                    <p class="leading-relaxed text-base">Student of ITER, SOA, Bhubaneswar.</p>
                    <a href="https://github.com/Ipsita2808" target="_blank">
                    <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Ipsita's Github</button>
                    </a>
                    <a href="https://www.linkedin.com/in/ipsita-behera-a1b462206/" target="_blank">
                    <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Ipsita's Linkedin</button>
                    </a>
                </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}
