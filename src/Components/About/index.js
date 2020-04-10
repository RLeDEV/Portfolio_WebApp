import React from 'react';
import profileImg from './profileImg.png';
import '../About/index.css';

// const styles = {
//     backgroundImage: `url(${background})`,
// }

class About extends React.Component {
    render() {
        return(
            <header className="about-me-header">
                <div className="section-content about" id={this.props.id}>
                    <div className="profileImg">
                        <img src={profileImg} alt="profileImg" id="profileImgPic"/>
                        <div className="details">
                            <div className="det"><div className="detail">Age:</div><div className="detail-desc">26</div></div>
                            <div className="det"><div className="detail">Field Of Study:</div><div className="detail-desc">Computer Science</div></div>
                            <div className="det"><div className="detail">Institue:</div><div className="detail-desc">Holon Institue Of Technology</div></div>
                        </div>
                    </div>
                    <div className="about-me-content">
                    <span className="aboutme-title">about me</span><hr />
                    <div className="study"><p>I'm a Full Stack Developer from Holon, Israel, B.Sc Student, who loves to transofrm ideas into reality using code.</p></div>
                    <p className="about-text">
                        I enjoy taking complex problems and turning them into simple and beautify interface designs.
                        <br />
                        I also like the logic and the structure of coding and always strive to write elegant and efficient code,
                        whether it will be JavaScript, CSS, HTML, C++, C, Java, ReactJS or NodeJS.
                    </p>
                    </div>
                </div>
            </header>
        );
    };
};

export default About;