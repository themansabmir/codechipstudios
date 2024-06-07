import React from "react";
import FormOne from "../contact/FormOne";

const AboutOne = () => {
  return (
    <section className='section section-padding-equal bg-color-light'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-us'>
              <div className='section-heading heading-left mb-0'>
                <span className='subtitle'>About Us</span>
                <h2 className='title mb--40'>We Design, Code, and Develop.</h2>
                <p>
                  We excel in crafting elegant, efficient, and innovative
                  solutions. Our team is dedicated to turning your vision into
                  reality through meticulous design, seamless code, and robust
                  development practices.
                </p>
                <p>
                  Our expertise spans various domains, ensuring that we deliver
                  comprehensive services tailored to your specific needs. Join
                  us in creating impactful and user-centric experiences.
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-5 col-lg-6 offset-xl-1'>
            <div className='contact-form-box'>
              <h3 className='title'>Get a free Keystroke quote now</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
      <ul className='shape-group-6 list-unstyled'>
        <li className='shape shape-1'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt='Bubble'
          />
        </li>
        <li className='shape shape-2'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt='line'
          />
        </li>
        <li className='shape shape-3'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt='line'
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutOne;
