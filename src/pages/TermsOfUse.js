import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const TermsOfUse = () => {
  return (
    <>
      <SEO title='Terms Of Use' />
      <ColorSwitcher />
      <main className='main-wrapper'>
        <HeaderOne />
        <BreadCrumbOne title='Terms Of Use' page='Terms Of Use' />
        <div className='section-padding privacy-policy-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div className='terms-of-use-content'>
                  <div className='section-title'>
                    <h5 className='title'>Terms of Use</h5>
                  </div>
                  <p>
                    These Terms of Use were last updated on September 10th,
                    2021.
                  </p>

                  <h4>Introduction</h4>
                  <p>
                    Welcome to Codechip! By accessing or using our website, you
                    agree to comply with and be bound by these Terms of Use.
                    Please read them carefully.
                  </p>
                  <h4>Use of the Site</h4>
                  <p>
                    You agree to use the site only for lawful purposes and in a
                    way that does not infringe the rights of, restrict, or
                    inhibit anyone else's use and enjoyment of the site.
                    Prohibited behavior includes harassing or causing distress
                    or inconvenience to any other user, transmitting obscene or
                    offensive content, or disrupting the normal flow of dialogue
                    within our site.
                  </p>
                  <h4>Intellectual Property</h4>
                  <p>
                    All content included on this site, such as text, graphics,
                    logos, images, and software, is the property of Codechip or
                    its content suppliers and is protected by international
                    copyright laws. Unauthorized use or reproduction of this
                    content is prohibited.
                  </p>
                  <h4>Account Registration</h4>
                  <p>
                    To access certain features of the site, you may be required
                    to register an account. You agree to provide accurate,
                    current, and complete information during the registration
                    process and to update such information to keep it accurate,
                    current, and complete. You are responsible for safeguarding
                    your password and for all activities that occur under your
                    account.
                  </p>
                  <h4>User Conduct</h4>
                  <p>
                    You agree not to use the site to upload, post, email,
                    transmit, or otherwise make available any content that is
                    unlawful, harmful, threatening, abusive, harassing,
                    defamatory, vulgar, obscene, invasive of another's privacy,
                    hateful, or racially, ethnically, or otherwise
                    objectionable.
                  </p>
                  <h4>Termination</h4>
                  <p>
                    We reserve the right to terminate or suspend your access to
                    our site immediately, without prior notice or liability, for
                    any reason, including, without limitation, if you breach the
                    Terms of Use.
                  </p>
                  <h4>Limitation of Liability</h4>
                  <p>
                    In no event shall Codechip, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses,
                    resulting from (i) your use or inability to use the site;
                    (ii) any unauthorized access to or use of our servers and/or
                    any personal information stored therein; (iii) any
                    interruption or cessation of transmission to or from our
                    site; (iv) any bugs, viruses, trojan horses, or the like
                    that may be transmitted to or through our site by any third
                    party; (v) any errors or omissions in any content or for any
                    loss or damage incurred as a result of your use of any
                    content posted, emailed, transmitted, or otherwise made
                    available through the site; and/or (vi) the defamatory,
                    offensive, or illegal conduct of any third party.
                  </p>
                  <h4>Governing Law</h4>
                  <p>
                    These Terms of Use shall be governed and construed in
                    accordance with the laws of the jurisdiction in which
                    Codechip operates, without regard to its conflict of law
                    provisions.
                  </p>
                  <h4>Changes to the Terms of Use</h4>
                  <p>
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms of Use at any time. If a revision is
                    material, we will try to provide at least 30 days' notice
                    prior to any new terms taking effect. What constitutes a
                    material change will be determined at our sole discretion.
                  </p>
                  <h4>Contact Us</h4>
                  <p>
                    If you have any questions about these Terms of Use, please
                    contact us at{" "}
                    <a href='mailto:mansabmir@codechip.in'>
                      Mansabmir@Codechip.in
                    </a>
                    .
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

export default TermsOfUse;
