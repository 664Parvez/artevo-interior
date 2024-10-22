"use client"

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from "next/link"
import navbarStyle from "../styles/navbar.module.css"

// Icons
import { HiBars2 } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";

import Logo from "../../../public/logo.png"

const Navbar = () => {

    const [navBackground, setNavBackground] = useState(0)
    const [ navbarShow, setNavbarShow ] = useState(false)

    useEffect (() => {
        window.addEventListener("scroll", () => {
            setNavBackground(window.scrollY)
        })
    }, [])

    return (
        <>
            <div id={navbarStyle.navbar} style={navBackground <= 60 ? {background: "transperant"} : {backdropFilter: "blur(10px)"}}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Link href="/">
                                <Image height="0" width="0" src={Logo} alt="" />
                            </Link>
                        </div>
                        <div>
                            <ul>
                                <li className={navbarStyle.number}>+874 254 6584</li>
                                <li className={navbarStyle.touch}><Link href="">Get in Touch</Link></li>
                                <li className={navbarStyle.hambar} onClick={() => {setNavbarShow(true)}}><HiBars2 /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id={navbarStyle.responsive_menu} style={navbarShow ? {right: "0px"} : {right: "-300px"}}> 
                <div id={navbarStyle.crossNavItems}>
                    <IoRemoveOutline onClick={() => {setNavbarShow(false)}} />
                </div>

                <ul>
                    <li className='nav-item dropdown'><Link className='nav-link dropdown-toggle' data-bs-toggle="dropdown" role="button" href="#">Design Ideas</Link>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className='nav-item dropdown'><Link className='nav-link dropdown-toggle' data-bs-toggle="dropdown" role="button" href="#">Offerings</Link>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className='nav-item'><Link className='nav-link' href="">E-Diaries</Link></li>
                    <li className='nav-item'><Link className='nav-link' href="/contact-us">Contact Us</Link></li>
                    <li className='nav-item dropdown'><Link className='nav-link dropdown-toggle' data-bs-toggle="dropdown" role="button" href="#">More</Link>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="mt-5">
                    <Link href="" className='btn' id={navbarStyle.consultBtn}>Consult Online Now <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                </div>
            </div>
            </>
        )
    }
    
    export default Navbar
    