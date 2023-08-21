import React from "react";
function Skills() {
    return (
        <div>
            <section class="skills" id="skills">
                <div class="max-width">
                    <h2 class="title">My skills</h2>
                    <div class="skills-content">
                        <div class="column left">
                            <div class="text">My creative skills & experiences.</div>
                            <p>I really enjoy being creative. I use tools like Figma, Canva to make user-friendly designs. I've also made websites like the Power Gummies clone where things look good and work well. I'm good at making complicated ideas easy to understand with pictures and finding clever solutions to problems. When I work with others, I bring my creative ideas to the team.</p>
                            <a href="#">Read more</a>
                        </div>
                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div class="line html"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>70%</span>
                                </div>
                                <div class="line css"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>70%</span>
                                </div>
                                <div class="line js"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>Java</span>
                                    <span>70%</span>
                                </div>
                                <div class="line mysql"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skills;