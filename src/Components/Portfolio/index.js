import React from 'react';
import './index.css';


class Portfolio extends React.Component {
    render() {
        return(
            <div id={this.props.id} className="portfolio">
                <div className="col"  onClick={()=> window.open("https://github.com/RLeDEV/Salary_Web_Caculator")}>
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay"></div>
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>EasyCalc(ReactJS & Express)</h4>
                            <span className="chev">&rsaquo; Salary calculator UI for HR.</span>
                        </div>
                    </div>
                </div>
                <div className="col"  onClick={()=> window.open("https://github.com/RLeDEV/Portfolio_WebApp")}>
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay"></div>
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Portfolio WebApp (ReactJS)</h4>
                            <span className="chev">&rsaquo; This website's code which was made with React</span>
                        </div>
                    </div>
                </div>
                <div className="col" onClick={()=> window.open("https://github.com/RLeDEV/Analyzer")}>
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Analyzer (Python)</h4>
                            <span className="chev">&rsaquo; A program which filters log files into whatever stdin get</span>
                            
                        </div>
                    </div>
                </div>
                <div className="col" onClick={()=> window.open("https://github.com/RLeDEV/customersINFO")}>
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Customer Management System (Python)</h4>
                            <span className="chev">&rsaquo; Customer management system using Python OOP and MySQL</span>
                            
                        </div>
                    </div>
                </div>
                <div className="col" onClick={()=> window.open("https://github.com/RLeDEV/MFC_Project")}>
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>MFC Painter (C++)</h4>
                            <span className="chev">&rsaquo; A painter I made as a part of my C++ OOP course and was graded at 100</span>
                            
                        </div>
                    </div>
                </div>
                <div className="col" onClick={()=> window.open("https://github.com/RLeDEV/greedyColoring_intervalGraph")}>
                    <div className="card-container">
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="overlay" />
                        <div className="card">
                            <h4>Greedy Coloring (C)</h4>
                            <span className="chev">&rsaquo; C program I made to get the chromatic number and other props of an Interval Graph</span>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    };
};

export default Portfolio;