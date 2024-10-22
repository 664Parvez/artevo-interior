"use client"

import Image from "next/image";
import Link from "next/link"
import homeStyle from "./page.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Icons
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

// Images
import Slider1 from "../../public/home/slider1.webp"
import Slider2 from "../../public/home/slider2.webp"
import Slider3 from "../../public/home/slider3.webp"
import Slider4 from "../../public/home/slider4.webp"
import homeAbout from "../../public/home/home_about.webp"
import hAbout1 from "../../public/home/hAbout1.webp"
import hAbout2 from "../../public/home/hAbout2.webp"
import hAbout3 from "../../public/home/hAbout3.webp"
import hAbout4 from "../../public/home/hAbout4.webp"
import hAbout5 from "../../public/home/hAbout5.webp"
import hAbout6 from "../../public/home/hAbout6.webp"
import Recent1 from "../../public/home/recent-work1.webp"
import Recent2 from "../../public/home/recent-work2.webp"
import HeadingImg from "../../public/home/headingImage.webp"
import RealityImg from "../../public/home/reality.webp"
import BelovedImg from "../../public/home/beloved.webp"
import Offering1 from "../../public/home/offering1.webp"
import Offering2 from "../../public/home/offering2.webp"
import Offering3 from "../../public/home/offering3.webp"
import Offering4 from "../../public/home/offering4.webp"
import Offering5 from "../../public/home/offering5.webp"
import Offering6 from "../../public/home/offering6.webp"
import Func1 from "../../public/home/furn1.webp"
import Func2 from "../../public/home/furn2.webp"
import Func3 from "../../public/home/furn3.webp"
import Func4 from "../../public/home/furn4.webp"
import Func5 from "../../public/home/furn5.webp"
import Func6 from "../../public/home/furn6.webp"
import Func7 from "../../public/home/furn7.webp"
import Women from "../../public/home/women.webp"
import Shopping from "../../public/home/shopping.webp"
import Project1 from "../../public/home/project1.webp"
import Project2 from "../../public/home/project2.webp"
import Project3 from "../../public/home/project3.webp"
import Project4 from "../../public/home/project4.webp"
import Project5 from "../../public/home/project5.webp"
import Project6 from "../../public/home/project6.webp"


