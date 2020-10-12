import React from 'react';
import { Router } from '@reach/router';
import logo_text from '../css/logo_text.png';

const Home = () => {
    return (
      <>
          <div className="text-center px-3 lg:px-0">
            <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
              <img className="h-32 w-32 mr-3 mb-2 inline-block fill-current text-orange-700"  id="home_logo" src={logo_text} alt="ParserBase logo" />
                {/* <svg className="h-6 w-6 inline-block fill-current text-orange-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"></path>
                </svg> */}
            </h1>
          </div>
      
        
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="flex flex-col w-full md:w-1/2 justify-center items-start self-start text-center md:text-left">
          <h1 className="my-4 text-3xl font-bold leading-tight">About Parserbase</h1>
          <p className="leading-normal text-lg mb-2">Parserbase provides an easy to parse flat text into hierarchical structures. Have plain text with paragraphs, bullets and nested bullets ? Parserbase provides an easy way to integrate parsing capablities into your website or backend service </p>
          <h2 className="my-4 text-xl font-bold leading-tight">Readymade Parsers</h2>
          <p className="leading-normal text-lg mb-2">Parserbase provides an easy to parse flat text into hierarchical structures. Have plain text with paragraphs, bullets and nested bullets ? Parserbase provides an easy way to integrate parsing capablities into your website or backend service </p>
          <h2 className="my-4 text-xl font-bold leading-tight">SDK / Serverless driven</h2>
          <p className="leading-normal text-lg mb-2">Parserbase provides a simple serverless API, so parsing becomes as simple as calling a function. You don't have to deal with Lexers, Parsers and Tokens </p>
        
        </div>

        
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start self-start text-center md:text-left">
          <h1 className="my-4 text-3xl font-bold leading-tight">When should you use it?</h1>
          <p className="leading-normal text-xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Subscribe</button>
        </div>

        </div>
        
      
    </>

    );
}


export default Home; 