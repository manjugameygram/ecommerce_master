import React, { Component } from 'react';
import Link from 'next/link';

class MainMenu extends Component {

    render() {
        return (
            <>
                <div className="menu-header">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item megamenu">
                                <Link href="#">
                                    <a className="nav-link">
                                        All GameyGram
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item megamenu">
                                <Link href="#">
                                    <a className="nav-link">
                                        GameyShop
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item p-relative">
                                <Link href="#">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                        Kid's GameyGram <i className="fas fa-chevron-down"></i>
                                    </a>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="/about">
                                            <a className="nav-link">Boy's</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/sizing-guide">
                                            <a className="nav-link">Girl's</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/gallery">
                                            <a className="nav-link">Kid's Educational</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/gallery">
                                            <a className="nav-link">Kid's Eco Friendly</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item megamenu">
                                <Link href="#">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>2D Gameygram</a>
                                </Link>
                            </li>

                            <li className="nav-item megamenu">
                                <Link href="#">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>3D Gameygram</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default MainMenu;