import Head from 'next/head';

function Meta(props) {
    const { data } = props;
    return (
        <Head>
            {generateMeta(data)}
        </Head>
    )
}

export default Meta

function generateMeta(data) {
    let metadata = []
    data.forEach((meta, index) => {
        if (meta.name) {
            metadata.push(<meta name={meta.name} content={meta.content} key={`meta-${index}`} />);
        }
        if (meta.property) {
            if (meta.property === 'og:url') {
                meta.content = meta.content.replace("/wordpress", "");
            }
            metadata.push(<meta property={meta.property} content={meta.content} key={`meta-${index}`} />);
            if (meta.property === 'og:title') metadata.push(<title key={`title-${index}`}>{meta.content}</title>);
        }
    })
    return metadata;
}

