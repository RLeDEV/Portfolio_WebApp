import React from 'react';
import './index.css';

export default function Portfolio(props) {
    return (
        <div id={props.id} className="portfolio-content">
            <div className="portfolio-tit">
                <span className="my-big-title">latest</span><span className="portfolio-big-title">Projects</span>
            </div>
            <div className="portfolio">
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <a href="https://github.com/RLeDEV/Salary_Web_Caculator" target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="images" /></a>
                        </div>
                        <div className="details">
                            <h2>
                                EasyCalc 
                                <br/>
                                <span className="project-name">Salary Calculator UI</span>
                                <span className="used-technologies">
                                    <span className="technologie react">ReactJS</span>
                                    <span className="technologie nodejs">NodeJS</span>
                                    <span className="technologie css">CSS</span>
                                    <span className="technologie mysql">MySQL</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <a href="https://github.com/RLeDEV/Portfolio_WebApp" target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="images" /></a>
                        </div>
                        <div className="details">
                            <h2>
                                Portfolio WebApp 
                                <br/>
                                <span className="project-name">RleDEV Portfolio</span>
                                <span className="used-technologies">
                                    <span className="technologie react">ReactJS</span>
                                    <span className="technologie css">CSS</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <a href="https://github.com/RLeDEV/Analyzer" target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="images" /></a>
                        </div>
                        <div className="details">
                            <h2>
                                Analyzer 
                                <br/>
                                <span className="project-name">Files Investigator</span>
                                <span className="used-technologies">
                                    <span className="technologie python">Python</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <a href="https://github.com/RLeDEV/customersINFO" target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="images" /></a>
                        </div>
                        <div className="details">
                            <h2>
                                CMS 
                                <br/>
                                <span className="project-name">Customer Management System</span>
                                <span className="used-technologies">
                                    <span className="technologie python">Python</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <a href="https://github.com/RLeDEV/MFC_Painter_Project" target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1578730170902-45e5e21ffd82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="images" /></a>
                        </div>
                        <div className="details">
                            <h2>
                                Painter 
                                <br/>
                                <span className="project-name">MFC Painter</span>
                                <span className="used-technologies">
                                    <span className="technologie cpp">C++</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <a href="https://github.com/RLeDEV/greedyColoring_intervalGraph" target="_blank" rel="noopener noreferrer"><img src="https://images.unsplash.com/photo-1581094289810-adf5d25690e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="images" /></a>
                        </div>
                        <div className="details">
                            <h2>
                                Greedy Coloring
                                <br/>
                                <span className="project-name">Graphs Algorithm</span>
                                <span className="used-technologies">
                                    <span className="technologie c">C</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}