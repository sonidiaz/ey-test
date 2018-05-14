import React, { Component } from 'react';
import TopBar from "./TopBar";
import Sociales from './Sociales';
import PrimaryMenu from './Navegacion';

const LogoSite = './images/logo.png';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <TopBar botones={"hola soy un boton"}/>
                <div className="brand-site container is-fluid-topbar">
                    <div className="cont-logo">
                        <img src={LogoSite} alt=""/>
                    </div>
                    <Sociales />
                </div>
                <PrimaryMenu />
            </div>
        );
    }
}

export default Header;