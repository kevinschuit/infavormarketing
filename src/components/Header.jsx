import React from 'react';
import { Parallax } from 'react-parallax';
import fallbackImg from '../images/fallback-header-img.jpg';

/* visit https://www.npmjs.com/package/react-parallax for more configurations */
/*  */
const Header = ({ imgUrl, slogan }) => (
    < div className="header" >
        <Parallax className="header__parallax" bgImage={imgUrl ? imgUrl : fallbackImg} strength={500}>
            <div style={{ height: 500 }}>
                <div className="header__slogan"><h3>{slogan}</h3></div>
            </div>
        </Parallax>
    </div >
);
export default Header;