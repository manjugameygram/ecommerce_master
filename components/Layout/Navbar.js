import React, { Component } from 'react';
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import NavMenu from './NavMenu';
import MainMenu from './MainMenu';

class Navbar extends Component {
    render() {
        return (
            <>
                <TopPanel />
                
                <TopHeader />

                <NavMenu />

                {/* <MainMenu /> */}
            </>
        );
    }
}

export default Navbar;
