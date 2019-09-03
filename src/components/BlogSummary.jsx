import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BlogItem extends Component {
    state = {
        imgUrl: null,
        author: '',
        isLoaded: false
    }
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media, author } = this.props.post
        if (featured_media > 0) {
            axios.get(`wordpress/wp-json/wp/v2/media/${featured_media}`).then(res => {
                console.log(res)
                this.setState({
                    imgUrl: res.data.media_details.sizes.full.source_url,
                    hasImage: true
                })
            }).catch(err => console.log(err))
        }

        axios.get(`wordpress/wp-json/wp/v2/users/${author}`).then(res => {
            this.setState({
                author: res.data.name,
                isLoaded: true
            })
        }).catch(err => console.log(err))
    }

    render() {
        const { title, content, id } = this.props.post
        const { imgUrl, author, isLoaded } = this.state
        if (isLoaded) {
            return (
                <div>
                    <h2>{title.rendered}</h2>
                    {imgUrl ? <img src={imgUrl} alt={title.rendered} style={{ width: '40vw' }} /> : ''}
                    <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
                    <div>Auteur: {author}</div>
                    <Link to={`/blog/${id}`}> Lees meer </Link>
                </div>
            )

        }
        return null;
    }
}

export default BlogItem;