import React from 'react';
import {Link, navigate} from 'gatsby';

const PricingPro = () => {
    return (
      /*
        <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 gradient shadow hover:shadow-lg z-10">
        <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
          <div className="w-full p-8 text-3xl font-bold text-center">Pro</div>
          <ul className="w-full text-center text-base font-bold">
            <li className="py-4">Unlimited parsers</li>
            <li className="py-4">Unlimited keys</li>
            <li className="py-4">No Expiry</li>
            <li className="py-4">Unlimited transactions</li>
          </ul>
        </div>
        <div className="flex-none mt-auto rounded-b rounded-t-none overflow-hidden p-6">
          <div className="w-full pt-6 text-4xl font-bold text-center">
            $59 <span className="text-base"> per year</span>
          </div>
          <div className="flex items-center justify-center">
            <button className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
              Upgrade
            </button>
          </div>
        </div>
      </div>     */

/*       <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"> */

    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" >      
      <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">
              Pro
          </div>
          <ul className="w-full text-center text-sm">
          <li className="py-4">Unlimited parsers</li>
            <li className="py-4">Unlimited keys</li>
            <li className="py-4">No Expiry</li>
            <li className="py-4">Unlimited transactions</li>
          </ul>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
              $59 <span className="text-base">per year</span>
          </div>
          <div className="flex items-center justify-center">
              <button className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
                  Upgrade
              </button>
          </div>
      </div>
  </div>      
    );
}

export default PricingPro;