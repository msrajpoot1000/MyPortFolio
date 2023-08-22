import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import the Typed.js library
import "../style.css";
import Profile1 from "../images/profile-1.jpeg";
import Myphoto from "../images/Myphoto.png";
import Myphoto2 from "../images/Myphoto2.png .png";
import Myphoto3 from "../images/Myphoto3.png";
import Myphoto4 from "../images/Myphoto4.png";
import Myphoto5 from "../images/Myphoto5.png";
import Myphoto6 from "../images/myphoto6.png";
import Myphoto7 from "../images/Myphoto7.jpg";
import Myphoto8 from "../images/Myphoto8.png.jpg"
import Myphoto9 from "../images/MyPhoto9.jpg";
import Myphoto11 from "../images/MyPhoto11.jpg";
import MyPhoto12 from "../images/MyPhoto12.jpg"


function About() {
    useEffect(() => {
        // Initialize Typed instances
    

        const typed2 = new Typed(".typing-2", {
            strings: ["Student","Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        // Clean up function to destroy Typed instances when the component unmounts
        return () => {
          
            typed2.destroy();
        };
    }, []);

    const handleDownload = () => {
    const cvFileUrl = `${process.env.PUBLIC_URL}/pdfs/Manish_Resume.pdf`;

    const link = document.createElement('a');
    link.href = cvFileUrl;
    link.target = '_blank';
    link.download = 'Manish_Resume.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};


  


    return (
        <div>
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={MyPhoto12} alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">I'm Manish Singh and I'm a <span className="typing-2"></span></div>
                            <p>Hi there! I'm Manish Singh, a Computer Science and Engineering student at Arya College Of Engineering And IT, Jaipur. 🎓 I'm passionate about leveraging technology to drive innovation, growth, and meaningful impact.
                           🚀 With a solid foundation in Java, HTML, CSS, and JavaScript, I've honed my skills in full-stack development. During a 2-month internship at Solar Secure Solution, I had the opportunity to work on projects that enhanced my proficiency in NodeJs, ReactJs, and ExpressJs.
                           🌐 I believe in the power of elegant design and user-centric experiences. I'm well-versed in tools like Figma, Canva, and Adobe Illustrator, enabling me to create visually appealing solutions.
                           💼 Alongside my studies, I've been actively involved in volunteer and cultural initiatives that promote community development. I've participated in events such as Blood Donation Camp and Swachh Bharat Mission, reflecting my commitment to making a positive difference.
                           🛠️ When I'm not coding or designing, you might find me on the cricket field or engaging in competitive programming. I thrive on challenges and love to learn new skills.
                           🎯 My journey is all about constant growth, and I'm excited to explore opportunities where I can contribute my technical prowess, creativity, and dedication. Let's connect and explore how we can collaborate!</p>
                            {/* <a href="#">Download CV</a> */}
                            <button onClick={handleDownload} className='resumeDownBtn' >Download CV</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
