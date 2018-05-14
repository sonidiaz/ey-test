import React, { Component } from 'react';
import Post from './Post';

class PostsCentro extends Component {

    
    render() {
        return (
            <div className="container posts-centros">
                <div className="section">
                    <div className="columns is-tablet">
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        );
    }
}

export default PostsCentro;