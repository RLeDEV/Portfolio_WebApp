import React from 'react';
import './index.css';



const styles = {
    background: 'radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%)',
    height: '88vh',
    backgroundSize: 'cover',
    weight: '1000px !important',
    overflow: 'hidden'
}

class Header extends React.Component {
    render(){
        return (
            <header style={styles} className="header">
                <div className="title">
                <div id="stars" />
                <div id="stars2" />
                
                    <h1 className="name">Raz Levy</h1>
                    <hr size="2" className="header-hr"/>
                    <span className="subtitle">FullStack Developer</span>
                    <br />
                    <div className="frameworks-header">ReactJS, HTML, CSS, C, C++, SQL</div>
                </div>
            </header>
        );
    }
}
    
export default Header;