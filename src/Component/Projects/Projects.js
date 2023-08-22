import React from 'react';
import Profile1 from "../images/Project11.jpeg";
import ToDoList from "../images/ToDoList.jpeg";
import TikTacToe from "../images/TikTacToe.png";
import PasswordChecker from "../images/PasswordChecker.png";
import RandomColorGenerator from "../images/RandomColorGenerator.png";
import RandomColorGenerator2 from "../images/RandomColorGenerator2.png";
import TourAndTravel from "../images/TourAndTravel.png";
import NithWebsite from "../images/NithWebsite.png";
import ArchiTectWebsite from "../images/ArchiTectWebsite.png";



function Projects() {
    return (
        <>
            <section className="services about" id="services">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <a href="https://frontend7.onrender.com/" target="_blank">
                                    <div><img className="project1img" src={Profile1} alt="Project 1" /></div>
                                    <div className="text">Food Ordering Website</div>
                                    <p>Explore a beautifully designed website for ordering food. Enjoy the easy-to-use layout while discovering a variety of delicious meals to satisfy your cravings.</p>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://frontend7.onrender.com/">
                                    <div><img className="project1img" src={ToDoList} alt="Project 1" /></div>
                                    <div className="text">ToDo List</div>
                                    <p>Explore a beautifully designed website for ordering food. Enjoy the easy-to-use layout while discovering a variety of delicious meals to satisfy your cravings.</p>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://msrajpoot1000.github.io/Architect/">
                                    <div><img className="project1img" src={ArchiTectWebsite} alt="Project 1" /></div>
                                    <div className="text">Architect Clone</div>
                                    <p>Experience the essence of architectural marvels through our Architect Website Clone. Immerse yourself in the world of design and innovation.</p>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://msrajpoot1000.github.io/Tik-Tak-Toe/">
                                    <div><img className="project1img" src={TikTacToe} alt="Project 1" /></div>
                                    <div className="text">Tic Tac Toe</div>
                                    <p>Play the classic game of Tic Tac Toe and challenge your strategic skills. Enjoy friendly matches and relive nostalgic fun.</p>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <a href="https://msrajpoot1000.github.io/PasswordChecker/">
                                    <div><img className="project1img" src={PasswordChecker} alt="Project 1" /></div>
                                    <div className="text">Password Checker</div>
                                    <p>Check Password Strength: Make sure your passwords are tough to crack with our easy-to-use password checker</p>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <a href="https://msrajpoot1000.github.io/change_color_page/">
                                    <div><img className="project1img" src={RandomColorGenerator} alt="Project 1" /></div>
                                    <div className="text">Random Color Generator</div>
                                    <p>Try our random color generator page. Get inspired by different colors for your projects and have fun exploring!</p>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <a href="https://msrajpoot1000.github.io/tour-travels/">
                                    <div><img className="project1img" src={TourAndTravel} alt="Project 1" /></div>
                                    <div className="text">Tour And Travel Page</div>
                                    <p>Created with passion, our Tour and Travel page offers a visual journey through breathtaking destinations. Let your wanderlust guide you as you explore unique experiences.</p>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <a href="https://msrajpoot1000.github.io/nith_appTeam_website/">
                                    <div><img className="project1img" src={NithWebsite} alt="Project 1" /></div>
                                    <div className="text">NITH Website</div>
                                    <p>Welcome to Nith's World – Explore, Learn, and Grow. Join us on a journey of knowledge and inspiration.</p>
                                </a>
                            </div>
                        </div>
                        <div className='card'>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;




