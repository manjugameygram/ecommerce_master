import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import CartContent from '../components/Cart/CartContent';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Breadcrumb title="Cart" />

                <CartContent />
                
                <Footer />
            </>
        );
    }
}

export default Index;
