import React from 'react';

import Logo from '../../assets/img/Frame.svg';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <div className="nav-btns">
                            <li>
                                <button className="login-btn">Log In</button>
                            </li>
                            <li>
                                <button className="signup-btn">Sign Up</button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;