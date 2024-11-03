import React from 'react'
import Link from 'next/link'
import Image from "next/image"

import offeringStyle from "../styles/offering.module.css"

// Icons
import { MdArrowOutward } from "react-icons/md"

const offeringsComponent = () => {
    return (
        <>
            <div id="bradcrum">
                <div className="container">
                    <div className="text-center">
                        <h1>The finest choice in modular Solutions</h1>
                        <p>Where life can play</p>
                        <div className="mt-5">
                            <Link href="/get-a-quote" className="btn" id="button_style">Book Consultation Now<span className="btn_white_icon"><MdArrowOutward /></span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id='offering_first_section'>
                <div className="container">
                    <div className="text-center">
                        <h2>Bring home woodwork that lasts a lifetime</h2>
                        <p>Get your home up and running in a jiffy. Livspace Select offers a wide range of budget-friendly, high-quality modular solutions like kitchens, wardrobes, TV units, bookshelves, shoe racks and more in colours, designs and sizes that can be customised to match your home.</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default offeringsComponent