export default function Home() {
  return (
    <>
      <section>
        <div id={homeStyle.hero_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div>
                  <h1 className={homeStyle.heading}>The Home Of <span><Image loading="lazy" src={HeadingImg} width={0} height={0} alt="" /></span>
                  Excellence In The Construction Industry</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum doloribus enim. Quia ex, maiores sint unde tempore fuga ea.</p>
                  <div className="mt-5">
                    <Link href="" className="btn" id={homeStyle.button_style}>Schedule a Consultation <span className="btn_icon"><MdArrowOutward /></span></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div id={homeStyle.heroSlider}>
                  <Swiper
                    slidesPerView={["auto"]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      800: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div>
                        <Image src={Slider1} width="0" height="0" alt="" loading="lazy" />
                        <div className={homeStyle.slider_title}>
                          <h6 className="mb-0">Commercial Interior</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <Image src={Slider2} width="0" height="0" alt="" loading="lazy" />
                        <div className={homeStyle.slider_title}>
                          <h6 className="mb-0">Home Interior</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <Image src={Slider3} width="0" height="0" alt="" loading="lazy" />
                        <div className={homeStyle.slider_title}>
                          <h6 className="mb-0">Office Interior</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <Image src={Slider4} width="0" height="0" alt="" loading="lazy" />
                        <div className={homeStyle.slider_title}>
                          <h6 className="mb-0">Workspace Interior</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className={homeStyle.heroTag}>
                    <ul>
                      <li>Consultation</li>
                      <li>Ideas</li>
                      <li>Meterial</li>
                      <li>Styling & Decore</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className={homeStyle.hero_social_icon}>
                    <div className="row align-items-center">
                      <div className="col-lg-4 col-md-12">
                        <ul>
                          <li><Link href=""><FaFacebook id={homeStyle.socialIcon} /></Link></li>
                          <li><Link href=""><FaInstagram id={homeStyle.socialIcon} /></Link></li>
                          <li><Link href=""><FaLinkedin id={homeStyle.socialIcon} /></Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-8 col-md-12">
                        <p className="mb-0">We Help you to organize your room to be more cozy and neat. Done directly by classy interior designers.</p>
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
        <div id={homeStyle.about_us}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Image id={homeStyle.aboutLeftSideImg} src={homeAbout} width={0} height={0} loading="lazy" alt="" />
              </div>
              <div className="col-lg-6">
                <h5>About Us</h5>
                <h2>Best Way To Design Your Home, Office, etc</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt molestias tenetur ad, perferendis, fugiat vitae eos recusandae delectus doloremque illum quisquam. Fuga corrupti non accusamus.</p>

                <div className="row mt-3">
                  <div className="col-lg-4 col-md-6 mt-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Image className={homeStyle.rightImg} src={hAbout1} width={0} height={0} loading="lazy" alt="" />
                      </div>
                      <div>
                        <p className="mb-0">Planning</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Image className={homeStyle.rightImg} src={hAbout2} width={0} height={0} loading="lazy" alt="" />
                      </div>
                      <div>
                        <p className="mb-0">Consultation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Image className={homeStyle.rightImg} src={hAbout3} width={0} height={0} loading="lazy" alt="" />
                      </div>
                      <div>
                        <p className="mb-0">Woodwork</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Image className={homeStyle.rightImg} src={hAbout4} width={0} height={0} loading="lazy" alt="" />
                      </div>
                      <div>
                        <p className="mb-0">Installation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Image className={homeStyle.rightImg} src={hAbout5} width={0} height={0} loading="lazy" alt="" />
                      </div>
                      <div>
                        <p className="mb-0">Furnishing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4">
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Image className={homeStyle.rightImg} src={hAbout6} width={0} height={0} loading="lazy" alt="" />
                      </div>
                      <div>
                        <p className="mb-0">Partitioning</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <Link href="" className="btn" id={homeStyle.button_style}>About Us <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.recente_work}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4">
                <h3>Some of Our Recente Work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis assumenda ipsa expedita cupiditate.</p>
                <div className="mt-5">
                  <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="d-flex justify-content-evenly align-items-center gap-3">
                  <div>
                    <h2>01</h2>
                  </div>
                  <div>
                    <Image src={Recent1} width={0} height={0} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="d-flex justify-content-evenly align-items-center gap-3">
                  <div>
                    <h2>02</h2>
                  </div>
                  <div>
                    <Image src={Recent2} width={0} height={0} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.offering}>
          <div className="container">
            <h2>WE ARE OFFERINGS</h2>

            <div className="text-end">
              <span className="swiper-offering-button-next">
                <LuMoveLeft id={homeStyle.offering_navigate} />
              </span>
              <span className="swiper-offering-button-prev">
                <LuMoveRight id={homeStyle.offering_navigate} />
              </span>
            </div>
            <div className="mt-5">
              <Swiper
                slidesPerView={["auto"]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-offering-button-next',
                  prevEl: '.swiper-offering-button-prev'
                }}
                grabCursor={true}
                breakpoints={{
                    300: {
                      slidesPerView: 1.5,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2.5,
                      spaceBetween: 10,
                    },
                    800: {
                      slidesPerView: 3.5,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4.5,
                      spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="myOfferingSwiper"
              >
                <SwiperSlide>
                  <div className="text-center">
                    <Link href="">
                      <div className={homeStyle.category_box}>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <div>
                            <Image src={Offering1} width={0} height={0} loading="lazy" alt=""/>
                          </div>
                          <div><p className="mb-0">Modular Interior</p></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <Link href="">
                      <div className={homeStyle.category_box}>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <div>
                            <Image src={Offering2} width={0} height={0} loading="lazy" alt=""/>
                          </div>
                          <div><p className="mb-0">Full Home Interior</p></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <Link href="">
                      <div className={homeStyle.category_box}>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <div>
                            <Image src={Offering3} width={0} height={0} loading="lazy" alt=""/>
                          </div>
                          <div><p className="mb-0">Luxury Interior</p></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <Link href="">
                      <div className={homeStyle.category_box}>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <div>
                            <Image src={Offering4} width={0} height={0} loading="lazy" alt=""/>
                          </div>
                          <div><p className="mb-0">Home Renovation</p></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <Link href="">
                      <div className={homeStyle.category_box}>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <div>
                            <Image src={Offering5} width={0} height={0} loading="lazy" alt=""/>
                          </div>
                          <div><p className="mb-0">Home Automation</p></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <Link href="">
                      <div className={homeStyle.category_box}>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <div>
                            <Image src={Offering6} width={0} height={0} loading="lazy" alt=""/>
                          </div>
                          <div><p className="mb-0">Personalized Furniture</p></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.give_you}>
          <div className="container">
            <div className="mb-3">
              <h5 className="mb-0">Features</h5>
            </div>
            <h3>What do we give you ?</h3>

            <div className="row mt-5">
              <div className="col-lg-4 col-md-4">
                <div>
                  <h4>__Free Shipping</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptas.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div>
                  <h4>__Best Price</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptas.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div>
                  <h4>__9 Years Warranty</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.bathroom}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium ipsam atque. Repudiandae, aperiam? Totam atque dignissimos labore est excepturi deserunt cumque molestias nam aut doloribus esse.</p>

                  <div className="mt-5">
                    <Link href="" className="btn" id={homeStyle.button_style}>Get Started <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                  </div>
              </div>
              <div className="col-lg-6">
                <h3>BUILD YOUR BATHROOM</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.furniture}>
          <div className="container">
          <h3>Personalized Furniture</h3>
            <div className="row mt-5">
              <div className="col-lg-7 col-md-7">

                <div id={homeStyle.furniture_left}>
                  <Swiper
                    slidesPerView={["auto"]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      nextEl: '.swiper-offering-button-next',
                      prevEl: '.swiper-offering-button-prev'
                    }}
                    grabCursor={true}
                    breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 1.5,
                          spaceBetween: 10,
                        },
                        800: {
                          slidesPerView: 2.5,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 2.93,
                          spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="myOfferingSwiper"
                  >
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func1} width={0} height={0} loading="lazy" alt="" />
                      </div>
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func2} width={0} height={0} loading="lazy" alt="" />
                      </div>
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func3} width={0} height={0} loading="lazy" alt="" />
                      </div>
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func4} width={0} height={0} loading="lazy" alt="" />
                      </div>
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func5} width={0} height={0} loading="lazy" alt="" />
                      </div>
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func6} width={0} height={0} loading="lazy" alt="" />
                        </div>
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-center">
                        <Image src={Func7} width={0} height={0} loading="lazy" alt="" />
                        <div className={homeStyle.furniture_title}>
                          <h5 className="mb-0">Chair</h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="col-lg-5 col-md-5">
              <div id={homeStyle.furniture_right}>
                  <div className="row">
                    <div className="col-lg-6">
                      <Image src={Women} width={0} height={0} loading="lazy" alt="" />
                    </div>
                    <div className="col-lg-6">
                      <Image src={Shopping} width={0} height={0} loading="lazy" alt="" />
                      <div className="d-flex justify-content-evenly align-items-center gap-3 mt-4">
                        <div>
                          <Link href="">
                            <MdArrowOutward />
                          </Link>
                        </div>
                        <div>
                          <h5>Raining Offers for Summer</h5>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
                        </div>
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
        <div id={homeStyle.beloved_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div>
                  <Image src={BelovedImg} width={0} height={0} alt=""/>
                </div>
              </div>
              <div className="col-lg-7">
                <div className={homeStyle.right_side}>
                  <h3>What we can do for our beloved customer</h3>
                  <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque pariatur adipisci possimus, harum, impedit nam a porro recusandae alias repudiandae sint iusto aut in dolores laborum deserunt totam rem.</p>

                  <ul className="mt-5">
                      <li>
                        <h4>01 - Interior Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cumque veritatis eius, molestias laborum eaque.</p>
                      </li>
                      <li>
                        <h4>02 - Consultant</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cumque veritatis eius, molestias laborum eaque.</p>
                      </li>
                      <li>
                        <h4>03 - Construction Consultant</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cumque veritatis eius, molestias laborum eaque.</p>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.customer_review}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <h3>What Our Customer Says</h3>
                <span className="swiper-button-next-unique">
                  <LuMoveLeft id={homeStyle.navigate} />
                </span>
                <span className="swiper-button-prev-unique">
                  <LuMoveRight id={homeStyle.navigate} />
                </span>

              </div>
              <div className="col-lg-8 col-md-7">
                <div>
                  <Swiper
                    slidesPerView={["auto"]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: '.swiper-button-next-unique',
                      prevEl: '.swiper-button-prev-unique'
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    breakpoints={{
                        300: {
                          slidesPerView: 1.5,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 1.5,
                          spaceBetween: 10,
                        },
                        800: {
                          slidesPerView: 1.5,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 1.3,
                          spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="myReviewSwiper"
                  >
                    <SwiperSlide>
                      <h5>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam natus a tempore similique quidem facere eos ad explicabo soluta."</h5>
                        <div className="mt-5">
                          <p className="mb-0">--Customer Name</p>
                          <p>Position</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h5>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam natus a tempore similique quidem facere eos ad explicabo soluta."</h5>
                      <div className="mt-5">
                        <p className="mb-0">--Customer Name</p>
                        <p>Position</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h5>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam natus a tempore similique quidem facere eos ad explicabo soluta."</h5>
                      <div className="mt-5">
                        <p className="mb-0">--Customer Name</p>
                        <p>Position</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h5>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam natus a tempore similique quidem facere eos ad explicabo soluta."</h5>
                        <div className="mt-5">
                          <p className="mb-0">--Customer Name</p>
                          <p>Position</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h5>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam natus a tempore similique quidem facere eos ad explicabo soluta."</h5>
                        <div className="mt-5">
                          <p className="mb-0">--Customer Name</p>
                          <p>Position</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h5>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nam natus a tempore similique quidem facere eos ad explicabo soluta."</h5>
                        <div className="mt-5">
                          <p className="mb-0">--Customer Name</p>
                          <p>Position</p>
                        </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.realize_idea}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <h3>You help realize your idea</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis assumenda ipsa expedita cupiditate.</p>

                <div className="mt-5">
                  <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <iframe width="100%" height="370" className="rounded-4" src="https://www.youtube.com/embed/8Lmp1Ncaa7Y?si=ZriXSO0Fe5gIRtob" title="Artevo Interior Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.project_done}>
          <div className="container">
            <div className="text-center mb-5">
              <h3>Project We Have Done</h3>
            </div>

            <ul className="nav nav-tabs justify-content-between" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="best-tab" data-bs-toggle="tab" data-bs-target="#best-tab-pane" type="button" role="tab" aria-controls="best-tab-pane" aria-selected="true">Best of All Time</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="living-tab" data-bs-toggle="tab" data-bs-target="#living-tab-pane" type="button" role="tab" aria-controls="living-tab-pane" aria-selected="false">Living Room</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="bed-tab" data-bs-toggle="tab" data-bs-target="#bed-tab-pane" type="button" role="tab" aria-controls="bed-tab-pane" aria-selected="false">Bed Room</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="dining-tab" data-bs-toggle="tab" data-bs-target="#dining-tab-pane" type="button" role="tab" aria-controls="dining-tab-pane" aria-selected="false">Dining Room</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="office-tab" data-bs-toggle="tab" data-bs-target="#office-tab-pane" type="button" role="tab" aria-controls="office-tab-pane" aria-selected="false">Office</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="others-tab" data-bs-toggle="tab" data-bs-target="#others-tab-pane" type="button" role="tab" aria-controls="others-tab-pane" aria-selected="false">Others</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="best-tab-pane" role="tabpanel" aria-labelledby="best-tab" tabIndex="0">
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Image src={Project1} width={0} height={0} loading="lazy" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h4>A Cozy California Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam modi ab id iusto eaque modi ab id iusto eaque?</p>

                    <div className="mt-4">
                      <p className="mb-0">
                        <b>Budget:</b> $5756
                      </p>
                      <p className="mb-0">
                        <b>Style:</b> Bohemian
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> Complete
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="living-tab-pane" role="tabpanel" aria-labelledby="living-tab" tabIndex="0">
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Image src={Project2} width={0} height={0} loading="lazy" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h4>A Cozy California Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam modi ab id iusto eaque modi ab id iusto eaque?</p>

                    <div className="mt-4">
                      <p className="mb-0">
                        <b>Budget:</b> $5756
                      </p>
                      <p className="mb-0">
                        <b>Style:</b> Bohemian
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> Complete
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="bed-tab-pane" role="tabpanel" aria-labelledby="bed-tab" tabIndex="0">
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Image src={Project3} width={0} height={0} loading="lazy" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h4>A Cozy California Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam modi ab id iusto eaque modi ab id iusto eaque?</p>

                    <div className="mt-4">
                      <p className="mb-0">
                        <b>Budget:</b> $5756
                      </p>
                      <p className="mb-0">
                        <b>Style:</b> Bohemian
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> Complete
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="dining-tab-pane" role="tabpanel" aria-labelledby="dining-tab" tabIndex="0">
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Image src={Project4} width={0} height={0} loading="lazy" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h4>A Cozy California Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam modi ab id iusto eaque modi ab id iusto eaque?</p>

                    <div className="mt-4">
                      <p className="mb-0">
                        <b>Budget:</b> $5756
                      </p>
                      <p className="mb-0">
                        <b>Style:</b> Bohemian
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> Complete
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="office-tab-pane" role="tabpanel" aria-labelledby="office-tab" tabIndex="0">
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Image src={Project5} width={0} height={0} loading="lazy" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h4>A Cozy California Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam modi ab id iusto eaque modi ab id iusto eaque?</p>

                    <div className="mt-4">
                      <p className="mb-0">
                        <b>Budget:</b> $5756
                      </p>
                      <p className="mb-0">
                        <b>Style:</b> Bohemian
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> Complete
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="others-tab-pane" role="tabpanel" aria-labelledby="others-tab" tabIndex="0">
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Image src={Project6} width={0} height={0} loading="lazy" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h4>A Cozy California Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam consectetur adipisicing elit. Rem illo quaerat quam voluptatem tempore nam modi ab id iusto eaque modi ab id iusto eaque?</p>

                    <div className="mt-4">
                      <p className="mb-0">
                        <b>Budget:</b> $5756
                      </p>
                      <p className="mb-0">
                        <b>Style:</b> Bohemian
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> Complete
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link href="" className="btn" id={homeStyle.button_style}>See Portfolio <span className="btn_white_icon"><MdArrowOutward /></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.reality}>
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-2 col-md-1"></div>
              <div className="col-lg-8 col-md-10">
                <h3>TRANSFORM IDEAS INTO REALITY</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quae dolorem enim officiis cumque. Deleniti tempora beatae quia debitis distinctio?</p>

                <div className={homeStyle.realityBtn}>
                  <Link href="">
                    <span className="btn_white_icon">
                      <MdArrowOutward />
                    </span>
                    <p className="mb-0">Contact Us</p>
                  </Link>
                </div>

              </div>
              <div className="col-lg-2 col-md-1"></div>
            </div>
            
            <div className="text-center">
              <Image src={RealityImg} width={0} height={0} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyle.awesome_projects}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <h3>Have an Awesome Projects ?</h3>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="text-end">
                  <Link href="" className="btn" id={homeStyle.button_style}>Let's Discuss <span className="btn_icon"><MdArrowOutward /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
