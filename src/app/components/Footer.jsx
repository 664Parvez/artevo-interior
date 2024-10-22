import React from 'react'
import Link from 'next/link';
import Image from "next/image"
import footerStyle from "../styles/footer.module.css"

// Image
import Logo from "../../../public/logo.png"

// Icons
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const yearDate = new Date().getFullYear()

    return (
        <>
            <section id={footerStyle.footer}>
                <div className="container">

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
                            </div>
                            <div className="col-lg-2 col-md-6 mt-4">
                                <ul>
                                    <li><Link href="">FAQ</Link></li>
                                    <li><Link href="">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <ul>
                                    <li><Link href="">+874 254 6584</Link></li>
                                    <li><Link href="">example@gmail.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <p className='mb-0'>342, Boldock Street, California, USA</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className={footerStyle.third_section}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p className='mb-0'>© {yearDate} artevointerior | Powered by artevointerior</p>
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
