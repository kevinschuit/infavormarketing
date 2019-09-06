import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getImage } from '../services/mediaService';
import { getUser } from '../services/userService';

class BlogItem extends Component {
    state = {
        imgUrl: undefined,
        author: {},
        isLoaded: false
    }

    async componentDidMount() {
        const { featured_media, author: authorId } = this.props.post

        if (featured_media > 0) {
            const imgUrl = await getImage(featured_media, "full");
            this.setState({ imgUrl })
        }

        const { data: author } = await getUser(authorId);
        this.setState({ author, isLoaded: true, });
    }

    render() {
        const { title, content, id } = this.props.post
        const { imgUrl, author, isLoaded } = this.state
        if (isLoaded) {
            return (
                <div className="blog__summary">
                    <h2>{title.rendered}</h2>
                    {imgUrl ? <img className="blog__image" src={imgUrl} alt={title.rendered} /> : ''}
                    <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
                    <div>Auteur: {author.name}</div>
                    <Link to={`/blog/${id}`}> Lees meer </Link>
                </div>
            )

        }
        return null;
    }
}

export default BlogItem;