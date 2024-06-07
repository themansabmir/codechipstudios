import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
  FaEnvelopeOpen,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-social-link'>
            <ul className='list-unstyled'>
              <li>
                <Link to='https://facebook.com/'>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to='https://twitter.com/'>
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to='https://www.pinterest.com/'>
                  <FaPinterestP />
                </Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/'>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to='https://www.instagram.com/'>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to='https://vimeo.com/'>
                  <FaVimeoV />
                </Link>
              </li>
              <li>
                <Link to='https://dribbble.com/'>
                  <FaDribbble />
                </Link>
              </li>
              <li>
                <Link to='https://www.behance.net/'>
                  <FaBehance />
                </Link>
              </li>
              <li>
                <Link to='https://www.tiktok.com/en/'>
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-main'>
          <div className='row'>
            <div className='col-xl-6 col-lg-5'>
              <div className='footer-widget border-end'>
                <div className='footer-newsletter'>
                  <h2 className='title'>Get in touch!</h2>
                  <p>Just drop your email and subscribe to our newsletter</p>
                  <form>
                    <div className='input-group'>
                      <span className='mail-icon'>
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email address'
                      />
                      <button className='subscribe-btn' type='submit'>
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-7'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='footer-widget'>
                    <h6 className='widget-title'>Services</h6>
                    <div className='footer-menu-link'>
                      <ul className='list-unstyled'>
                        {getServiceData.slice(0, 6).map((data, index) => (
                          <li key={index}>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/service-details/${slugify(data.title)}`
                              }
                            >
                              {data.title}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link to={process.env.PUBLIC_URL + `/service-two`}>
                            All Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className='col-sm-3'>
                  <div className='footer-widget'>
                    <h6 className='widget-title'>Resourses</h6>
                    <div className='footer-menu-link'>
                      <ul className='list-unstyled'>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                            Blog
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/case-study"}>
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={process.env.PUBLIC_URL + "/project-grid-one"}
                          >
                            Portfolio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className='col-sm-3'>
                  <div className='footer-widget'>
                    <h6 className='widget-title'>Support</h6>
                    <div className='footer-menu-link'>
                      <ul className='list-unstyled'>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/contact"}>
                            Contact
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                            Terms of Use
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='footer-copyright'>
                <span className='copyright-text'>
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <Link to={process.env.PUBLIC_URL + "/"}>CODECHIP</Link>
                </span>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='footer-bottom-link'>
                <ul className='list-unstyled'>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
