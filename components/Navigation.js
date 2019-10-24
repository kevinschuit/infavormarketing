import React, { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';

import logo from '../static/images/logo.png';

class Navigation extends Component {
    state = {
        scrollTop: 0,
        navigationActive: false,
        pagesLoaded: false,
        menu: [],
    }
    async componentDidMount() {
        const menu = await axios.get('https://www.infavormarketing.nl/wordpress/wp-json/menus/v1/menus/menu');
        this.setState({ menu: menu.data.items });
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

    getSlug = (string) => {
        var parts = string.split("/");
        return parts[parts.length - 1];
    };

    render() {
        const { menu } = this.state;
        return (
            <div className="navigation-wrapper">
                <input type="checkbox" id="navigation-checkbox"></input>
                <label className="navigation-trigger" htmlFor="navigation-checkbox" onClick={this.handleScrollPosition.bind(this)}>
                    {/* <i className="fas fa-bars"></i> */}
                    <div className="hamburger">
                        <div className="hamburger__bar"></div>
                    </div>

                </label>
                <Link href="/"><a><img src={logo} alt="Logo" className="navigation-logo" /></a></Link>
                <div className="navigation">
                    {this.state.menu ? menu.map(item => (
                        <Link
                            as={`/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                            href={`/[slug]`}
                            key={item.ID}
                        >
                            <a className="navigation__link" onClick={() => { document.getElementById('navigation-checkbox').checked = false; if (this.state.navigationActive) this.handleScrollPosition(); }}>{item.title}</a>
                        </Link>
                    )) : <p>Loading..</p>}
                </div>
            </div >
        );
    }
}

export default Navigation;