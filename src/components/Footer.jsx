import React from "react";
import "../index.css";



function Footer() {

  const Ig = "https://www.instagram.com/anuragp.30?utm_source=qr&igsh=MTdwamtheXJpajg4Mw==";
  const Linkedin = "https://www.linkedin.com/in/anurag-parashar-275183224";
  const Github = "https://github.com/STARRSOUL";
  const Twitter = "https://x.com/Anurag1Parashar";


  const socialLinks = [
  { icon: "ri-instagram-line", url: Ig },
  { icon: "ri-github-line", url: Github },
  { icon: "ri-linkedin-line", url: Linkedin },
  { icon: "ri-twitter-line", url: Twitter },
];

 


  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-bold animate-fadeInUp"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {char}
      </span>
    ));
  return (
    <>
      <section className="bg-[var(--body-color)] text-[var(--text-color)] font-[var(--Plus-Jakarta-font)] py-28 lg:px-[12%] px-[8%]">
        <div className=" mx-auto space-y-16 footer-input text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Let&apos;s Work Together
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
            <h2 className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-[var(--primary-color)] drop-shadow-[0_0_15px_var(--primary-color)] leading-tight tracking-tight">
              {splitText("Mail Me!")}
            </h2>
            <form
              action="https://formspree.io/f/meoljkod"
              method="POST"
              className="flex flex-row  gap-2 w-full max-w-7xl border border-[var(--primary-color)] rounded-full p-2 transition-all duration-300 hover:shadow-[0_0_15px_var(--primary-color)]"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className=" w-full px-6 py-4  bg-transparent text-sm sm:text-sm focus:outline-none placeholder:text-gray-400 "
              />
              <input
                type="text"
                name="Text"
                placeholder="Enter your Message"
                required
                className=" w-full px-6 py-4  bg-transparent text-sm sm:text-sm focus:outline-none placeholder:text-gray-400 "
              />
              <button
                type="submit"
                className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-full sm:text-xl font-semibold hover:shadow-[0_0_5px_var(--white-color)] transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
          <div className="text-base text-green-500 mt-4"></div>
        </div>
      </section>

      {/* footer section end */}

      <footer className="bg-[var(--body-color)] text-white font-[var(--Plus-Jakarta-font)] py-[8%] lg:px-[12%]  pt-20 pb-10 ">
        <div className="grid grid-cols-1 md:flex-cols gap-8 border-b border-gray-700 mx-auto pb-10 tablet-center-footer">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                <div
                  key={index}
                  className="social-icons rounded-full border border-[var(--primary-color)] text-2xl hover:bg-[var(--primary-color)] hover:text-white hover:shadow-[0_0_15px_ec4634] h-[50px] w-[50px] flex items-center justify-center cursor-pointer transition-all duration-300 "
                >
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                </a>
              ))}
            </div>
            {/*MENU*/}
            <div className="text-[1rem] sm:text-[1.2rem] flex flex-row gap-2 text-gray-300">
              {["Home", "About Me", "Projects", "Contact"].map(
                (item, index, arr) => (
                  <React.Fragment key={item}>
                    <span className="hover:text-[var(--primary-color)] cursor-pointer transition-colors duration-300">
                      {item}
                    </span>
                    {index < arr.length - 1 && <span>/</span>}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
          
        </div>
          <div className="text-center text-gray-500 mt-6 text-sm sm:text-base tracking-wide">
            &copy; {new Date().getFullYear()}. All rights reserved. By <a href="https://github.com/STARRSOUL" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] font-bold hover:underline">StarSoul</a>
          </div>

      </footer>
    </>
  );
}

export default Footer;
