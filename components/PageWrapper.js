import Meta from './common/Meta';

export default function PageWrapper(props) {
    return (
        <div className="page__content">
            <Meta data={props.data.yoast_meta ? props.data.yoast_meta : props.data} />
            <h1>{props.data.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.data.content.rendered }} />
        </div>
    )
}
