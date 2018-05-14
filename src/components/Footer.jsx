import React, { Component } from 'react';

const Footer = ()  => {

        return (
            <div className="cont-footer">
                <div className="container">
                   <div className="footer">
                        <div className="cont-item-footer top">
                            <div className="columns">
                                <div className="column is-4">
                                    <ul>
                                        <li>Dirección</li>
                                        <li>Lorem ipsum dolor, 30</li>
                                        <li>35000 Las Palmas de Gran Canaria</li>
                                        <li>España</li>
                                    </ul>
                                </div>
                                <div className="column  is-4">
                                    <ul>
                                        <li>Contacto</li>
                                        <li>E-mail: ipsum@ipsum.es</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cont-item-footer">
                            <nav className="navbar is-transparent ey-footer" role="navigation" aria-label="main navigation">
                            <div id="navbarExampleTransparentExample" className="navbar-menu-ey">
                                <div className="navbar-start">
                                    <a className="navbar-item">
                                    Accesibilidad
                                    </a>
                                    <a className="navbar-item">
                                    Mapa Web 
                                    </a>
                                    <a className="navbar-item">
                                    Tablón de anuncios 
                                    </a>
                                    <a className="navbar-item">
                                    Aviso Legal
                                    </a>
                                    <a className="navbar-item">
                                    Protección de datos
                                    </a>
                                    <a className="navbar-item">
                                    Ayuda
                                    </a>
                                   
                                </div>
                            </div>
                            </nav>
                        </div>
                   </div>
                </div>
            </div>
        );
    
}

export default Footer;