import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import Header from './Header';
import Loading from './common/Loading'
import FadeIn from './common/FadeIn'
import { getPage } from '../services/pageService';
import { getImage } from '../services/mediaService';
import { generateMeta } from '../services/metaService';

class Page extends Component {
    state = {
        imgUrl: null,
        isLoaded: false,
        page: {},
        hasImage: false
    }

    async componentDidMount() {

        const { data: page } = await getPage(`${this.props.location.pathname === '/' ? '/home' : this.props.location.pathname}`);
        this.setState({ page: page[0], isLoaded: true });

        const { featured_media } = page[0]
        if (featured_media > 0) {
            const imgUrl = await getImage(featured_media, "full");
            this.setState({ imgUrl, hasImage: true })
        }
    }

    render() {

        const { title, content, acf, yoast_meta } = this.state.page
        const { imgUrl, isLoaded } = this.state
        if (isLoaded) {
            return (
                <div className="page">
                    <Helmet>
                        {generateMeta(yoast_meta)}
                    </Helmet>
                    <FadeIn />
                    <Header imgUrl={imgUrl} slogan={acf.slogan ? acf.slogan : ''} />
                    <div className="page__content">
                        <h1>{title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
                    </div>
                </div>
            )

        }
        return <Loading />;
    }
}

export default Page;