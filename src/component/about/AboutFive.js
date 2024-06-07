import React from "react";
import { Link } from "react-router-dom";

const AboutFive = () => {
  return (
    <div className='section-padding-equal'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <div className='about-team'>
              <div className='thumbnail'>
                <img
                  src={process.env.PUBLIC_URL + "/images/about/about-2.png"}
                  alt='thumbnail'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='about-team'>
              <div className='section-heading heading-left'>
                <span className='subtitle'>Our Team</span>
                <h2>Alone we can do so little; together we can do so much.</h2>
                <p>
                  Each member of our team brings unique skills, perspectives,
                  and talents to the table. Together, we form a cohesive unit
                  driven by a shared passion for excellence. By combining our
                  individual strengths, we can tackle challenges with ingenuity
                  and achieve remarkable results. With us, you're not just
                  hiring a team of experts – you're gaining a trusted partner
                  dedicated to realizing your vision and maximizing your success
                </p>
                <Link to='/team' className='axil-btn btn-large btn-fill-primary'>
                  Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
