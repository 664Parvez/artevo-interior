"use client"

import React, {useState} from 'react'
import Image from "next/image"
import MassageStyle from "../styles/popup-massage.css"

import PopupImg from "../../../public/home/beloved.webp"

import { FaLocationArrow } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const PopupSubscribe = (props) => {

    const [showPopup, setShowPopup] = useState(false)

    return (
        <>
            <div id={`${props.getId}`}>
                <RxCross2 id='cross' onClick={() => setShowPopup(!showPopup)} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="popup_content">
                                <div className="d-flex justify-content-center align-items-center gap-4">
                                    <div>
                                        <h2>Our Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ratione explicabo veniam id dolore suscipit debitis repellendus tenetur. Nihil, dolore.</p>
                                        <div className="mt-4">
                                            <div className="input-group">
                                                <input type="text" placeholder='Enter your email' className='form-control form-control-lg' />
                                                <button className='btn btn-lg'><FaLocationArrow /></button>
                                            </div>
                                        </div>
                                        <ul className='mt-5'>
                                            <li><LuSparkles /> Interior Inspiration</li>
                                            <li><LuSparkles /> Exclusive Discount</li>
                                            <li><LuSparkles /> How to and room reveals</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <Image src={PopupImg} width={0} height={0} loading='lazy' alt=''/>
                                    </div>
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

export default PopupSubscribe
