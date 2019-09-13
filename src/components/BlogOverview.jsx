import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import BlogSummary from './BlogSummary'
import Header from './Header';
import Loading from './common/Loading';
import FadeIn from './common/FadeIn'
import { getPosts } from '../services/blogService';
import { getImage } from '../services/mediaService';
import { getUser } from '../services/userService';
import { generateMeta } from '../services/metaService';

class BlogOverview extends Component {
    state = {
        blogOverview: [],
        isLoaded: false,
        author: {}
    }

    async componentDidMount() {
        const { data: blogOverview } = await getPosts();
        const { featured_media, author: authorId } = blogOverview[0];

        if (featured_media > 0) {
            const imgUrl = await getImage(featured_media, "full");
            this.setState({ imgUrl })
        }

        const { data: author } = await getUser(authorId);
        this.setState({ blogOverview, author, isLoaded: true, });

        console.log(blogOverview);
    }

    render() {
        const { blogOverview, isLoaded, imgUrl, author } = this.state;
        if (isLoaded) {
            return (
                <div className="blog">
                    <Helmet>
                        {/* {generateMeta(blogOverview.yoast_meta)} 
                            Create blog page to extract yoast seo meta ??
                        */}
                    </Helmet>
                    {blogOverview.map((post, index) => (
                        index === 0 ?
                            <React.Fragment key={post.id}>
                                <FadeIn />
                                <Header imgUrl={imgUrl} slogan={post.title.rendered} />
                                <div className="blog__first-item">
                                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                    <div>Auteur: {author.name}</div>
                                    <Link to={`/blog/${post.id}`}> Lees meer </Link>
                                </div>
                            </React.Fragment>
                            :
                            <BlogSummary key={post.id} post={post} />
                    ))}
                </div>
            );
        }
        return <Loading />
    }
}

export default BlogOverview;