import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

class Navigation extends Component {
    state = {
        scrollTop: 0,
        navigationActive: false,
        pagesLoaded: false
    }

    componentDidMount() {
        // We only want this to happen once in the lifecycle
        this.props.pages.reverse()
        this.forceUpdate()
    }

    handleScrollPosition = () => {
        if (!this.state.navigationActive) {
            this.setState({ scrollTop: document.documentElement.scrollTop })
            setTimeout(function () { document.documentElement.style.position = 'fixed'; }, 750)

        } else {
            document.documentElement.style.position = 'initial';
            document.documentElement.scrollTop = this.state.scrollTop;
        }
        this.setState({
            navigationActive: this.state.navigationActive ? false : true
        })
    }

    render() {
        const { pages } = this.props;
        return (
            <div className="navigation-wrapper">
                <input type="checkbox" id="navigation-checkbox"></input>
                <label className="navigation-trigger" htmlFor="navigation-checkbox" onClick={this.handleScrollPosition.bind(this)}>
                    {/* <i className="fas fa-bars"></i> */}
                    <div className="hamburger">
                        <div className="hamburger__bar"></div>
                    </div>

                </label>
                <Link to="/" ><img src={logo} alt="Logo" className="navigation-logo" /></Link>
                <div className="navigation">
                    {pages.map(page => (
                        <Link className="navigation__link" key={page.id} to={`/${page.slug === 'home' ? '' : page.slug}`} onClick={() => { document.getElementById('navigation-checkbox').checked = false; if (this.state.navigationActive) this.handleScrollPosition(); }}>
                            {page.title.rendered}
                        </Link>
                    ))}
                </div>
            </div >
        );
    }
}

export default Navigation;