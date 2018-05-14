import React, { Component } from 'react';

const iconos = {
    search:'./images/icon-search.png',
    biblio:'./images/icon-biblio.png',
    correo:'./images/icon-mail.png',
    personal:'./images/personal.png'
}
class NavTopbar extends Component {
        
        constructor(){
            super();
            this.state = {
                hamburger: false
            }
            this.handleBugerMenu = this.handleBugerMenu.bind(this);
        }

        componentDidMount() {
            
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
        
       
        render(){
            const style = [
                {
                    backgroundImage: 'url(' + iconos.search + ')',
                },
                {
                    backgroundImage: 'url(' + iconos.biblio + ')',
                },
                {
                    backgroundImage: 'url(' + iconos.correo + ')',
                },
                {
                    left: '-24px',
                    backgroundImage: 'url(' + iconos.personal + ')',
                }
            ]
            return (
                <div className="menuTopbar">
                    <nav className="navbar is-transparent">
                        <div className="navbar-brand">
                            <div className={`navbar-burger burger ${this.state.hamburger ? 'is-active' : ''}`} data-target="navbarExampleTransparentExample" onClick={this.handleBugerMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>
                        </div>
                        <div id="navbarExampleTransparentExample" className={`navbar-menu ${this.state.hamburger ? 'is-active' : ''}`}>
                            <div className="navbar-start">
                                <a className="navbar-item icon-ey-search" href="#">
                                    <span className="icon-ey">
                                        <i className="fas-ey fa-ey-info-circle" style={style[0]}></i>
                                        Buscar
                                    </span>
                                </a>
                                <a className="navbar-item" href="#">
                                <span className="icon-ey">
                                    <i className="fas-ey" style={style[1]}></i>
                                    Biblioteca
                                </span>
                                </a>
                                <a className="navbar-item" href="#">
                                <span className="icon-ey">
                                    <i className="fas-ey" style={style[2]}></i>
                                Correo
                                </span>
                                </a>
                                <a className="navbar-item item-area-personal" href="#">
                                <span className="icon-ey">
                                    <i className="fas-ey" style={style[3]}></i>
                                Área a Personal
                                </span>
                                </a>
                            </div>
                            <div className="navbar-end">
                                <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <a className="navbar-link">
                                        Español
                                        </a>
        
                                        <div className="navbar-dropdown">
                                            <a className="navbar-item">
                                                Ingles
                                            </a>
                                            <a className="navbar-item">
                                                Frances
                                            </a>
                                            <a className="navbar-item">
                                                Catalán
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </nav>
                   
                </div>
            );
        }
        

}

export default NavTopbar;