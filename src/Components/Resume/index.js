import React from 'react';
import './index.css';


const styles = {
    height: '110vh',
    weight: '1000px !important'
}

class Resume extends React.Component {
    render() {
        return(
            <div style={styles} className="resume" id={this.props.id}>
                <span className="my">my</span><span className="resume-title">Resume</span>
                <div className="lis">
                    <br />
                    <div className="second-title">
                        General:
                    </div>
                <ul className="general">
                    <li>
                        26 years old, on my <b>second year</b> in H.I.T, studying <b>B.Sc at Computer</b> Science, 
                        looking for an opportunity to integrate with the Israeli High-Tech industry.
                        <br />
                        I am highly experienced in stressful situations, have multi-tasking abilities
                        with great interpersonal and analytic skills.
                        <br />
                        I am highly motivated and diligent, initiative and responsible as well as keen
                        to begin my next professional stage.
                    </li>
                </ul>
                    <div className="second-title">
                        Work Expirience:
                    </div>
                    <br/>
                    <div className="work">
                        
                                <i>August 2019 - Present - </i>
                                    Part-Time position
                    </div>
                    <ul className="general">
                        <li>
                            I have built a project by myself that helps to resolve problems faster and better by the NOC side.
                        </li>
                        <li>
                            During this job, I used to work and specialize in JavaScript, HTML and Python.
                        </li>
                        <li>
                            The position required paying attention to very small details and excellent analytic skills.
                        </li>
                    </ul>
                    <div className="work">
                        <i>March 2015 - July 2017 - </i>
                            Israel Defense Force (IDF), Lieutenant, Team Leader, Israel's Border Police
                    </div>
                    <ul className="general">
                        <li>
                            Team leader of 20 soliders at a special IDF unit.
                        </li>
                        <li>
                            The position required assertiveness, determination and dealing with tight
                            schedules and stressful situations.
                        </li>
                        <li>
                            Responsible for the team peronal as well as professional needs and wellbeing.
                        </li>
                        <li>
                            <b>Task driven, with a long-term vision and motivation.</b>
                        </li>
                    </ul>
                    <div className="second-title">
                        Education:
                    </div>
                    <br/>
                    <div className="work">
                        <i>2018 - Today - </i>
                        <b>B.Sc. Computer Science, Holon Institue of Technology</b>
                    </div>
                    <ul className="general">
                        <li>
                            Currently GPA of 85.
                        </li>
                    </ul>
                    <div className="second-title">
                        Skills:
                    </div>
                    <ul className="general">
                        <li>
                            C, Python, CSS, HTML, JavaScript, ReactJS, C++, MySQL, Git, Windows, Mac OS, Linux.
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default Resume;