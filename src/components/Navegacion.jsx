import React, { Component } from 'react';

class PrimaryMenu extends Component {
		constructor(){
				super();
				this.state = {
						hamburger: false
				}
				this.handleBugerMenu = this.handleBugerMenu.bind(this);
		}

		handleBugerMenu() {
			const $contSecundaryMenu = document.getElementById('navbarExampleTransparentExample');
			if(!this.state.hamburger){
					this.setState({
							hamburger: true
					})
			}else{
					this.setState({
							hamburger: false
					})
			}
		}
    render() {
        return (
            <div className="primaryMenu nav-ey">
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
										<a className="navbar-item" href="https://bulma.io">
											<img src="./images/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
										</a>
										<div className={`navbar-burger burger ${this.state.hamburger ? 'is-active' : ''}`} data-target="navbarExampleTransparentExample" onClick={this.handleBugerMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
										<div id="navbarExampleTransparentExample" className={`navbar-menu ${this.state.hamburger ? 'is-active' : ''}`}>
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                             Inicio
                            </a>
                            <a className="navbar-item" href="/documentation/overview/start/">
                            Trámites en línea
                            </a>
                            <a className="navbar-item" href="/documentation/overview/start/">
                            Verificación de documentos
                            </a>
                            <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                            Requisitos técnicos
                            </a>
                            <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                            Contacto
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default PrimaryMenu;