import React, {useState} from 'react';

import { Router } from '@reach/router'
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';

import Header from './header';
import Container from './page-container';
import Footer from './footer';


/*

const Layout = ({component:PageComponent}) => {


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
        <Router>
            <Header path="*" toggleMenu={toggleMenu} menuVisible={menuVisible} />
        </Router>
        <Router>
            <PageComponent path="*" />
        </Router>
        <Footer />
        </>
    )
};

*/

export const Layout = ({children}) => {


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <IdentityContextProvider url="https://lmpaysite.netlify.app">
        <Router>
            <Header path="*" toggleMenu={toggleMenu} menuVisible={menuVisible} />
        </Router>
        <main>{children}</main>
        <Footer />
        </IdentityContextProvider>
    )
};


export default Layout;
