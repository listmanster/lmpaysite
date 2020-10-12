import React from 'react';
import {Link, navigate} from 'gatsby';


//import PricingTrial from './pricing-trial';
//import PricingPro from './pricing-pro';
//import PricingCustom from './pricing-custom';

const Pricing = ({location}) => {
    return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
          Pricing
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          
          <PricingHolder name="trial"
            title="Trial"
            location={location}
            listDetails={
              [
                "1 parser",
                "1 key",
                "No Expiry",
                "Rate Limited transactions"
              ]
            }
            listFooter={<>$0 <span className="text-base">per year</span></>}
            buttonTitle="Sign Up"
            onClickPricing={()=> console.log("clicking trial signup")}
          />

        <PricingHolder name="pro"
            title="Pro"
            location={location}
            listDetails={
              [
                "Unlimited parsers",
                "Unlimited keys",
                "No Expiry",
                "Unlimited transactions"
              ]
            }
            listFooter={<>$59 <span className="text-base">per year</span></>}
            buttonTitle="Upgrade"
            onClickPricing={()=> console.log("clicking pro signup")}
          />

        <PricingHolder name="custom"
            title="Custom"
            location={location}
            listDetails={
              [
                "Custom Parser?",
                "Custom Output format?",
                "Custom Input format?"
              ]
            }
            listFooter={<>Call Us</>}
            buttonTitle="Contact Us"
            onClickPricing={()=> console.log("clicking custom signup")}
          />


        </div>
      </div>
    </section>        
    );
}


export const PricingHolder = ({name, title, location, listDetails, listFooter, buttonTitle, onClickPricing}) => {
  return (
    /*   <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"> */
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" >     
      <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
        <div className="p-8 text-3xl font-bold text-center border-b-4">
          {title}
        </div>
        <ul className="w-full text-center text-sm">
          {
            listDetails.map( 
              (item, index) => 
                <li className="border-b py-4" key={`${title.replace(' ', '')}-${index}`}>{item}</li> 
              )
          }
        </ul>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
         {listFooter}
        </div>
        <div className="flex items-center justify-center">
          <button onClick={onClickPricing} className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>        
  );
}



export default Pricing;