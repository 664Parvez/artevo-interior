import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import ReferStyle from "../styles/refer.module.css"

// Icons
import { MdArrowOutward, MdOutlineRoundaboutRight } from "react-icons/md"

// Image 
import firstImg from "../../../public/refer/first.png"
import secondOne from "../../../public/refer/1.png"
import secondTwo from "../../../public/refer/2.png"
import secondThree from "../../../public/refer/3.png"
import secondFour from "../../../public/refer/4.png"

const ReferandEarn = () => {
    return (
        <>
            <section>
                <div id={ReferStyle.refer_first_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <h5>Introduce Us!</h5>
                                <h1 className='mt-4'>Refer to Family and Friends.</h1>
                                <h3>Earn 10,000 with every referral.</h3>

                                <div className="mt-5">
                                    <Link href="/design-ideas/residencial-interior" className="btn" id={ReferStyle.button_style}>Refer Now <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="text-center">
                                    <Image src={firstImg} width={0} height={0} alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id={ReferStyle.refer_second}>
                    <div className="container">
                        <h3>The Process Is Easy!</h3>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className='text-center'>
                                    <Image src={secondOne} height={0} width={0} alt='' />
                                    <h5>Start off with your friends and family</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className='text-center'>
                                    <Image src={secondTwo} height={0} width={0} alt='' />
                                    <h5>Your referral confirms the booking</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className='text-center'>
                                    <Image src={secondThree} height={0} width={0} alt='' />
                                    <h5>Your referral pays 50% of the order value</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className='text-center'>
                                    <Image src={secondFour} height={0} width={0} alt='' />
                                    <h5>You stand to receive 100% of the referral bonus!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id={ReferStyle.refer_third}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-6">
                                <h3 className='mb-0'>Spread the Word… Earn ₹10,000 on each successful referral.</h3>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="text-end">
                                    <Link href="/design-ideas/residencial-interior" className="btn" id={ReferStyle.button_style}>Refer Now <span className="btn_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id={ReferStyle.refer_forth}>
                    <div className="container">
                        <h3 className='mb-4'>Terms & Conditions Apply</h3>
                        <ul>
                            <li><MdOutlineRoundaboutRight /> A successful referral is considered when the person referred confirms an order with Interior Company and pays the booking amount</li>
                            <li><MdOutlineRoundaboutRight /> The ₹10,000 referral bonus will be processed only if the person referred pays 50% of the order value.</li>
                            <li><MdOutlineRoundaboutRight /> The payment will be credited to the account linked with the profile.</li>
                            <li><MdOutlineRoundaboutRight /> The minimum value of the referred order should be ₹4,00,000</li>
                            <li><MdOutlineRoundaboutRight /> Only existing customers of Interior Company are eligible to refer.</li>
                            <li><MdOutlineRoundaboutRight /> Referral bonus cannot be combined or adjusted against any existing payment.</li>
                            <li><MdOutlineRoundaboutRight /> Interior Company holds the right to revoke all offers at its sole discretion without any prior notice.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReferandEarn
