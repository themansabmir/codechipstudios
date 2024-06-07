import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title='Privacy Policy' />
      <ColorSwitcher />
      <main className='main-wrapper'>
        <HeaderOne />
        <BreadCrumbOne title='Privacy Policy' page='Privacy Policy' />
        <div className='section-padding privacy-policy-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div className='privacy-policy-content'>
                  <div className='section-title'>
                    <h5 className='title'>
                      This Privacy policy was published on September 10th, 2021.
                    </h5>
                  </div>
                  <h4>GDPR compliance</h4>
                  <p>
                    We are committed to protecting your privacy and ensuring
                    that your personal data is handled in a safe and responsible
                    manner. This policy outlines how we comply with the General
                    Data Protection Regulation (GDPR).
                  </p>
                  <h4>About Codechip</h4>
                  <p>
                    Codechip is dedicated to providing high-quality services and
                    products to our users. For any questions regarding our
                    privacy practices, please contact us at{" "}
                    <a href='mailto:mansabmir@Codechip.com'>
                      mansabmir@codechip.in
                    </a> |
                    <a href='mailto:saurabh@Codechip.com'>
                      saurabh@codechip.in
                    </a>
                    .
                  </p>
                  <h4>When we collect personal data about you</h4>
                  <ul>
                    <li>When you visit our website.</li>
                    <li>When you register for an account.</li>
                    <li>When you subscribe to our newsletter.</li>
                    <li>When you contact our customer service team.</li>
                  </ul>
                  <h4>Why we collect and use personal data</h4>
                  <p className='mb--20'>
                    We collect and use your personal data to provide, improve,
                    and personalize our services. This includes:
                  </p>
                  <ul>
                    <li>Processing your orders and managing your account.</li>
                    <li>
                      Communicating with you about our services and promotions.
                    </li>
                    <li>
                      Improving our website and services based on your feedback.
                    </li>
                    <li>
                      Complying with legal obligations and resolving disputes.
                    </li>
                  </ul>
                  <h4>Type of personal data collected</h4>
                  <p>The types of personal data we collect include:</p>
                  <ul>
                    <li>
                      Contact details such as name, email address, and phone
                      number.
                    </li>
                    <li>Account details such as username and password.</li>
                    <li>
                      Usage data such as browsing history and interaction with
                      our website.
                    </li>
                  </ul>
                  <h4>Information we collect automatically</h4>
                  <p>
                    When you visit our website, we may collect information
                    automatically using cookies and similar technologies. This
                    includes:
                  </p>
                  <ul>
                    <li>IP address and browser type.</li>
                    <li>Pages visited and time spent on our site.</li>
                    <li>Referring page and exit page.</li>
                    <li>Clickstream data.</li>
                  </ul>
                  <h4>The use of cookies and web beacons</h4>
                  <p className='mb--20'>
                    We use cookies and web beacons to enhance your experience on
                    our site. Cookies are small data files stored on your
                    device, and web beacons are digital images used to track
                    user behavior. These tools help us understand how our site
                    is used and improve our services.
                  </p>
                  <h4>How long we keep your data</h4>
                  <p className='mb--20'>
                    We store personal data for as long as necessary to fulfill
                    the purposes for which it was collected. This period is
                    determined by considering legal obligations, resolving
                    disputes, and ensuring the security of our services.
                  </p>
                  <h4>Your rights to your personal data</h4>
                  <p>
                    You have the right to access, correct, delete, or restrict
                    the processing of your personal data. You can also withdraw
                    your consent at any time.
                  </p>
            
                  <h4>Changes to this Privacy Policy</h4>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify you of any
                    significant changes by posting the new Privacy Policy on our
                    website. Your continued use of our services after any
                    changes take effect constitutes your acceptance of the new
                    policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CtaLayoutOne />
        <FooterOne parentClass='' />
      </main>
    </>
  );
};

export default PrivacyPolicy;
