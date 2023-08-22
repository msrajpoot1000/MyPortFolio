import React, { useRef } from "react"; // Import useRef
import OwlCarousel from "react-owl-carousel";
import Profile1 from "../images/profile-1.jpeg";
import Profile2 from "../images/profile-2.jpeg";
import Profile3 from "../images/profile-3.jpeg";
import AmcatImage from "../images/Certificate/AmcatImage.jpg";
import Blood_donation from "../images/Certificate/Blood_donation.jpg";
import districtCricket from "../images/Certificate/districtCricketCertificate.jpg"
import redhat_certificate from "../images/Certificate/redhat_certifaicat.jpg";
import CssCerti from "../images/Certificate/CssCerti.jpg";
import CssPrize from "../images/Certificate/CssPrize.jpg";
function Teams() {
    const owlCarouselOptions = {
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true, // Enable navigation
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            // 1000: {
            //     items: 3,
            //     nav: false
            // }
        }
    };

    // Use useRef to access the OwlCarousel component
    const owlCarouselRef = useRef(null);


    return (
        <div>
            <section className="teams" id="teams">
                <div className="max-width">
                    <h2 className="title">My Certificate</h2>
                    <OwlCarousel {...owlCarouselOptions} className="carousel owl-carousel" ref={owlCarouselRef}>
                        {/* Your carousel items */}
                        <div >
                            <img src={AmcatImage}/>
                            <h2 >AMCAT Certificate</h2>
                        </div>
                        <div>
                            <img src={redhat_certificate} />
                            <h2>RHCSE Certificate</h2>
                        </div>
                        <div>
                            <img src={districtCricket} />
                            <h2>District Cricket Certificate</h2>
                        </div>
                        <div>
                            <img src={Blood_donation}></img>
                            <h2> Blood Donation Certificate</h2>
                        </div>
                        <div>
                            <img src={CssCerti}></img>
                            <h2> CSS Certificate</h2>
                        </div>
                        <div>
                            <img src={CssPrize}></img>
                            <h2> Css Prize</h2>
                        </div>

                        {/* <div className="card"> */}
                            {/* <div className="box">
                                <img src={Profile3} alt="" />
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div> */}
                        {/* </div> */}
                    </OwlCarousel>
                </div>
            </section>
        </div>
    );
}

export default Teams;

