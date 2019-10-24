import Layout from '../../components/Layout';
import PostWrapper from '../../components/PostWrapper';
import WPAPI from 'wpapi';
import Config from '../../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Post = props => (
    <Layout data={props}>
        <PostWrapper data={props.data} />
    </Layout>
);

Post.getInitialProps = async function (context) {
    let { slug } = context.query;
    const data = await wp.posts()
        .slug(slug)
        .embed()
        .then(data => {
            return data[0];
        });
    if (data.featured_media > 0) {
        const id = data.featured_media;
        const featuredMedia = await wp.media().id(id); /*.id(page.featured_image);*/
        return { data, featuredMedia }
    }

    return { data };
};

export default Post;