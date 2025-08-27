import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Keyboard } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import heroImage from "../assets/Hero-removebg-preview.png";

import mailIcon from "../assets/mail-icon.png";

import slideImg1 from "../assets/slide-icon-1.png";
import slideImg2 from "../assets/slide-icon-2.png";
import slideImg3 from "../assets/slide-icon-3.png";
import slideImg4 from "../assets/slide-icon-4.png";
import slideImg5 from "../assets/slide-icon-5.png";
import slideImg6 from "../assets/slide-icon-6.png";
import slideImg7 from "../assets/slide-icon-7.png";

import "../index.css";
import "../App.css";

import test1 from "../assets/AV1.jpg";
import test2 from "../assets/test-2.jpeg";
import test3 from "../assets/test-3.jpeg";

import blogImg1 from "../assets/blog-01.jpeg";
import blogImg2 from "../assets/blog-02.jpeg";
import blogImg3 from "../assets/blog-03.jpeg";

import project1 from "../assets/Career-Story_edited.jpg";
import project2 from "../assets/project.jpg";

import icon1 from "../assets/react-icon.png";
import icon2 from "../assets/nodejs-removebg-preview.png";
import icon3 from "../assets/Django-removebg-preview.png";
import icon4 from "../assets/Tailwind-removebg-preview.png";
import icon5 from "../assets/python-removebg-preview.png";
import icon6 from "../assets/Postgre-removebg-preview.png";
import icon7 from "../assets/express-removebg-preview.png";

