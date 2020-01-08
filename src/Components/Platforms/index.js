import React from 'react';
import cpp from './Icons/icons8-c++-100.png';
import python from './Icons/icons8-python-100.png';
import react from './Icons/icons8-react-native-100.png';
import nodejs from './Icons/icons8-nodejs-100.png';
import './index.css';

const styles = {
    height: '90vh',
    weight: '1000px !important'
}

class Frameworks extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="section-dark frameworks" style={styles}>
                <div className="frameworks-title">
                    <p>Platforms:</p>
                </div>
                <div class="sosial-links">
                    <a href="#cpp"><img src={cpp} alt="cpp" /></a>
                    <a href="#python"><img src={python} alt="python" /></a>
                    <a href="#react"><img src={react} alt="react" /></a>
                    <a href="#nodejs"><img src={nodejs} alt="nodejs" /></a>
                </div>
            </div>
        );
    };
};

export default Frameworks;