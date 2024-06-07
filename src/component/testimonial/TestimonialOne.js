import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import TestimonialPropOne from "./TestimonialPropOne";

const TestimonialOne = () => {
  return (
    <div className='section section-padding'>
      <div className='container'>
        <SectionTitle
          subtitle='Testimonial'
          title='From getting started'
          description='Our clients share their experiences of how easy it was to get started with our service. From the initial setup to the first successful use, they highlight the simplicity and support that made the process seamless.'
          textAlignment='heading-left'
          textColor=''
        />
        <div className='row'>
          <TestimonialPropOne colSize='col-lg-4' itemShow='6' />
        </div>
      </div>
      <ul className='shape-group-4 list-unstyled'>
        <li className='shape-1'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
            alt='Bubble'
          />
        </li>
      </ul>
    </div>
  );
};

export default TestimonialOne;
