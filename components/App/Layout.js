import React from 'react';
import Head from 'next/head';
import GoTop from '../Shared/GoTop';
import { ToastContainer, Slide } from 'react-toastify';
import ReactTooltip from 'react-tooltip'

const Layout = ({ children }) => {
    return(
        <>
            <ReactTooltip  />
            
            <Head>
                <title>GameyGram - eCommerce</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>

            { children }

            <ToastContainer transition={Slide} />

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}
export default Layout;