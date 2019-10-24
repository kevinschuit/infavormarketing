import WPAPI from 'wpapi';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = props => (
    <Layout data={props}>
        <PageWrapper data={props.data} />
    </Layout>
);

Index.getInitialProps = async function () {
    const data = await wp.pages()
        .slug('home')
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

export default Index;