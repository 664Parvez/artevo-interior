"use client"

import React from 'react'
import Image from "next/image"
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';

// Icons
import { MdArrowOutward } from "react-icons/md"

// Images
import LastSection from "../../../public/residencial-interior/last_section.webp"
import service1 from "../../../public/residencial-interior/1-2.webp"
import service2 from "../../../public/residencial-interior/2-2.webp"
import servOne from "../../../public/residencial-interior/1-1-1.webp"
import servTwo from "../../../public/residencial-interior/2-1-1.webp"
import servThree from "../../../public/residencial-interior/3-1.webp"
import servFour from "../../../public/residencial-interior/4-1.webp"
import servFive from "../../../public/residencial-interior/5-1.webp"
import servSix from "../../../public/residencial-interior/6-1.webp"

const DesignIdeas = () => {
    return (
        <>
            <div id="bradcrum">
                <div className="container">
                    <div className="text-center">
                        <h1>Residential Interior</h1>
                        <p>Where life can play</p>
                    </div>
                </div>
            </div>
            
            <div id="design_ideas_first_section">
                <div className="container">
                    <h2>Our Interior Design Ideas for Your Living Room</h2>
                    <p>Artevo believes that living room design reflects a person’s overall vision for their home. The living room serves as the heart of the house, where creative decoration can enhance its charm and liveliness. Sometimes the living room extends to the dining room and other common spaces. When providing suggestions for your living room interior design, we focus on delivering the best, ensuring it aligns with design principles and your taste.</p>

                    <div className="mt-5">
                        <hr />
                    </div>
                </div>
            </div>

            <div id="design_ideas_categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body">

                                    <div>
                                        <Swiper
                                            effect={'creative'}
                                            grabCursor={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            creativeEffect={{
                                                prev: {
                                                    shadow: true,
                                                    origin: 'left center',
                                                    translate: ['-5%', 0, -200],
                                                    rotate: [0, 100, 0],
                                                },
                                                next: {
                                                    origin: 'right center',
                                                    translate: ['5%', 0, -200],
                                                    rotate: [0, -100, 0],
                                                },
                                            }}
                                            modules={[Autoplay, EffectCreative]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <Image className='card-image' src={servOne} width={0} height={0} alt='' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image className='card-image' src={servTwo} width={0} height={0} alt='' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image className='card-image' src={servThree} width={0} height={0} alt='' />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h4 className='mt-4'>Living Room</h4>
                                    <p>Where simplicity meets functionality, clean lines and neutral hues create a serene haven, inviting calm and openness into your space.</p>

                                    <div className="text-end mt-4">
                                        <div className="mt-5">
                                            <Link href="/design-ideas/residencial-interior" className="btn" id="button_style">Book Free Consult<span className="btn_icon"><MdArrowOutward /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6"></div>
                        <div className="col-lg-6 col-md-6"></div>
                        <div className="col-lg-6 col-md-6"></div>
                        <div className="col-lg-6 col-md-6"></div>
                    </div>
                </div>
            </div>

            <div id="design_ideas_third_section">
                <div className="container">
                    <h3>Living Room Design Includes</h3>
                    <p>At Artevo, our living room interior design services encompass navigating tricky layouts and solving lighting dilemmas. Our goal is to make your space both elegant and functional. Let us transform your living room into a haven that perfectly reflects your style and meets your needs.</p>

                    <div className="text-end mt-4">
                        <div className="mt-5">
                            <Link href="/design-ideas/residencial-interior" className="btn" id="button_style">Contact Now <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                        </div>
                    </div>

                    <div className="mt-5">
                        <hr />
                    </div>
                </div>
            </div>

            <div id="design_ideas_forth_section">
                <div className="container">
                    <h3 className='mb-5'>Our Living Room Design Process</h3>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <Image src={service1} width={0} height={0} alt='' />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div class="accordion" id="accordionDesignIdeasForth">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionDesignIdeasForth">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionDesignIdeasForth">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionDesignIdeasForth">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Accordion Item #4
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionDesignIdeasForth">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Accordion Item #5
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionDesignIdeasForth">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="design_ideas_fifth_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <h3>Why Choose Artevo for Your Living Room Design?</h3>
                            <p>Choose Artevo for your living room decoration needs, as we specialize in turning visions into reality. With personalized attention and a commitment to quality, we craft spaces that mirror your personality and elevate your lifestyle, ensuring your living room becomes a true reflection of you.</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <Image src={service2} width={0} height={0} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div id="design_ideas_sixth_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="our_newsletter text-center">
                                <h5>Our Newsletter</h5>
                                <h2 className='mt-4'>Ready to start learn ? Sign up now!</h2>
                                <p>+(123) 1234-567-8901</p>

                                <div className="mt-5">
                                    <Link href="/design-ideas/residencial-interior" className="btn" id="button_style">Get an Appointment <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h3>Company profile</h3>

                                <div className="mt-4">
                                    <Link href="/design-ideas/residencial-interior" className="btn" id="button_style">Download PDF File <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="design_ideas_seven_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <h5>FAQ</h5>
                            <h3 className='mt-4'>Ask Us Anything</h3>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div class="accordion" id="accordionFaq">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqOne" aria-expanded="true" aria-controls="collapseFaqOne">
                                        Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseFaqOne" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqTwo" aria-expanded="false" aria-controls="collapseFaqTwo">
                                        Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseFaqTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqThree" aria-expanded="false" aria-controls="collapseFaqThree">
                                        Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseFaqThree" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFour" aria-expanded="false" aria-controls="collapseFaqFour">
                                        Accordion Item #4
                                        </button>
                                    </h2>
                                    <div id="collapseFaqFour" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFive" aria-expanded="false" aria-controls="collapseFaqFive">
                                        Accordion Item #5
                                        </button>
                                    </h2>
                                    <div id="collapseFaqFive" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="design_ideas_eight_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <Image src={LastSection} width={0} height={0} alt=''/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h4>Looking for inspiration?</h4>
                            <p>Visit a Livspace Experience Centre.</p>
                            <div className="text-end mt-4">
                                <div className="mt-5">
                                    <Link href="/design-ideas/residencial-interior" className="btn" id="button_style">Find One Close to You <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignIdeas
