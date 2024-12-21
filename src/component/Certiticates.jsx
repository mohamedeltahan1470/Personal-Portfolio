// import React from "react";
import "./Certiticates.css";
import acpc from "../assets/certiticates/acps_page-0001.jpg";
import training from "../assets/certiticates/Front-end Training.jpg";
import web from "../assets/certiticates/web certifiation.jpg";
import web1 from "../assets/certiticates/Web Certification.jpg";
import github from "../assets/certiticates/Git and GitHub Certification_page-0001.jpg";
import Reactlevel2 from "../assets/certiticates/Reactlevel2.jpg";
import Reactlevel3 from "../assets/certiticates/Reactlevel3.jpg";
import Reactlevel4 from "../assets/certiticates/Reactlevel4.jpg";
import DEPI from "../assets/certiticates/DEPI.jpeg";
import Manara from "../assets/certiticates/ManaraTech introduction to the internet.png"
// import freelancer from "../assets/certiticates/Freelancer Certification_page-0001.jpg";
// import mongodb from "../assets/certiticates/Course_Certificate_En_page-0001.jpg";
// import introduction from "../assets/certiticates/1049-14705-مقدمة_في_عالم_البرمجة_page-0001.jpg";
// import java from "../assets/certiticates/msg1344884435-27908.jpg";
// import sololearn from "../assets/certiticates/d3a8ad5c-b29b-447e-ad16-3587f0b0a734.jpg";
// import Artificial from "../assets/certiticates/Artificial inteligence Certification.jpg";


const certificate_data = {
  certificates: [
    {
      id: 15,
      cert_img: DEPI,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1734791366/DEPI_lmhgie.jpg",
    },
    {
      id: 3,
      cert_img: web1,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341489/Web_Certification_xluzel.jpg",
    },
    {
      id: 4,
      cert_img: training,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341520/Front-end_Training_nocg76.jpg",
    },
    {
      id: 1,
      cert_img: Reactlevel2,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341501/Reactlevel2_dm3tqv.jpg",
    }, 
    {
      id: 14,
      cert_img: Reactlevel3,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341480/Reactlevel3_vexyl6.jpg",
    },
    {
      id: 2,
      cert_img: Reactlevel4,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341492/Reactlevel4_le3ltg.jpg",
    },
    {
      id: 5,
      cert_img: web,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341479/web_certifiation_zr1aaf.jpg",
    },
    {
      id: 6,
      cert_img: acpc,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341489/acps_page-0001_uiutii.jpg",
    },
    {
      id: 7,
      cert_img: github,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341489/Git_and_GitHub_Certification_page-0001_cdlgvp.jpg",
    },
    {
      id: 16,
      cert_img: Manara,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733672953/Introduction_to_the_internet_and_web_noffdg.png",
    },


    // {
    //   id: 8,
    //   cert_img: Artificial,
    //   link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341485/Artificial_inteligence_Certification_spixki.jpg",
    // },
    // {
    //   id: 9,
    //   cert_img: sololearn,
    //   link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341480/d3a8ad5c-b29b-447e-ad16-3587f0b0a734_jres7m.jpg",
    // },
    // {
    //   id: 10,
    //   cert_img: java,
    //   link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341481/msg1344884435-27908_o8zngs.jpg",
    // },
    // {
    //   id: 11,
    //   cert_img: freelancer,
    //   link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341497/Freelancer_Certification_page-0001_ewhlit.jpg",
    // },
    // {
    //   id: 12,
    //   cert_img: introduction,
    //   link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341484/1049-14705-%D9%85%D9%82%D8%AF%D9%85%D8%A9_%D9%81%D9%8A_%D8%B9%D8%A7%D9%84%D9%85_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_page-0001_omvquy.jpg",
    // },
    // {
    //   id: 13,
    //   cert_img: mongodb,
    //   link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341530/Course_Certificate_En_page-0001_axzu2h.jpg",
    // },

  ],
};
const Services = () => {
  return (
    <div id="certificates" className="certificates-section">
      <div className="certificates-title">
        <h1>My Certificates</h1>
      </div>
      <div>
        {Object.entries(certificate_data).map(([category, certificates]) => (
          <div className="certificates-category" key={category}>
            <div className="certificates-container">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <img
                    src={cert.cert_img}
                    alt={`Certificate ${cert.id}`}
                    className="certificate-img"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
