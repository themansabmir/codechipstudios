import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

// const Datas = [
//     {
//         id: 1,
//         title: "Exceed clients’ and colleagues’ expectations",
//         para: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit."
//     },
//     {
//         id: 2,
//         title: "Take ownership and question the status quo in a constructive manner",
//         para: "Nulla facilisi. Vestibulum vel urna eget magna condimentum faucibus. Sed arcu mi, semper sed suscipit vel, rhoncus vel justo."
//     },
//     {
//         id: 3,
//         title: "Be brave, curious and experiment – learn from all successes and failures",
//         para: "Quisque aliquet quis est in faucibus. Aenean eget lorem ac risus placerat convallis eget a eros. Suspendisse dignissim ultrices tellus, id placerat mauris lacinia a."
//     },
//     {
//         id: 4,
//         title: "Act in a way that makes all of us proud",
//         para: "Proin dignissim facilisis tortor a mattis. Morbi non maximus nunc, ut mattis tellus. In hac habitasse platea dictumst. Mauris viverra enim tellus, vel ultrices dolor aliquam non."
//     },
//     {
//         id: 5,
//         title: "Build an inclusive, transparent and socially responsible culture",
//         para: "Maecenas eros sapien, egestas at elit nec, eleifend sagittis orci."
//     }
// ]

const Datas = [
  {
    id: 1,
    title: "Expertise & Experience",
    para: "Our team brings years of collective experience and expertise to the table. With a proven track record of delivering top-notch web development solutions, we're equipped to handle projects of any scale or complexity.",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    para: "We understand that every business is unique, which is why we don't believe in one-size-fits-all solutions. Our approach is highly customized, ensuring that each project is tailored to meet your specific needs and goals.",
  },
  {
    id: 3,
    title: "Cutting-Edge Technology",
    para: "Keeping pace with the rapidly evolving tech landscape, we stay ahead of the curve by leveraging the latest tools, frameworks, and methodologies. This ensures that your website is not just functional, but also future-proof.",
  },
  {
    id: 4,
    title: "Transparent Communication",
    para: "Communication is key to a successful partnership. We prioritize transparency and collaboration, keeping you informed at every stage of the development process. Your feedback is not just welcomed, but actively encouraged.",
  },
  {
    id: 5,
    title: "Dedicated Support",
    para: "Our commitment to client satisfaction doesn't end with the launch of your website. We provide ongoing support and maintenance services, ensuring that your site remains secure, updated, and optimized for peak performance.",
  },
];



const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="We are a growing agency in the industry working all across the globe"
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;