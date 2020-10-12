import React, {useState} from 'react';

import { Router } from '@reach/router';

import Header from './header';
import Container from './page-container';
import Footer from './footer';




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



export const ContentLayout = ({children}) => {


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
        <Router>
        <Header path="*" toggleMenu={toggleMenu} menuVisible={menuVisible} />
        </Router>
        {children}
        <Footer />
        </>
    )
};


export default Layout;
