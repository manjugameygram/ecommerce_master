import React, { Component } from 'react';
import Link from 'next/link';

class TopHeader extends Component {

    render() {
        return (
            <>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li><Link href="/faq"><a>Faq's</a></Link></li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopHeader;