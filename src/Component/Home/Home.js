import React,{useEffect} from 'react';
import "../style.css";
import Typed from 'typed.js'; // Import the Typed.js library
import MyPhoto5 from "../images/Myphoto5.png";

function Home() {
     useEffect(() => {
        // Initialize Typed instances
        const typed1 = new Typed(".typing-1", {
            strings: ["Student","Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        // Clean up function to destroy Typed instances when the component unmounts
        return () => {
            typed1.destroy();
        };
    }, []);

    return (
        <div>
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content">
                        <div class="text-1">Hello, my name is</div>
                        <div class="text-2"> Manish singh</div>
                        <div class="text-3">And I'm a <span class="typing-1"></span></div>
                        {/* <a href="#">Hire me</a> */}
                    </div>
                    {/* <img src={MyPhoto5}></img> */}
                </div>
            </section>
        </div>
    )
}
export default Home;