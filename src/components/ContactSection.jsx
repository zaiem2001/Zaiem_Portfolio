import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import "./contactSection.css";
import ScrollBar from "./ScrollBar";

const links = [
  {
    id: "l1",
    title: "insta",
    href: "https://www.instagram.com/zai3m/",
    img: "/assets/Zaiem-portfolio/instagram.png",
  },
  {
    id: "l2",
    title: "github",
    href: "https://github.com/zaiem2001",
    img: "/assets/Zaiem-portfolio/github.png",
  },
  {
    id: "l3",
    title: "linkedIn",
    href: "https://www.linkedin.com/in/zaiem-munshi/",
    img: "/assets/Zaiem-portfolio/linkedin.png",
  },
];

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__left">
        <div className="contact__intro">
          <img src="/assets/Zaiem-portfolio/contact.svg" alt="scroll" />
          <div className="contact__title">
            contact
            <span>
              <svg
                width="217"
                height="80"
                viewBox="0 0 217 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 61.3325C50.7392 87.9429 90.019 91.114 121.458 83.2084C184.158 67.442 210.741 16.391 213 4"
                  stroke="#CBCBCB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <span className="contact__divider">
          <svg
            width="3"
            height="500"
            viewBox="0 0 3 746"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 0.983521L1.5 745.016"
              stroke="#5B5B5B"
              strokeWidth="1"
            />
          </svg>
        </span>
      </div>{" "}
      <div className="contact__right">
        <div className="contact__container">
          <div className="contact__name">
            <span>name : </span>
            <span>Zaiem munshi</span>
          </div>

          <div className="contact__email">
            <span>email : </span>
            <span>zaiem.180410116045@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="contact__square">
        <svg
          width="1640"
          height="300"
          viewBox="0 0 1920 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 255V191H122.125V31H244.25V63H366.375V223H488.5V95H610.625V191H732.75V255H854.875H977V95H1099.12H1221.25V159H1343.38V63H1465.5V127H1587.62V191H1709.75H1831.88V319H1954V-1H1831.88H1709.75H1587.62H1465.5H1343.38H1221.25H1099.12H977H854.875H732.75H610.625H488.5H366.375H244.25H122.125H0V255Z"
            fill="#273036"
          />
        </svg>
      </div>
      <div className="contact__square__top">
        <svg
          width="1640"
          height="300"
          viewBox="0 0 1920 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 255V191H122.125V31H244.25V63H366.375V223H488.5V95H610.625V191H732.75V255H854.875H977V95H1099.12H1221.25V159H1343.38V63H1465.5V127H1587.62V191H1709.75H1831.88V319H1954V-1H1831.88H1709.75H1587.62H1465.5H1343.38H1221.25H1099.12H977H854.875H732.75H610.625H488.5H366.375H244.25H122.125H0V255Z"
            fill="#273036"
          />
        </svg>
      </div>
      {links.map((link, idx) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          initial={{
            z: inView ? "-80vw" : 0,
            scale: inView ? 0 : 1,
          }}
          animate={{
            z: inView ? 0 : "-80vw",
            scale: inView ? 1 : 0,
          }}
          transition={{
            type: "spring",
            duration: inView ? 0.2 : 0,
            bounce: 0.3,
            delay: idx * 0.3,
          }}
        >
          {" "}
          <img src={link.img} alt={link.title} />
        </motion.a>
      ))}
      <ScrollBar />
    </section>
  );
};

export default ContactSection;
