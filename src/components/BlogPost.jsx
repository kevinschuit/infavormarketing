import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Header from './Header';
import { getPost } from '../services/blogService';
import { getImage } from '../services/mediaService';
import { generateMeta } from '../services/metaService';

class BlogPost extends Component {
    state = {
        post: {},
        isLoaded: false,
        featured_media: null
    }

    async componentDidMount() {
        const { data: post } = await getPost(this.props.match.params.id);
        this.setState({ post, isLoaded: true });

        const { featured_media } = post
        if (featured_media > 0) {
            const imgUrl = await getImage(featured_media, "full");
            this.setState({ imgUrl })
        }
    }

    render() {
        const { post, isLoaded, imgUrl } = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <Helmet>
                        {generateMeta(post.yoast_meta)}
                    </Helmet>
                    {imgUrl ? <Header imgUrl={imgUrl} slogan={post.acf.slogan ? post.acf.slogan : ''} /> : ''}
                    <Link to="/blog"><div className="button button--back"><i className="fas fa-caret-left"></i></div></Link>
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