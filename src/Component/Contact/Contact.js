import React from 'react';
function Contact() {
    return (
        <div>
            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 class="title">Contact me</h2>
                    <div class="contact-content">
                        <div class="column left">
                            <div class="text">Get in Touch</div>
                            <p>If you have any questions, ideas to share, or simply want to connect, I'd love to hear from you! Feel free to reach out anytime.</p>
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title">Manish Singh</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="info">
                                        <div class="head">Address</div>
                                        <div class="sub-title">Jaipur, Rajasthan, India</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <div class="sub-title">msrajpoot1000@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="text">Message me</div>
                            <form action="#">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div class="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                                </div>
                                <div class="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact;