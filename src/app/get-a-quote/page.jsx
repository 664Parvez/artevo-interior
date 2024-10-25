import React from "react"
import GetAQuoteStyle from "../styles/get-a-quote.module.css"

// Icons
import { MdArrowOutward } from "react-icons/md"

const GetAQuote = () => {
    return (
        <>
            <section>
                <div id={GetAQuoteStyle.bradCrum}>
                    <h1 className="text-center">Get A Quote</h1>
                </div>
            </section>
            <section>
                <div id={GetAQuoteStyle.get_a_quote}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Full name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-4">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-4">
                                            <label htmlFor="phone">Phone No.</label>
                                            <input type="tel" className="form-control" id="phone" placeholder="Phone number" required />
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="phone">Project Size (Sqft)</label>
                                            <select name="" id="" className="form-select" required>
                                                <option value="">Select Your Size</option>
                                                <option value="">900-1100 sqft</option>
                                                <option value="">1200-1400 sqft</option>
                                                <option value="">1500-1700 sqft</option>
                                                <option value="">1800-2000 sqft</option>
                                                <option value="">More than 2100 sqft</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="budget">Target Budget</label>
                                            <select name="" id="" className="form-select" required>
                                                <option value="">Select Your Budget</option>
                                                <option value="">4 Lac - 6 Lac</option>
                                                <option value="">7 Lac - 9 Lac</option>
                                                <option value="">10 Lac - 13 Lac</option>
                                                <option value="">14 Lac - 19 Lac</option>
                                                <option value="">More than 20 Lac</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" className="form-control" id="location" placeholder="Location" required />
                                        </div>

                                        <div className="mt-5 col-lg-12">
                                            <button type="submit" className="btn" id={GetAQuoteStyle.button_style}>Submit Now <span className="btn_white_icon"><MdArrowOutward /></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetAQuote