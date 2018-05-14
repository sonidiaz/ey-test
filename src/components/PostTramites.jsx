import React, { Component } from 'react';
import Post from './Post';
const imgPost = './images/img-post.jpg';


class PostsTramites extends Component {
    render() {
        return (
            <div className="container posts-tramites">
                <div className="section tramites">
                    <div className="columns is-multiline is-tablet">
                        <div className="column post ">
                            <div className="cont-img-posts" style={{backgroundImage:'url(./images/img-post-tramit.png)'}}>
                                
                            </div>
                            <div className="post-textos">
                                <div className="column is-mobile">
                                    <div className="cont-titulos">
                                        <h4>Lorem  ipsum</h4>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column post ">
                            <div className="cont-img-posts" style={{backgroundImage:'url(./images/img-post-tramit.png)'}}>
                                
                            </div>
                            <div className="post-textos">
                                <div className="column is-mobile">
                                    <div className="cont-titulos">
                                        <h4>Lorem  ipsum</h4>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column post ">
                            <div className="cont-img-posts" style={{backgroundImage:'url(./images/img-post-tramit.png)'}}>
                                
                            </div>
                            <div className="post-textos">
                                <div className="column is-mobile">
                                    <div className="cont-titulos">
                                        <h4>Lorem  ipsum</h4>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column post ">
                            <div className="cont-img-posts" style={{backgroundImage:'url(./images/img-post-tramit.png)'}}>
                                
                            </div>
                            <div className="post-textos">
                                <div className="column is-mobile">
                                    <div className="cont-titulos">
                                        <h4>Lorem  ipsum</h4>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostsTramites;