import React from "react";
import FormOne from "../contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

const icons = [<FaCompress />, <FaCode />, <FaGlobe />];
const AboutTwo = ({ serviceName, serviceDescription, accordionData }) => {
  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='why-choose-us'>
              <div className='section-heading heading-left'>
                <span className='subtitle'>About Service</span>
                <h3 className='title'>Why {serviceName} matters?</h3>
                <p>{serviceDescription}</p>
              </div>
              <Accordion defaultActiveKey='1'>
                {accordionData && accordionData.map((accordionItem, index) => {
                  const { accordionHeader, accordionDescription } =
                    accordionItem;
                  return (
                    <Accordion.Item eventKey={`${index + 1}`} key={index}>
                      <Accordion.Header>
                        {icons[index]} {accordionHeader}
                      </Accordion.Header>
                      <Accordion.Body>{accordionDescription}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>

              {/* <Accordion defaultActiveKey='1'>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <FaCompress /> Strategy
                  </Accordion.Header>
                  <Accordion.Body>
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at
                    enim gravida pellentesque.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <FaCode /> Design
                  </Accordion.Header>
                  <Accordion.Body>
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at
                    enim gravida pellentesque.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    <FaGlobe /> Development
                  </Accordion.Header>
                  <Accordion.Body>
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at
                    enim gravida pellentesque.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </div>
          </div>
          <div className='col-xl-5 col-lg-6 offset-xl-1'>
            <div className='contact-form-box shadow-box mb--30'>
              <h3 className='title'>Get a free Keystroke quote now</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
