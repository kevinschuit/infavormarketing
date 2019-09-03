import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`wordpress/wp-json/wp/v2/BlogOverview/${this.props.match.params.id}`)
            .then(res => this.setState({
                post: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const { post, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <Link to="/">Go Back</Link>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </Fragment>
            );

        }
        return (
            <span> Loading... </span>
        );
    }
}

export default BlogPost;