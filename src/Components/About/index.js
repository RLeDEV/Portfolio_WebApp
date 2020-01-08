import React from 'react';
import background from './background.jpeg';
import '../About/index.css';

const styles = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    weight: '1000px !important'
}

class About extends React.Component {
    render() {
        return(
            <header style={styles} className="about-me-header">
                <div className="section-content about" id={this.props.id}>
                    <span className="aboutme-title">about me</span>
                    <div className="study">I'm a Full Stack Developer from Holon, Israel, B.Sc Student.</div>
                    <p className="about-text">
                        I enjoy taking complex problems and turning them into simple and beautify interface designs.
                        <br />
                        I also like the logic and the structure of coding and always strive to write elegant and efficient code,
                        whether it will be ReactJS, CSS, HTML, C++, C, JavaScript.
                    </p>
                </div>
            </header>
        );
    };
};

export default About;