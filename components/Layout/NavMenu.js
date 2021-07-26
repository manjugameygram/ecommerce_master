import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';

class NavMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true
    };

    handleCart = () => {
        this.setState(prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    handleSearchForm = () => {
        this.setState(prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <div className="navbar-area">
                    <div id="navbar" className="comero-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src={require("../../images/logo/logo.gif")} alt="GameyGram" style={{ width: "50px" }} />
                                        <img src={require("../../images/logo/logopurple.png")} alt="GameyGram" style={{ width: "150px", marginTop: "10px" }} />
                                    </a>
                                </Link>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
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

                                    <div className="others-option">
                                        <div className="option-item">
                                            <i
                                                onClick={this.handleSearchForm}
                                                className="search-btn fas fa-search"
                                                style={{
                                                    display: this.state.searchForm ? 'none' : 'block'
                                                }}
                                            ></i>

                                            <i
                                                onClick={this.handleSearchForm}
                                                className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                            ></i>

                                            <div
                                                className="search-overlay search-popup"
                                                style={{
                                                    display: this.state.searchForm ? 'block' : 'none'
                                                }}
                                            >
                                                <div className='search-box'>
                                                    <form className="search-form">
                                                        <input className="search-input" name="search" placeholder="Search" type="text" />
                                                        <button className="search-button" type="submit">
                                                            <i className="fas fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </div>

                                        <div className="option-item">
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleCart()
                                                    }}
                                                >
                                                    Cart(0) <i className="fas fa-shopping-bag"></i>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(NavMenu)
