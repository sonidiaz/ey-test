import React, { Component } from 'react';
import Header from "./src/components/Header";
import Titulares from './src/components/Titulos';
import Hero from './src/components/Hero';
import PostsCentro from './src/components/PostsCentro';
import PostTramites from './src/components/PostTramites';
import Footer from './src/components/Footer';


class App extends Component {
    render() {
        return (
                <div className="wrapper">
                    <Header />
                    <Hero />
                    <Titulares>
                        <hgroup>
                            <h2>El Centro</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </h3>
                        </hgroup>
                    </Titulares>
                    <PostsCentro />
                    <Titulares>
                        <hgroup>
                            <h2>Trámites e información</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </h3>
                        </hgroup>
                    </Titulares>
                    <PostTramites />
                    <Footer />
                </div>
        );
    }
}

export default App;