function Index({ menuOpen }) {
  const careerList = [
    { title: "SDE Intern", Company: "BlueStock", year: "Jul 2025 - Aug 2025" },
  ];

  const tools = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

  const tags = [
    "Impact",
    "Innovation",
    "collaboration",

    "development",
    "creativity",
    "innovation",
    "technology",
    "teamwork",
    "communication",
  ];

  return (
    <>
      <span className="bg-elm fixed top-0 left-[20%] h-[100vh] w-[1px]  bg-[--thin-border] z-[1] "></span>
      <span className="bg-elm fixed top-0 left-[50%] h-[100vh] w-[1px]  bg-[--thin-border] z-[1] "></span>
      <span className="bg-elm fixed top-0 left-[80%] h-[100vh] w-[1px]  bg-[--thin-border] z-[1] "></span>
      {/* Hero Section */}
      <div className="lg:px-[12%] px-[8%] py-[150px] pt-0 hero" id="home" >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 text-white rounded-lg pt-[150px] hero-content">
            <div className="flex flex-col justify-between h-[250px] hero-content-box">
              <div className="flex gap-1 text-xl ">
                I'm
                <h2 className="text-9xl font-semibold font-jakarta hero-text">
                  {" "}
                  Anurag{" "}
                  <span className="text-[--primary-color] font-jakarta hero-sec-text">
                    Parashar
                  </span>
                </h2>
              </div>

              <div className="hero-bottom-title ">
                <h5 className="text-xl text-gray-400 ">A Passionate</h5>
                <h2 className="text-4xl mt-1 font-jakarta font-semibold  ">
                  Web-Developer
                </h2>
              </div>
            </div>
          </div>

          <div className="flex-1 text-white p-6 rounded-lg hero-image">
            <img src={heroImage} alt="" className="w-full h-full hero-img" />
          </div>
        </div>
      </div>
      {/* Hero Marquee */}
      <div
        className={`marquee-box w-full bg-[--primary-color]  py-3 ${
          menuOpen ? "marquee_fix" : ""
        }`}
      >
        <marquee behavior="alternate" direction="">
          <div className="marquee-content flex flex-row gap-[200px]">
            <div className="flex items-center gap-3 ">
              <img src={slideImg6} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Data & AI</h2>
                <p className="text-md">ML Models That Predict</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={slideImg7} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Innovation First</h2>
                <p className="text-md">From Idea to Impact</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={slideImg1} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Full-Stack Developer</h2>
                <p className="text-md">React | Node | Django</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={slideImg2} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Collaboration</h2>
                <p className="text-md">Agile Team Player</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={slideImg3} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Dream → Deploy</h2>
                <p className="text-md">From Vision to Reality</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={slideImg4} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Certified Skills</h2>
                <p className="text-md">AWS | Data Mining</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={slideImg5} className="w-20 h-20 invert " alt="" />
              <div>
                <h2 className="text-4xl">Bluestock Journey</h2>
                <p className="text-md">Scalable IPO Platform</p>
              </div>
            </div>
          </div>
        </marquee>
      </div>

      {/*Title Section of Projects */}
      <div className="relative text-center w-full py-[88px] pt-0" id="projects">
        <span className="section-subtitle py-1 px-3 text-[#ec4634] inline-block border border-[#393939] bg-[#161616] rounded-full text-sm font-normal md-6">
          My Projects
        </span>

        <Splide
          options={{
            type: "loop",
            drag: false,
            arrow: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          className="w-full"
          aria-label="Smooth Scrolling Work Slider"
        >
          <SplideSlide>
            <div className="section-title"> My Projects </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> My Projects </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> My Projects </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> My Projects </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> My Projects </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> My Projects </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* Projects Section */}
      <div className="projects w-full lg:px-[12%] px-[8%] pb-[150px] md:pt-[50px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[EffectCoverflow, Keyboard]}
          className="w-full project-swiper"
        >
          <SwiperSlide key="cinelist" className="max-w-[300px]">
            <div className="project-item w-full h-full">
              <div className="project-image border border-[#393939] bg-[#161616] rounded-xl">
                <div className="p-image rounded-xl overflow-hidden h-[200px] bg-gray-800">
                  <img
                    src={project1}
                    alt="CineList App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="project-arrow">
                  <a
                    href="https://cinelistapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path d="M99.5,19v80.5H73.1V45.4L19,99.5L0,81l54.1-54.1H0.5V0.5H81L99.5,19z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content text-white pt-5">
                <h3 className="text-3xl font-bold pb-2">CineList App</h3>
                <p className="text-[#a2a2a2] w-full lg:w-[50%]">
                  A movie listing web app with search, trending, and favorites.
                  Built with React and OMDB API.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key="Laptop-predictor" className="max-w-[300px]">
            <div className="project-item w-full h-full">
              <div className="project-image border border-[#393939] bg-[#161616] rounded-xl">
                <div className="p-image rounded-xl overflow-hidden h-[200px] bg-gray-800">
                  <img
                    src={project2}
                    alt="Laptop Price Predictor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="project-arrow">
                  <a
                    href="https://github.com/STARRSOUL/Laptop-Price-Predictor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path d="M99.5,19v80.5H73.1V45.4L19,99.5L0,81l54.1-54.1H0.5V0.5H81L99.5,19z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content text-white pt-5">
                <h3 className="text-3xl font-bold pb-2">
                  Laptop Price Predictor
                </h3>
                <p className="text-[#a2a2a2] w-full lg:w-[50%]">
                  A platform to predict laptop prices based on specifications.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/*info*/}
      <div className="text-white font-[var(--Bricolage-font)] px-[8%] lg:px-[12%] py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 relative z-5" id="skills">
        <div className="flex flex-col w-full gap-3">
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_25px_#ec463426]">
            <h4 className="text-sm text-gray-400 mb-5">My Career Growth</h4>
            <div className="space-y-5 ">
              {careerList.map((job, i) => (
                <div key={i} className="flex justify-between text-gray-200">
                  <span className="text-xl font-bold">{job.title}</span>
                  <div className="text-right text-sm text-gray-500">
                    <p>{job.Company}</p>
                    <p>{job.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" flex items-center justify-centerpy-2 px-5 bg-gradient-to-r  w-full from-[#ec4634] to-[#ff5e3a] shadow-lg rounded-xl ">
            <Swiper
              spaceBetween={150}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                575: { slidesPerView: 3 },
                640: { slidesPerView: 3 },
                767: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              modules={[Autoplay]}
              className="text-white uppercase px-2"
            >
              {tags.map((tag, i) => (
                <SwiperSlide
                  key={i}
                  className="flex text-2xl font-semibold items-center justify-center hover:scale-105 transition duration-300 "
                >
                  {tag}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { count: 95, label: "Projects Done" },
              { count: 15, label: "Years On Field" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-3  text-center  shadow-[0_0_25px_#ec463426] "
              >
                <h3 className="text-4xl font-extrabold text-white drop-shadow-[0_0_25px_#ec463426]">
                  <CountUp end={item.count} duration={2} />+
                </h3>
                <p className="text-lg mt-2 text-gray-400 ">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/*Right Side*/}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-2 overflow-hidden shadow-[0_0_25px_#ec463426]">
              <iframe
                title="Map location"
                height="100%"
                width="100%"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale contrast-125 brightness-90 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3690958095594!2d80.03671387372908!3d12.81940931819939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76c4db87a47%3A0x341fa471f8027d68!2sSRM%20University%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1756035871719!5m2!1sen!2sin"
                frameborder="0"
              ></iframe>
             </div>

            <div className="bg-[#1a1a1a] p-2 border border-gray-700 rounded-2xl  text-center flex flex-col items-center justify-center shadow-[0_0_25px_#ec463426] contain-content gap-2">
              <img src={mailIcon} alt="" className="w-[40%] h-[40%]" />

              <a href="mailto:anuragprasher7@gmail.com" className="text-white  text-xs md:text-sm  contain-content">
                anuragprasher7@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-4 shadow-[0_0_25px_#ec463426] backdrop-blur-md">
            <div className="mb-4">
              <h3 className="text-sm uppercase tracking-wide text-gray-400">
                Technologies in use
              </h3>
              <h3 className="text-xl sm:text-3xl font-bold  text-white">
                Apps Created with Accuracy
              </h3>
            </div>

            <div className="flex flex-wrap justify-start items-center gap-3 mt-3">
              {tools.map((icon, i) => (
                <div
                  key={i}
                  className="cursor-pointer p-34 rounded-xl transition-all duration-300 flex justify-center items-center shadow-inner hover:scale-105"
                >
                  <img
                    src={icon}
                    alt={`Tool ${i + 1}`}
                    className="w-10 h-10 object-contain transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*Resume*/}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 flex justify-between items-center shadow-[0_0_25px_#ec463426]">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Resume
              </p>
              <h3 className="text-xl sm:text-3xl font-bold  text-white">
                Download My Resume
              </h3>
            </div>
            <a href="/Anurag Parashar.pdf" download>
              <div className="text-[#ec4634] shadow-[0_0_25px_#ec463440] text-2xl h-[50px] w-[50px] flex justify-center items-center rounded-full border border-[#ec4634] hover:bg-[#ec4634] hover:text-white transition duration-300 cursor-pointer ">
                <i className="ri-download-2-line"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/*Title Section of Testimonial */}
      <div className="relative text-center w-full py-[88px] pt-0" id="testimonials">
        <span className="section-subtitle py-1 px-3 text-[#ec4634] inline-block border border-[#393939] bg-[#161616] rounded-full text-sm font-normal md-6">
          What They Express
        </span>

        <Splide
          options={{
            type: "loop",
            drag: false,
            arrow: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          className="w-full"
          aria-label="Smooth Scrolling Work Slider"
        >
          <SplideSlide>
            <div className="section-title"> Testimonial</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> Testimonial </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> Testimonial </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> Testimonial </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> Testimonial</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> Testimonial </div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title"> Testimonial </div>
          </SplideSlide>
        </Splide>
      </div>

      {/* Testimonial Section */}
      <div className="px-[8%] lg:px-[12%]">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 1800 }}
          breakpoints={{
            1191: { slidesPerView: 2 },
            991: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="w-full"
          style={{ padding: "20px" }}
        >
          <SwiperSlide>
            <div className="shadow-[0_0_25px_#ec463426] h-300 p-12 flex flex-col justify-between text-white rounded-3xl relative overflow-hidden ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={test1}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full ring-2 ring-red-500 ring-offset-[#121212]"
                  />
                  <div>
                    <h3 className=" font-semibold">
                      Aastha Vats,{" "}
                      <span className="text-gray-400 font-normal">
                        {"  "}Software Developer.
                      </span>
                    </h3>
                  </div>
                </div>

                <i className="bi bi-quote text-[#ec4634] text-5xl "></i>
              </div>
              <blockquote className="mt-10 text-2xl text-gray-300 test-pere leading-snug font-medium">
                "Anurag is a highly skilled developer with a keen eye for
                detail. His ability to solve complex problems and deliver
                high-quality work is truly impressive."
              </blockquote>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_0_25px_#ec463426] h-300 p-12 flex flex-col justify-between text-white rounded-3xl relative overflow-hidden ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={test2}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full ring-2 ring-red-500 ring-offset-[#121212]"
                  />
                  <div>
                    <h3 className=" font-semibold">
                      Andrew,{" "}
                      <span className="text-gray-400 font-normal">
                        {"  "}Software Developer.
                      </span>
                    </h3>
                  </div>
                </div>

                <i className="bi bi-quote text-[#ec4634] text-5xl "></i>
              </div>
              <blockquote className="mt-10 text-2xl text-gray-300 test-pere leading-snug font-medium">
                "Anurag have a remarkable talent for coding and a deep
                understanding of software development principles. His work ethic
                and dedication to delivering top-notch solutions make him an
                invaluable asset to any team."
              </blockquote>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_0_25px_#ec463426] h-300 p-12 flex flex-col justify-between text-white rounded-3xl relative overflow-hidden ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={test3}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full ring-2 ring-red-500 ring-offset-[#121212]"
                  />
                  <div>
                    <h3 className=" font-semibold">
                      Suzan,{" "}
                      <span className="text-gray-400 font-normal">
                        {"  "}Software Developer.
                      </span>
                    </h3>
                  </div>
                </div>

                <i className="bi bi-quote text-[#ec4634] text-5xl "></i>
              </div>
              <blockquote className="mt-10 text-2xl text-gray-300 test-pere leading-snug font-medium">
                "Anurag is a true professional in every sense of the word. His
                technical expertise, combined with his excellent communication
                skills, makes him a valuable team member."
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Index;
