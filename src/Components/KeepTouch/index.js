import React from 'react';
import background from './background.png';
import './index.css';

const styles = {
    backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ),url(${background})`,
    height: '50vh',
    backgroundSize: 'cover',
    weight: '1000px !important',
}

class About extends React.Component {
    render() {
        return(
            <header style={styles} className="keep-touch-header">
                <div className="keep-touch" id={this.props.id}>
                    <div className="get-in-touch">
                        Get In Touch
                    </div>
                    <div className="get-in-touch-text">
                        Have a question, or want to contact me?
                    </div>
                </div>
                <div className="btns">
                    <div className="download-btn">
                        <button type="button" className="btn btn-outline-secondary downloadpdf" onClick={() => window.open('https://www.docdroid.net/file/download/ThMiGb1/razlevy.pdf')}>Download Resume</button>
                    </div>
                    <div className="mail-btn">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => window.open('mailto:bos901@gmail.com')}>Email Me</button>
                    </div>
                </div>
            </header>
        );
    };
};

export default About;