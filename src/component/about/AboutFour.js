import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
      <div className='section section-padding case-study-featured-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-7 col-lg-6'>
              <div className='case-study-featured-thumb text-start'>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/others/case-study-4.png"
                  }
                  alt='travel'
                />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <div className='case-study-featured'>
                <div className='section-heading heading-left'>
                  <span className='subtitle'>Who we are</span>
                  <h2 className='title'>
                    Building software for world changers
                  </h2>
                  <p>
                    At our core, we are dedicated to creating innovative
                    software solutions for visionaries who are shaping the
                    future. Our mission is to empower these change-makers with
                    cutting-edge technology that drives their success.
                  </p>
                  <p>
                    With a passion for excellence and a focus on results, we
                    strive to build software that is not only functional but
                    also transformative. Our goal is to help you achieve your
                    mission and make a lasting impact on the world.
                  </p>
                  <Link to='/contact' className='axil-btn btn-fill-primary btn-large'>
                    Discuss Project
                  </Link>
                </div>
                <div className='case-study-counterup'>
                  <div className='single-counterup'>
                    <h2 className='count-number'>
                      <TrackVisibility once>
                        {({ isVisible }) => (
                          <span className='number count'>
                            {isVisible ? (
                              <CountUp end='5' duration={1} />
                            ) : null}
                          </span>
                        )}
                      </TrackVisibility>
                      <span className='symbol'>+</span>
                    </h2>
                    <span className='counter-title'>Years on the market</span>
                  </div>
                  <div className='single-counterup'>
                    <h2 className='count-number'>
                      <TrackVisibility once>
                        {({ isVisible }) => (
                          <span className='number count'>
                            {isVisible ? (
                              <CountUp end='45' duration={1} />
                            ) : null}
                          </span>
                        )}
                      </TrackVisibility>
                      <span className='symbol'>+</span>
                    </h2>
                    <span className='counter-title'>
                      Projects delivered so far
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutFour;