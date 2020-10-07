import React from 'react';

import './browser-mockup.css';

const BrowserMockup = () => {
    return  (
      <div className="flex items-center w-full mx-auto content-end">
        <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"></div>
      </div>
    );
}

export default BrowserMockup; 