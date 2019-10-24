import WPAPI from 'wpapi';
import Layout from '../components/Layout';
import PostWrapper from '../components/PostWrapper';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Blog = props => (
    <Layout data={props}>
        {/* <PageWrapper page={props.page} /> */}
        {props.posts.map(post => {
            <PostWrapper data={post} />
        })}
    </Layout>
);

Blog.getInitialProps = async function () {
    const posts = await wp.posts()
    console.log('posts:', posts)
    return { posts };
};

export default Blog;