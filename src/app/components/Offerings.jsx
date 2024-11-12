import React from 'react'
import Link from 'next/link'
import Image from "next/image"


// Image
import offer2 from "../../../public/Offering/2.jpg"
import offer45days from "../../../public/Offering/45days.webp"
import icon1 from "../../../public/offering/design-icon.webp"
import icon2 from "../../../public/offering/meterials.webp"
import icon3 from "../../../public/offering/menufecturing.webp"
import icon4 from "../../../public/offering/quality-check.webp"
import icon5 from "../../../public/offering/packaging.webp"
import icon6 from "../../../public/offering/installation.webp"

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

                    <div className="my-5">
                        <hr />
                    </div>
                </div>
            </div>

            <div id="offering_second_section">
                <div className="container">
                    <h2 className='text-center mb-5'>What we offer</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <Image src={offer2} width={0} height={0} className='card-img' alt='' />
                                <div className="card-body">
                                    <h5>Add Your Heading Text Here</h5>
                                    <hr />

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <Image src={offer2} width={0} height={0} className='card-img' alt='' />
                                <div className="card-body">
                                    <h5>Add Your Heading Text Here</h5>
                                    <hr />
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <Image src={offer2} width={0} height={0} className='card-img' alt='' />
                                <div className="card-body">
                                    <h5>Add Your Heading Text Here</h5>
                                    <hr />
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibu</p>
                    </div>
                </div>
            </div>

            <div id="offering_third_section">
                <div className="container">
                    <h2>What goes into crafting the best</h2>
                    <p>Thanks to our precision engineered manufacturing technology with 4-sigma (99%) accuracy, all Livspace modular furniture proudly comes with a FLAT 10-year warranty*.</p>

                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className='card'>
                                <div className="card-body">
                                    <Image src={icon1} width={0} height={0} alt='' />
                                    <p>Tailored for you, applying the actual science of making living easy and beautiful.</p>

                                    <h4>Design</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className='card'>
                                <div className="card-body">
                                    <Image src={icon2} width={0} height={0} alt='' />
                                    <p>Ethically sourced and sized up against the fierce tests of NABL certified labs.</p>

                                    <h4>Core Materials</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className='card'>
                                <div className="card-body">
                                    <Image src={icon3} width={0} height={0} alt='' />
                                    <p>Precision engineered and fully automated for zero ‘whoops’ moments.</p>

                                    <h4>Manufacturing</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className='card'>
                                <div className="card-body">
                                    <Image src={icon4} width={0} height={0} alt='' />
                                    <p>Hardware and drop tests ensure our DuraBuild cabinets withstand wear and tear.</p>

                                    <h4>Quality Checks</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className='card'>
                                <div className="card-body">
                                    <Image src={icon5} width={0} height={0} alt='' />
                                    <p>Protected well, all modules reach your home in pristine condition.</p>

                                    <h4>Packaging</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className='card'>
                                <div className="card-body">
                                    <Image src={icon6} width={0} height={0} alt='' />
                                    <p>Your finished modular furniture will be installed by certified and trained Livspace professionals.</p>

                                    <h4>Delivery & Installation</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="offering_forth_section">
                <div className="container">
                    
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="booking-tab" data-bs-toggle="tab" data-bs-target="#booking-tab-pane" type="button" role="tab" aria-controls="booking-tab-pane" aria-selected="true">Booking</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="phase-tab" data-bs-toggle="tab" data-bs-target="#phase-tab-pane" type="button" role="tab" aria-controls="phase-tab-pane" aria-selected="false">Design Phase</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="install-tab" data-bs-toggle="tab" data-bs-target="#install-tab-pane" type="button" role="tab" aria-controls="install-tab-pane" aria-selected="false">Manufacturing & Installation</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="move-tab" data-bs-toggle="tab" data-bs-target="#move-tab-pane" type="button" role="tab" aria-controls="move-tab-pane" aria-selected="false">Move-In</button>
                        </li>
                    </ul>

                    <div class="tab-content mt-4" id="myTabContent">

                        <div class="tab-pane fade show active" id="booking-tab-pane" role="tabpanel" aria-labelledby="booking-tab" tabindex="0">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <h3>Booking</h3>
                                    <p>Say hi to your designer and kick-start your dream with a design proposal.</p>
        
                                    <hr />
        
                                    <h5>Fill form</h5>
                                    <p>Share your basic information and property details in a quiz.</p>
        
                                    <h5>Get a call</h5>
                                    <p>Our Livspace representative connects with you to understand your requirements better.</p>
        
                                    <h5>Share your floor plan</h5>
                                    <p>We match you to a Livspace designer based on your requirements.</p>
                                </div>
                                <div className="col-lg-5 col-md-5"></div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="phase-tab-pane" role="tabpanel" aria-labelledby="phase-tab" tabindex="0">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <h3>Design Phase</h3>
                                    <p>Say hi to your designer and kick-start your dream with a design proposal.</p>
        
                                    <hr />
        
                                    <h5>Fill form</h5>
                                    <p>Share your basic information and property details in a quiz.</p>
        
                                    <h5>Get a call</h5>
                                    <p>Our Livspace representative connects with you to understand your requirements better.</p>
        
                                    <h5>Share your floor plan</h5>
                                    <p>We match you to a Livspace designer based on your requirements.</p>
                                </div>
                                <div className="col-lg-5 col-md-5"></div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="install-tab-pane" role="tabpanel" aria-labelledby="install-tab" tabindex="0">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <h3>Manufacturing & Installation</h3>
                                    <p>Say hi to your designer and kick-start your dream with a design proposal.</p>

                                    <hr />

                                    <h5>Fill form</h5>
                                    <p>Share your basic information and property details in a quiz.</p>

                                    <h5>Get a call</h5>
                                    <p>Our Livspace representative connects with you to understand your requirements better.</p>

                                    <h5>Share your floor plan</h5>
                                    <p>We match you to a Livspace designer based on your requirements.</p>
                                </div>
                                <div className="col-lg-5 col-md-5"></div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="move-tab-pane" role="tabpanel" aria-labelledby="move-tab" tabindex="0">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <h3>Move-In</h3>
                                    <p>Say hi to your designer and kick-start your dream with a design proposal.</p>

                                    <hr />

                                    <h5>Fill form</h5>
                                    <p>Share your basic information and property details in a quiz.</p>

                                    <h5>Get a call</h5>
                                    <p>Our Livspace representative connects with you to understand your requirements better.</p>

                                    <h5>Share your floor plan</h5>
                                    <p>We match you to a Livspace designer based on your requirements.</p>
                                </div>
                                <div className="col-lg-5 col-md-5"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <p>*Representative of the time required and dependent on the rate of progress your designer and you mutually establish. Installation is dependent on site conditions. | **Booking amount for new home interiors is 5% of the final quote or Rs.15,000 (whichever is higher). For renovation projects, the booking amount is 15% of the final quote or Rs.25,000 (whichever is higher) | ***For new home interiors, a site measurement fee of 10% on the final quote will be charged. This will be adjusted against your project value when we raise the sales order.</p>
                    </div>
                </div>
            </div>

            <div id="offering_fifth_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <h2>All we need is 45 days</h2>
                            <p>With the Livspace Move-in Guarantee, you can plan your house warming with confidence. Though unlikely, if your home is not done in 45 days, we’ll pay you rent for every day of delay.</p>

                            <div className="mt-5 text-end">
                                <Link href="/get-a-quote" className="btn" id="button_style">Read Our Policy<span className="btn_white_icon"><MdArrowOutward /></span></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Image src={offer45days} width={0} height={0} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default offeringsComponent
