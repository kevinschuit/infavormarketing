import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import WPAPI from 'wpapi';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Page = props => (
    <Layout data={props}>
        <PageWrapper data={props.data} />
    </Layout>
);

Page.getInitialProps = async function (context) {
    let { slug } = context.query;
    const data = await wp.pages()
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

export default Page;