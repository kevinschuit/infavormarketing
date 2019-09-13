import React, { Component } from 'react';

class FadeIn extends Component {
    componentDidMount() {
        setTimeout(function () {
            if (document.querySelector('.fade-in')) {
                document.querySelector('.fade-in').remove()
            }
        }, 2000);
        console.log(this.refs.fadeIn);
    }

    render() {
        return (
            <div className="fade-in"></div>
        );
    }
}

export default FadeIn;