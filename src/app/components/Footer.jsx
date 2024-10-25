import React from 'react'
import Link from 'next/link';
import Image from "next/image"
import footerStyle from "../styles/footer.module.css"

// Image
import Logo from "../../../public/logo.png"

// Icons
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {

    const yearDate = new Date().getFullYear()

    
    return (
        <>
            <section id={footerStyle.footer}>
                <div className="container">

                <hr />

                    <div className={footerStyle.first_second}>
                        <h2 className='text-center'>Subscribe for More Updates</h2>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere saepe non et similique quibusdam.</p>
                        <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                                <div className="input-group my-4">
                                    <input type="text" className="form-control form-control-lg" placeholder="Type your gmail" aria-label="Type your gmail" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><MdArrowOutward /></button>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                            </div>
                    </div>

                    <div className={footerStyle.second_section}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4">
                                <Image src={Logo} height="0" width="0" alt="" />
                                <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloribus rerum totam aspernatur provident . . .</p>

                                <div className="mt-4 col-lg-12">
                                    <Link href="/about-us" type="submit" className="btn" id={footerStyle.button_style}>Read More <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-4">
                                <ul>
                                    <li><h5>Quick Link</h5></li>
                                    <hr />
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/collaboration">Collaboration</Link></li>
                                    <li><Link href="/jobs">Jobs</Link></li>
                                    <li><Link href="/contact-us">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <ul>
                                    <li><h5>Our Service</h5></li>
                                    <hr />
                                    <li><Link href="/design-ideas/residencial-interior">Residencial Interior</Link></li>
                                    <li><Link href="/design-ideas/workspace-interior">Workspace Interior</Link></li>
                                    <li><Link href="/offerings/home-automation">Home Automation</Link></li>
                                    <li><Link href="/offerings/home-renovation">Home Renovation</Link></li>
                                    <li><Link href="/offerings/personalized-furniture">Personalized Furniture</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <ul>
                                    <li><h5>Contact Info</h5></li>
                                    <hr />

                                    <li><Link href="tel:+874 254 6584"><FaPhoneAlt /> | +874 254 6584</Link></li>
                                    <li><Link href="https://wa.me/+8742546584"><FaWhatsapp /> | +874 254 6584</Link></li>
                                    <li><Link href="mailto:example@gmail.com"><FaEnvelope /> | example@gmail.com</Link></li>
                                    <li><FaLocationDot /> | 342, Boldock Street, California, USA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className={footerStyle.term_condition_section}>
                        <div className="text-lg-end my-4">
                            <ul>
                                <li><Link href="/terms-and-condition">Terms & Conditions</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/disclaimer">Disclaimer</Link></li>
                                <li><Link href="/refund-policy">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <div className={footerStyle.third_section}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p className='mb-0'>© {yearDate} artevointerior | Powered by artevointerior | Design and Developed by <Link href="https://parvez-rabbi.vercel.app/">Parvez Rabbi</Link></p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul className='text-end'>
                                    <li><Link href=""><FaFacebookSquare /></Link></li>
                                    <li><Link href=""><FaInstagram /></Link></li>
                                    <li><Link href=""><FaLinkedin /></Link></li>
                                    <li><Link href=""><FaTwitter /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer
