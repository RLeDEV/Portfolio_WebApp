import React from 'react';
import cpp from './Icons/icons8-c++-100.png';
import python from './Icons/icons8-python-100.png';
import react from './Icons/icons8-react-native-100.png';
import mysql from './Icons/icons8-mysql-logo-100.png';
import html from './Icons/icons8-html-5-100.png';
import javascript from './Icons/icons8-javascript-100.png';
import css from './Icons/icons8-css3-100.png';
import java from './Icons/icons8-java-100.png';
import nodejs from './Icons/icons8-nodejs-100.png';
import './index.css';

const styles = {
    height: '50vh',
    // weight: '1000px !important'
}

class Frameworks extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="frameworks" style={styles}>
                <div className="frameworks-title">
                    {/* <p>Platforms:</p> */}
                </div>
                <div className="sosial-links">
                    <div className="img">
                        <div className="img-in">
                            <img src={cpp} alt="cpp" />
                            <div className="platform-description">
                                C++
                            </div>
                        </div>
                    </div>
                    {/* <div className="img">
                        <div className="img-in">
                            <img src={html} alt="html" />
                            <div className="platform-description">
                                HTML
                            </div>
                        </div>
                    </div> */}
                    <div className="img">
                        <div className="img-in">
                            <img src={python} alt="python" />
                            <div className="platform-description">
                                Python
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="img-in">
                            <img src={react} alt="react" />
                            <div className="platform-description">
                                React JS
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="img-in">
                            <img src={mysql} alt="mysql" />
                            <div className="platform-description">
                                MySQL
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="img-in">
                            <img src={javascript} alt="javascript" />
                            <div className="platform-description">
                                JavaScript
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="img-in">
                            <img src={css} alt="css" />
                            <div className="platform-description">
                                CSS
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="img-in">
                            <img src={java} alt="java" />
                            <div className="platform-description">
                                Java
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="img-in">
                            <img src={nodejs} alt="nodejs" />
                            <div className="platform-description">
                                NodeJS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Frameworks;