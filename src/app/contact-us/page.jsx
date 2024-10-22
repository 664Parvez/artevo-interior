import React from "react"
import Image from "next/image"
import contactStyle from "../styles/contact.module.css"

// Icons
import { MdArrowOutward } from "react-icons/md";

// Image
import contactImg from "../../../public/contact/contact.webp"

const contact = () => {
    return (
        <>
            <section>
                <div id={contactStyle.first_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6">
                                <div className="mb-3">
                                    <h5 className="mb-0">Services</h5>
                                </div>
                                <h1 className="mb-5">Want to chat further?
                                We’d love to hear from you.</h1>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>We build and activate brands through cultural insight, strategic vision.</h6>
                                        <div className="mt-3">
                                            <p className="mb-0">We’re interested in</p>
                                            <p>Working Together</p>
                                            <p><b>+1 827 48 89</b></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6>We build and activate brands through cultural insight, strategic vision.</h6>
                                        <div className="mt-3">
                                            <p className="mb-0">Have a project in mind?</p>
                                            <p>Send a message.</p>
                                            <p><b>info@hub.com</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11883.875237808637!2d-87.67692216915567!3d41.87201752089232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d15b2a123d1%3A0xb14ed1f159f8b336!2sJohn%20H.%20Stroger%2C%20Jr.%20Hospital%20of%20Cook%20County!5e0!3m2!1sen!2sbd!4v1729228858980!5m2!1sen!2sbd" width="100%" height="350" allowfullscreen="" className="rounded-4" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id={contactStyle.second_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6">
                                <h3>Interior Design Services Executed to Perfection.</h3>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-12 mt-3">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" name="" className="form-control" placeholder="Enter your name" />
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="tel" name="" className="form-control" placeholder="Enter your phone" />
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <label htmlFor="">Email</label>
                                            <input type="email" name="" className="form-control" placeholder="Enter your email" />
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <label htmlFor="">Message</label>
                                            <textarea name="" rows="5" className="form-control" placeholder="Enter your name" id=""></textarea>
                                        </div>

                                        <div className="col-lg-12 mt-5">
                                            <button className="btn">Send Message <span className="btn_white_icon"><MdArrowOutward /></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="text-center">
                                    <Image src={contactImg} width={0} height={0} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact