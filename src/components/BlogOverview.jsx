import React, { Component } from 'react';
import BlogSummary from './BlogSummary'
import axios from 'axios';

class BlogOverview extends Component {
    state = {
        BlogOverview: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('wordpress/wp-json/wp/v2/BlogOverview')
            .then(res => this.setState({ BlogOverview: res.data, isLoaded: true }))
            .catch(err => console.log(err))
    }

    render() {
        const { BlogOverview, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div>
                    {BlogOverview.map(post => (
                        <BlogSummary key={post.id} post={post} />
                    ))}
                </div>
            );
        }
        return <h3>Loading...</h3>
    }
}

export default BlogOverview;