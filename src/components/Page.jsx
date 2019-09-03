import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class Page extends Component {
    state = {
        imgUrl: null,
        isLoaded: false,
        page: {},
        hasImage: false
    }

    async componentDidMount() {
        await axios.get(`wordpress/wp-json/wp/v2/pages?slug=${this.props.location.pathname === '/' ? '/home' : this.props.location.pathname}`).then(res => {
            console.log(res)
            this.setState({ page: res.data[0], isLoaded: true })
        })
        const { featured_media } = this.state.page
        if (featured_media > 0) {
            axios.get(`wordpress/wp-json/wp/v2/media/${featured_media}`).then(res => {
                console.log(res)
                this.setState({
                    imgUrl: res.data.media_details.sizes.full.source_url,
                    hasImage: true
                })
            }).catch(err => console.log(err))
        }
    }

    render() {
        const { title, content, acf } = this.state.page
        const { imgUrl, isLoaded } = this.state
        if (isLoaded) {
            return (
                <div className="page">
                    {imgUrl ? <Header imgUrl={imgUrl} slogan={acf.slogan ? acf.slogan : ''} /> : ''}
                    <div className="page__content">
                        <h1>{title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
                    </div>
                </div>
            )

        }
        return null;
    }
}

export default Page;