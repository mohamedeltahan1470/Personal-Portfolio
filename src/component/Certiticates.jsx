import "./Certiticates.css";
import acpc from "../assets/certiticates/acps_page-0001.jpg";
import training from "../assets/certiticates/training-web.jpg";
import web from "../assets/certiticates/web certifiation.jpg";
import web1 from "../assets/certiticates/cours-web.jpg";
import github from "../assets/certiticates/Git GitHub.jpg";
import Reactlevel2 from "../assets/certiticates/Reactlevel2.jpg";
import Reactlevel3 from "../assets/certiticates/Reactlevel3.jpg";
import Reactlevel4 from "../assets/certiticates/Reactlevel4.jpg";
import DEPI from "../assets/certiticates/DEPI.jpg"
import Manara from "../assets/certiticates/ManaraTech introduction to the internet.png"
import Nextlevel2 from "../assets/certiticates/Nextlevel2.jpg"
import Nextlevel3 from "../assets/certiticates/Nextlevel3.jpg"
import introduction_to_the_internet from "../assets/certiticates/Introduction_to_the_internet_and_web_noffdg.png"
import DEPI1 from "../assets/certiticates/Mohammed Ali Abdullah Abdelfattah_page-0001.jpg"
import DEPI1English from "../assets/certiticates/Muhammad Ali Abdullah_page-0001-English.jpg"
// import freelancer from "../assets/certiticates/Freelancer Certification_page-0001.jpg";
// import mongodb from "../assets/certiticates/Course_Certificate_En_page-0001.jpg";
// import introduction from "../assets/certiticates/1049-14705-مقدمة_في_عالم_البرمجة_page-0001.jpg";
// import java from "../assets/certiticates/msg1344884435-27908.jpg";
// import sololearn from "../assets/certiticates/d3a8ad5c-b29b-447e-ad16-3587f0b0a734.jpg";
// import Artificial from "../assets/certiticates/Artificial inteligence Certification.jpg";


const certificate_data = {
  certificates: [
    {
      id: 19,
      cert_img: DEPI1,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1737029820/Mohammed_Ali_Abdullah_Abdelfattah_page-0001_n7f92j.jpg",
    },
        {
      id: 20,
      cert_img: DEPI1English,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1738765653/Muhammad_Ali_Abdullah_page-0001_tdu1v2.jpg",
    },
    {
      id: 15,
      cert_img: DEPI,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735229805/Muhammad_Ali_Abdullah_Abdel_Fattah_1_i2nyon_page-0001_hpvfq0.jpg",
    },
    {
      id: 6,
      cert_img: acpc,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341489/acps_page-0001_uiutii.jpg",
    },
    {
      id: 3,
      cert_img: web1,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735393696/cours-web_oslkb0.jpg",
    },
    {
      id: 4,
      cert_img: training,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735393696/training-web_x1v6sn.jpg",
    },
    {
      id: 1,
      cert_img: Reactlevel2,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735226659/reactlevel2_yicmos.jpg",
    }, 
    {
      id: 14,
      cert_img: Reactlevel3,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735226662/reactlevel3_nwohix.jpg",
    },
    {
      id: 2,
      cert_img: Reactlevel4,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735226660/reactlevel4_gzsjmd.jpg",
    },
    {
      id: 5,
      cert_img: web,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733341479/web_certifiation_zr1aaf.jpg",
    },
    {
      id: 7,
      cert_img: github,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735228902/Git-and-GitHub_%D8%AF%D9%88%D8%B1%D8%A9-%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%AC%D9%8A%D8%AA-Git-%D9%88%D8%AC%D9%8A%D8%AA-%D9%87%D8%A8-GitHub_Mohammed-Ali-Abdullah_page-0001_qlet0z.jpg",
    },
    {
      id: 16,
      cert_img: Nextlevel2,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1734165824/next2_gaj4nw.jpg",
    },
    {
      id: 17,
      cert_img: Nextlevel3,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1735223701/Nextlevel3_sbzfti.jpg",
    },
    {
      id: 16,
      cert_img: Manara,
      link: "https://res.cloudinary.com/dum9aqxis/image/upload/v1733672953/Introduction_to_the_internet_and_web_noffdg.png",
    },
    {
      id: 18,
      cert_img: introduction_to_the_internet,
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
                  loading="lazy"
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
