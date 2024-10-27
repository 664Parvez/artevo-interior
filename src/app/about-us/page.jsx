import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aboutStyle from "../styles/about.module.css"

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md"

// Image 
import circle from "../../../public/about/circle.png"
import aboutFirst from "../../../public/about/aboutfirst.webp"
import about3 from "../../../public/about/about_img_03.webp"
import downScroll from "../../../public/about/scroll_down_img.png"

const page = () => {
    return (
        <>
            <section>
                <div id={aboutStyle.first_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="mb-3">
                                    <h5 className="mb-0">About Us</h5>
                                </div>
                                <h1>We are nearer to you than you think.</h1>
                                <h4>We Are Artevo. We Create Unique And Sustainable Living Spaces, Designed For Sharing</h4>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="text-center">
                                    <Image className='circle_img' src={circle} width={0} height={0} alt=''/>
                                </div>
                            </div>
                        </div>

                        <div className="my-4">
                            <Image src={aboutFirst} width={0} height={0} alt=''/>
                        </div>

                        <div className="mt-5">
                            <p>AirBrick, a visionary design and renovation firm, passionately transforms spaces into masterpieces. With a team of skilled designers, architects, and craftsmen, we collaborate closely with clients to realize their unique visions. Specializing in commercial fitouts, particularly in office spaces and F&B establishments, we integrate innovative technology and AI for efficient space planning, furniture selection, material choices, and lighting design. Our tech-enabled approach sets us apart, ensuring meticulous attention to detail and a commitment to delivering exceptional, harmonious environments that seamlessly blend creativity and cutting-edge technology.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id={aboutStyle.first_sub_section}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <h3>We Serve The Best For You</h3>
                            </div>
                            <div className="col-lg-2">
                                <div className="text-center">
                                    <Image src={downScroll} width={0} height={0} alt=''/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis rerum cum optio dolorem corporis vitae ab nihil, ad ut necessitatibus ullam excepturi repellendus. Possimus quia nisi necessitatibus animi qui.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id={aboutStyle.second_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>We are leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.</p>
        
                                <ul className='mt-5'>
                                    <li><FaArrowRightLong /> Innovative Design Approach</li>
                                    <li><FaArrowRightLong /> Highly Skilled Expertise and Specialization</li>
                                    <li><FaArrowRightLong /> A client-centric approach for an architectural company</li>
                                    <li><FaArrowRightLong /> Sustainable Design Practices</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#mission" aria-expanded="true" aria-controls="mission">
                                            Mission
                                        </button>
                                        </h2>
                                        <div id="mission" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                                            </div>
                                        </div>
                                    </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#vision" aria-expanded="false" aria-controls="vision">
                                                Vision
                                            </button>
                                            </h2>
                                            <div id="vision" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    
                    </div>
                </div>
            </section>

            <section>
                <div id={aboutStyle.third_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <Image src={about3} width={0} height={0} alt='' />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h2>Architecture & Interior Is Where We Belong, We Really Love Our Job</h2>
                                <div className="mt-5">
                                    <p>Traz is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects.</p>
                                    <p>At Traz, we believe that architecture goes beyond mere structures, it is an art form that shapes the way we live, work, and interact with our surroundings. With a deep understanding of the built environment and an unwavering commitment.</p>
                                </div>
                                
                                <div className="mt-5">
                                    <Link href="/design-ideas/residencial-interior" className="btn" id={aboutStyle.button_style}>Get Consultation <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
