import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';


export default class extends Component {

    static async getInitialProps() {
        const response = await axios.get('http://infavormarketing.nl/wordpress/wp-json/wp/v2/posts')
        return { posts: response.data }
    }
    render() {
        return (
            <Fragment>
                <Navigation />
                <h1>POSTS!</h1>
                <ul>
                    {this.props.posts.map(post => {
                        return (
                            <li key={post.id}>{post.title.rendered}</li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}   