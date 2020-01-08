import React from 'react';
import './index.css';


class Portfolio extends React.Component {
    render() {
        return(
            <div id={this.props.id} className="portfolio">
                <div className="col">
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay"></div>
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Chrome Extension</h4>
                            <span className="chev">&rsaquo; Chrome extension made to view confluence, open tabs and copy related template to clipboard</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Analyzer</h4>
                            <span className="chev">&rsaquo; A program which filters log files into whatever stdin get</span>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Customer Management System</h4>
                            <span className="chev">&rsaquo; Customer management system using Python OOP and MySQL</span>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    };
};

export default Portfolio;