import React, { Component } from 'react';
const imgPost = './images/img-post.jpg';
const Post = () =>  {
   
        return (
            <div className="column post">
                <div className="cont-img-posts">
                    <img src={imgPost} alt=""/>
                </div>
                <div className="columns post-textos">
                    <div className="column is-mobile is-9">
                        <div className="cont-titulos">
                            <h4>Lorem  ipsum</h4>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </div>
                    </div>
                    <div className="column is-3">
                        <a href="#" className="arrow-btn-post"></a>
                    </div>
                </div>
            </div>
        );
 
}

export default Post;