import Navigation from './Navigation';
import Header from './Header';
import '../scss/styles.scss'

export default function Layout(props) {

    return (
        <div className="page">
            <Navigation />
            {props.data.featuredMedia ? <Header data={props.data} /> : <div className="header" />}
            {props.children}
        </div>
    )
}