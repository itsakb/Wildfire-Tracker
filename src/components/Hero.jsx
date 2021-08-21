/*eslint-disable*/
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">WildFires
                <br className="hidden lg:inline-block" />Destroyed.Endangered.Burned
            </h1>
            <p className="mb-8 leading-relaxed">Climate change is increasing extreme fire conditions, and wildfires in turn are releasing carbon that can heat the planet But climate change has increased the probability of extreme hot and dry conditions that give rise to bigger, faster moving and more intense wildfires.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/map">Live Tracker</Link></button>
                <a href="https://en.wikipedia.org/wiki/Wildfire" target="_blank">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn more</button>
                </a>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded"  src="https://i.pinimg.com/originals/91/db/c6/91dbc6a131748e9c033fdc6b81418701.gif" alt="hero" height="2000px" width="2000px"/>
            </div>
        </div>
        </section>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-10">
            <img class="object-cover object-center rounded" alt="hero" src="https://media0.giphy.com/media/MbFfMeic2KPJXT73nO/giphy.gif" alt="fire2" height="2000px" width="3000px"/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ask The Law Maker
                <br class="hidden lg:inline-block" />Question your law maker against Wildfires.
            </h1>
            <p class="mb-8 leading-relaxed">See the latest trends and takes action,get aquainted with News.</p>
            <div class="flex justify-center">
                <a href="https://www.theguardian.com/environment/climate-change" target="_blank">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Latest News</button>
                </a>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}
