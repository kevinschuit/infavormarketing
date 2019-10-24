import { Parallax } from 'react-parallax';
/* visit https://www.npmjs.com/package/react-parallax for more configurations */
/*  */

export default function Header({ data }) {
    const imgUrl = data.featuredMedia.link;
    const slogan = data.data.acf.slogan;

    return (
        < div className="header" >
            <Parallax className="header__parallax" bgImage={imgUrl ? imgUrl : 'fallbackImg'} strength={500}>
                <div style={{ height: 500 }} >
                    <div className="header__slogan"><h3>{slogan}</h3></div>
                </div>
            </Parallax>
        </div >
    )
}
