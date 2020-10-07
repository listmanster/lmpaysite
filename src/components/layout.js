import React, {useState} from 'react';


import Header from './header';
import Container from './page-container';
import Footer from './footer';




const Layout = ({component:PageComponent}) => {


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        console.log(" Current Value = ", menuVisible, "setting to ", !menuVisible);
        setMenuVisible(!menuVisible);
    }

    return (
        <>
        <Header toggleMenu={toggleMenu} menuVisible={menuVisible} />
        <PageComponent />
        <Footer />
        </>
    )
};

export default Layout;
