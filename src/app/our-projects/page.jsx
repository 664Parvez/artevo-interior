import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import projectsStyle from "../styles/projects.module.css"

// Icons
import { MdArrowOutward } from "react-icons/md"



const ourProjects = () => {
    return (
        <>
            <div id={projectsStyle.first_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="text-center">
                                <h1>Coming Soon</h1>
                                <p>We will be celebrating the launch of our Portfolio Page very soon!</p>
                                <div className="mt-5">
                                    <Link href="/get-a-quote" className="btn" id={projectsStyle.button_style}>Book Consultation Now<span className="btn_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ourProjects
