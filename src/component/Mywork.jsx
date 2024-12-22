import  { useState, useEffect } from "react";
import "./Mywork.css";

const mywork_data = {
  JavaScriptProjects: [

    {
      id: 1,
      name: "CRUD Application",
      image: "project-image1.jpg",
      description: "Product Management System." ,
      fullDescription:
        "The CRUD Application is a simple product management system that enables users to easily add, update, and delete products. With a responsive design, it ensures seamless use across all devices. Users can enter details such as title, price, taxes, ads, discount, count, and category when adding new products. The application displays a comprehensive table of all entered products, complete with search functionality by title or category, allowing for quick and efficient access. Additionally, users have the option to modify or remove products as needed, making it a versatile tool for product management.",
      link: "https://cruds-2-two.vercel.app/",
    },
    {
      id: 2,
      name: "Weather App",
      image: "project-image2.jpg",
      description: "A weather application built with HTML, CSS, and JavaScript, utilizing the OpenWeatherMap API to fetch weather data based on user input.",
      fullDescription: "This JavaScript Weather App allows users to input a city name and retrieve real-time weather information. The app displays the temperature, humidity, and wind speed, along with a weather icon representing the current weather condition. It features responsive design for optimal viewing on various devices.",
      link: "https://weather-application-uding-html-css-js.vercel.app/",
    },
    {
      id: 3,
      name: "Text To Voice Converter",
      image: "project-image2.jpg",
      description: "A web application that converts text input to speech using the SpeechSynthesis API.",
      fullDescription: "This Text To Voice Converter allows users to input text into a textarea, select a voice from a dropdown menu, and listen to the spoken version of the text. The application utilizes the Web Speech API's SpeechSynthesis interface to provide speech capabilities. It features a modern design with a responsive layout, making it suitable for use on various devices.",
      link: "https://toast-notification-o57n.vercel.app/"
    },
    {
      id: 4,
      name: "Image Search Engine",
      image: "project-image1.jpg",
      description: "A project showcasing the use of CSS Grid for responsive layouts.",
      fullDescription: "This project demonstrates how to build a fully responsive layout using CSS Grid. It includes multiple sections that adapt to different screen sizes, providing a seamless user experience across devices. The project showcases the powerful capabilities of CSS Grid in creating complex layouts with minimal code.",
      link: "https://image-search-engine-jba8.vercel.app/",
    },
    {
      id: 5,
      name: "Smart Age Calculator",
      image: "project-image1.jpg",
      description: "A user-friendly age calculator.",
      fullDescription: "Age Calculator is a web app that calculates your exact age in years, months, and days using JavaScript, HTML, and CSS. With a responsive design and a simple interface, it ensures accurate, local calculations directly in the browser.",
      link: "https://calculate-your-age-six.vercel.app/",
    },
    {
      id: 6,
      name: "Music Player Design",
      image: "project-image1.jpg",
      description: "A responsive music player design featuring play/pause controls, a progress bar, and an elegant UI.",
      fullDescription: "This project is a music player designed using HTML, CSS, and JavaScript. It features a clean interface that includes controls for playing, pausing, and skipping tracks. The layout is responsive, ensuring a smooth experience on both desktop and mobile devices. The player also includes a progress bar that allows users to track playback and adjust the current position of the track.",
      link: "https://make-a-music-player.vercel.app/"
    },
    {
      id: 7,
      name: "QR Code Generator",
      image: "project-image1.jpg",
      description: "A simple QR Code Generator built with HTML, CSS, and JavaScript that allows users to create QR codes from text or URLs.",
      fullDescription: "This QR Code Generator is a user-friendly web application that lets users input text or URLs to generate a QR code. The application uses the QR Code API to create the QR codes dynamically. The design is clean and responsive, making it accessible on various devices. Users can easily generate QR codes by entering their desired text or URL and clicking the 'Generate QR Code' button. The resulting QR code is displayed on the screen for easy scanning.",
      link: "https://make-qr-code-generator.vercel.app/"
    },
    {
      id: 32,
      name: "To-Do List",
      image: "project-image2.jpg",
      description: "This is a simple To Do List web application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, delete them, and store them in the browser's local storage for persistence.",
      fullDescription: "This JavaScript To-Do List Application allows users to manage their tasks efficiently. Features include adding new tasks, removing tasks, and marking them as completed. The application utilizes local storage to save user tasks, ensuring data persistence even after refreshing the browser. The user interface is designed to be clean and responsive, making it accessible on both desktop and mobile devices. This project showcases the fundamental concepts of DOM manipulation, event handling, and local storage management in JavaScript.",
      link: "https://task-master-website-uozl.vercel.app/",
    },
    {
      id: 8,
      name: "To-Do List",
      image: "project-image2.jpg",
      description: "A simple and interactive To-Do List application built using JavaScript. Users can add, remove, and mark tasks as completed, with data saved in local storage for persistence.",
      fullDescription: "This is a simple To Do List web application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, delete them, and store them in the browser's local storage for persistence.",
      link: "https://weather-application-uding-html-css-js-wcfb.vercel.app/",
    },
    {
      id: 9,
      name: "Advice Generator App",
      image: "project-image2.jpg",
      description: "A simple app that generates random advice using the Advice Slip API.",
      fullDescription: "The Advice Generator App is a React-based web application that fetches random advice from the Advice Slip API. Users can click a button to generate and display new advice. The app features a responsive design with clean, modern styling, making it suitable for a variety of devices. It leverages Axios for API requests and ensures a smooth user experience.",
      link: "https://advice-project-navy.vercel.app/", 
    },
    {
      id: 10,
      name: "Digital Clock",
      image: "clock-image.jpg",
      description: "A stylish digital clock that shows the current time.",
      fullDescription: "Responsive Digital Clock is a web application that displays the current time in hours, minutes, and seconds, updating in real-time. Built with HTML, CSS, and JavaScript, it features a modern design with a gradient background and responsive layout, ensuring a seamless experience across all devices.",      
      link: "https://digital-clock-orpin-gamma.vercel.app/",
    },
    {
      id: 11,
      name: "Text To Voice Converter",
      image: "project-image2.jpg",
      description: "A web application that converts text input to speech using the SpeechSynthesis API.",
      fullDescription: "This Text To Voice Converter allows users to input text into a textarea, select a voice from a dropdown menu, and listen to the spoken version of the text. The application utilizes the Web Speech API's SpeechSynthesis interface to provide speech capabilities. It features a modern design with a responsive layout, making it suitable for use on various devices.",
      link: "https://toast-notification-o57n.vercel.app/"
    },
    {
      id: 12,
      name: "Random Password Generator",
      image: "project-image2.jpg",
      description: "A simple web application to generate secure random passwords.",
      fullDescription: "The Random Password Generator is a user-friendly web application designed to create secure passwords that include a mix of uppercase letters, lowercase letters, numbers, and symbols. Users can generate a new password with a click of a button and easily copy it to their clipboard. The app features a responsive design for optimal viewing on both desktop and mobile devices, making it a practical tool for anyone looking to enhance their online security.",
      link: "https://random-password-xi.vercel.app/",
    },
    {
      id: 13,
      name: "Simple Quiz App",
      image: "project-image2.jpg",
      description: "An interactive quiz application that tests your knowledge with multiple-choice questions.",
      fullDescription: "This Simple Quiz App allows users to answer multiple-choice questions on various topics. It provides immediate feedback on each answer, keeps track of the score, and allows users to play again after completing the quiz. Built with HTML, CSS, and JavaScript, this app is fully responsive and user-friendly.",
      link: "https://quiz-app-drab-psi.vercel.app/"
    },
    {
      id: 14,
      name: "Notes App",
      image: "project-image2.jpg",
      description: "A simple and interactive notes application built with HTML, CSS, and JavaScript, allowing users to create and manage notes.",
      fullDescription: "The Notes App is designed to help users quickly create and manage notes in a minimalistic interface. Built with HTML, CSS, and JavaScript, the app includes a 'Create Notes' button, editable text areas for adding notes, and the option to delete them. The UI is clean and user-friendly, with icons enhancing the user experience.",
      link: "https://notes-app-dun-iota.vercel.app/"
    }, 
    {
      id: 15,
      name: "Mini Calendar ",
      image: "project-image2.jpg",
      description: "A responsive mini calendar displaying the current date, day, month, and year using vanilla JavaScript.",
      fullDescription: "This project is a mini calendar built with HTML, CSS, and JavaScript. It dynamically shows the current date, day of the week, month, and year. The layout is designed to be responsive with a clean, modern interface. The calendar updates automatically based on the system date, and the background features a gradient for a polished look.",
      link: "https://mini-calender-zeta.vercel.app/",
    },
    {
      id: 16,
      name: "Form Validation",
      image: "project-image1.jpg",
      description: "A showcase of modern CSS techniques for responsive web design.",
      fullDescription: "This project highlights modern CSS techniques like Flexbox and Grid for creating responsive, visually stunning web interfaces. It features engaging animations and transitions, emphasizing usability, accessibility, and a clean aesthetic.",
      link: "https://generator-website-hwgt.vercel.app/",
    },
    {
      id: 17,
      name: "Modern CSS Techniques Showcase",
      image: "project-image1.jpg",
      description: "A showcase of modern CSS techniques for responsive web design.",
      fullDescription: "This project highlights the power of modern CSS techniques in creating responsive and visually stunning web interfaces. Utilizing advanced features like Flexbox and CSS Grid, it ensures seamless adaptability across various devices. The project includes engaging animations and transitions, enhancing user interaction while maintaining optimal performance. It serves as a practical demonstration of best practices in web design, emphasizing usability, accessibility, and a clean aesthetic.",
      link: "https://generator-website-mu.vercel.app/",
    },

    {
      id: 18,
      name: "Cryptocurrency Trading Platform",
      image: "project-image1.jpg",
      description: "A user-friendly platform for buying and selling cryptocurrencies.",
      fullDescription: "This project is a cryptocurrency trading platform that allows users to buy and sell popular cryptocurrencies such as Bitcoin, Ethereum, and Dogecoin. The platform features a sleek design, a responsive layout, and provides real-time cryptocurrency prices. Built using HTML, CSS, and JavaScript, this project aims to enhance user engagement and simplify the trading process.",
      link: "https://make-cryptocurrency-website-xmc5.vercel.app/"
    },
    {
      id: 19,
      name: "Background Change Effect",
      image: "project-image1.jpg",
      description: "An interactive tool for comparing two images side by side using a sliding mechanism.",
      fullDescription: "This project allows users to visually compare two images by sliding a divider between them. It features a responsive design, smooth transitions, and is built with HTML, CSS, and JavaScript. Users can easily replace the default images and see the effect immediately. The tool is useful for web designers, photographers, or anyone needing to highlight differences between two images.",
      link: "https://make-product-page-design-vgsm.vercel.app/"
    },
    {
      id: 20,
      name: "Product Page",
      image: "project-image1.jpg",
      description: "A responsive web page layout using CSS Grid to showcase multiple projects.",
      fullDescription: "This project demonstrates the use of CSS Grid to create a responsive layout for displaying various projects. The design adjusts seamlessly across different screen sizes, making it user-friendly on both desktops and mobile devices. It includes features such as hover effects on project images, links to external project pages, and a modern aesthetic.",
      link: "https://make-product-page-design.vercel.app/"
    },  

    {
      id: 21,
      name: "Interactive Social Media Dropdown",
      image: "project-image2.jpg",
      description: "A custom social media dropdown selector built with HTML, CSS, and JavaScript.",
      fullDescription: "This project showcases a user-friendly custom dropdown menu for selecting social media platforms. The dropdown dynamically updates the selected platform with accompanying icons and includes a smooth toggle animation. Designed with responsive layout and modern styling techniques.",
      link: "https://mini-calender-ys3b.vercel.app/",
  }, 
  {
    id: 22,
    name: "Popup Modal",  
    image: "project-image2.jpg",  
    description: "A simple popup modal that displays a thank-you message after submitting a form.",  
    fullDescription: "This project demonstrates how to create a popup modal using HTML, CSS, and JavaScript. The modal appears when the submit button is clicked, displaying a thank-you message and allowing the user to close it by clicking the 'OK' button. It also includes basic animations and a responsive layout.",  
    link: "https://popup-using-html-css-and-js.vercel.app/"  
  },
  {
    id: 23,
    name: "Password Toggle Feature",
    image: "project-image2.jpg",
    description: "A simple web application that allows users to toggle the visibility of their password.",
    fullDescription: "The Password Toggle Feature is a web application that enhances user experience by allowing users to view or hide their passwords as they type. This feature is implemented using JavaScript, enabling users to click an eye icon to toggle between password and text input types. The design is responsive and works well on both mobile and desktop devices. The application is a practical addition to forms requiring password input, making it easier for users to ensure they have entered their password correctly.",
    link: "https://show-password-strength-6zxw.vercel.app/",
  },
  {
    id: 24,
    name: "Password Strength Indicator",
    image: "project-image2.jpg",
    description: "A web application that provides real-time feedback on password strength as users type.",
    fullDescription: "The Password Strength Indicator is a user-friendly web application designed to help users create strong passwords. As users enter their passwords, the app provides immediate feedback on the strength of their password—weak, medium, or strong—based on the length of the input. The password field is visually enhanced to change its border color according to the strength of the password, making it easier for users to understand their password's security level. This application is useful for ensuring that users create secure passwords that are less susceptible to attacks.",
    link: "https://show-password-strength-gamma.vercel.app/",
  },
  {
    id: 25,
    name: "Stopwatch Using JavaScript",
    image: "project-image2.jpg",
    description: "A simple stopwatch application built using HTML, CSS, and JavaScript.",
    fullDescription: "This Stopwatch application allows users to track time with start, stop, and reset functionality. The user interface includes a digital clock display that shows elapsed time in hours, minutes, and seconds. Users can start the stopwatch, stop it when needed, and reset it to zero to begin timing again. The application is responsive and designed with a modern aesthetic, utilizing CSS for styling and JavaScript for functionality.",
    link: "https://stopwatch-one-sand.vercel.app/"
  },
  {
    id: 26,
    name: "Toast Notification",
    image: "project-image2.jpg",
    description: "A user-friendly toast notification system for providing feedback to users.",
    fullDescription: "The Toast Notification project is a web-based application designed to display temporary notifications to users. Built using HTML, CSS, and JavaScript, this app allows for customizable success, error, and warning notifications that appear at the bottom of the screen. Users can easily trigger notifications via buttons, making it an excellent tool for providing real-time feedback on user actions, such as form submissions or errors. The app includes animated transitions and customizable styles, ensuring a seamless integration into any web application.",
    link: "https://toast-notification-chi.vercel.app/"
},
// {
//   id: 27,
//   name: "Drag Drop Menu",
//   image: "image_gallery_project.jpg",
//   description: "A beautifully designed responsive image gallery.",
//   fullDescription: "This image gallery showcases a collection of stunning images arranged in a grid layout that adjusts to different screen sizes. Users can hover over images to view a zoom effect and click to see a larger version in a modal. Built with CSS Grid, Flexbox, and transitions for a smooth user experience.",
//   link: "https://drag-drop-theta-eight.vercel.app/",
// },
{
  id: 28,
  name: "Calculator App",
  image: "project-image1.jpg",
  description: "A task management application.",
  fullDescription: "The To-Do List App allows users to manage their tasks efficiently. Users can add, edit, and delete tasks, as well as mark them as completed. With a responsive design, this app ensures a smooth experience on both mobile and desktop devices. Built with HTML, CSS, and JavaScript, it demonstrates the use of local storage for saving tasks.",
  link: "https://calculator-l3ng.vercel.app/",
},
{
  id: 29,
  name: "Coming Soon Page",
  image: "project-image2.jpg",
  description: "A fully responsive website layout.",
  fullDescription: "This project showcases a fully responsive website design using HTML, CSS, and JavaScript. The layout adapts seamlessly to various screen sizes, ensuring a user-friendly experience across devices. Features include a navigation menu, interactive elements, and smooth transitions, all designed with best practices in mind for modern web development.",
   link: "https://coming-soon-page-cyan-zeta.vercel.app/",
},
{
  id: 30,
  name: "Horizontal Scrolling Image",
  image: "project-image1.jpg",
  description: "A responsive layout built with CSS Grid.",
  fullDescription: "A responsive website layout using CSS Grid, adapting to various screen sizes with flexible grid areas.",
  link: "https://image-search-engine-hwc3.vercel.app/",
},
{
  id: 31,
  name: "Progress Bar Application",
  image: "project-image1.jpg",
  description: "A visually engaging progress bar that animates to show percentage completion.",
  fullDescription: "This application showcases a circular progress bar that animates from 0% to 65%. It utilizes modern web technologies including HTML, CSS for styling, and JavaScript for the functionality. The gradient effect in the stroke enhances the visual appeal, and the application is responsive to ensure a good user experience on various devices.",
  link: "https://make-cryptocurrency-website-karq.vercel.app/"
},
  ],
  ReactProjects: [
    {
      id: 1,
      name: "Social Network Application",
      image: "project-image1.jpg",
      description: "A web application that connects users, allowing them to share posts, photos, and messages.",
      fullDescription: "The Social Network Application is built with React and Material-UI. It provides a user-friendly interface for users to interact with their friends and share content seamlessly. Key features include posting updates, commenting on friends' posts, and a responsive design that adapts to various screen sizes. The application is designed for easy navigation and a visually appealing experience.",
      link: "https://mui-social-network-application.vercel.app/"
    },
    {
      id: 2,
      name: "Num2verify",
      image: "project-image1.jpg",
      description: "A comprehensive web application for user management, featuring authentication, profile management, and number management.",
      fullDescription: "This web application is designed to provide users with a seamless experience for managing their accounts and assigned numbers. It includes user authentication features such as sign-up and sign-in, allowing users to securely manage their profile information. The profile management section enables users to update personal details such as their first name, last name, email, and password. Additionally, users can view and delete their assigned numbers in the 'My Numbers' section. Built with React and Material-UI, the application is responsive and ensures a user-friendly interface across devices.",
      link: "https://web-app-lovat-ten.vercel.app/"
    },
    {
      id: 3,
      name: "Responsive E-commerce Website",
      image: "project-image1.jpg",
      description: "A fully responsive e-commerce website built with React.",
      fullDescription: "This project is a responsive e-commerce website that allows users to browse products across multiple categories, including men's, women's, and kids' fashion. Built with React, this website features a dynamic routing system using React Router, a shopping cart functionality, and a user authentication system. The design is mobile-first, ensuring a seamless experience on both mobile and desktop devices. The website integrates an API to fetch product data and display it in a user-friendly interface, making it easy for customers to navigate and purchase items.",
      link: "https://e-commerce-react-app-gamma.vercel.app/", 
    },
    {
      id: 4,
      name: "YouTube Clone",
      image: "project-image2.jpg", 
      description: "A responsive web application that mimics the core features of YouTube, including video streaming, user subscriptions, and recommendations.",
      fullDescription: "This YouTube clone allows users to browse and watch videos, subscribe to channels, and receive personalized video recommendations. Built with React, the application integrates with the YouTube API to fetch real-time data on trending videos and user subscriptions. The interface is designed for mobile and desktop responsiveness, ensuring a seamless user experience. Key features include a functional sidebar for navigation, a video player component for streaming, and a recommended videos section that enhances user engagement.",
      link: "https://youtube-clone-rho-pearl.vercel.app/",
    },
    {
      id: 5,
      name: "Gemini Clone",
      image: "project-image2.jpg",
      description: "A web app that simulates the Gemini platform for AI-driven conversations.",
      fullDescription: `
        Gemini Clone is a web application that enables users to chat with an AI for instant responses. It features user authentication and a responsive design, providing a seamless experience on any device.
      `,
      link: "https://gemini-clone-nine-alpha.vercel.app/",
    },
    {
      id: 6,
      name: "EduSity - Online Learning Platform",
      image: "project-image2.jpg",
      description: "EduSity is an innovative online learning platform that connects students and educators for a seamless learning experience.",
      fullDescription: "EduSity is an online learning platform designed to enhance the educational experience for students and educators alike. The platform features interactive courses, video tutorials, and a user-friendly interface. With real-time communication tools, students can engage with instructors and peers, fostering a collaborative learning environment. The application is built using React for the front-end and Node.js for the back-end, ensuring a smooth and responsive user experience. Key features include user authentication, course enrollment, progress tracking, and a discussion forum. This project showcases modern web development practices and a focus on user experience.",
      link: "https://responsive-edusity.vercel.app/",
    },
    {
      id: 7,
      name: "Responsive Todo Application",
      image: "project-image2.jpg",
      description: "A user-friendly todo application that helps you manage your tasks effectively.",
      fullDescription: "This Responsive Todo Application allows users to add, delete, and toggle the completion status of their tasks. It features a clean, intuitive interface and is fully responsive, making it accessible on both desktop and mobile devices. The application utilizes React for the frontend, enabling a dynamic user experience. Users can filter tasks by their completion status and remove all completed tasks with a single click. Data persistence is achieved through local storage, ensuring your tasks are saved even after refreshing the page.",
      link: "https://todo-list-appliction.vercel.app/"
    },
    // {
    //   id: 8,
    //   name: "Prayer Times Application",
    //   image: "project-image2.jpg",
    //   description: "A responsive web application that displays prayer times based on the user's selected country. It provides an easy-to-use interface for users to view prayer times and stay connected with their daily prayers.",
    //   fullDescription: "The Prayer Times Application allows users to select a country and view the corresponding prayer times. Built with React, the application features a responsive design that adapts to various screen sizes, ensuring accessibility on mobile and desktop devices. The app uses Material-UI for a modern user interface and provides an intuitive dropdown for country selection. Each prayer time is displayed prominently, helping users stay informed of their daily prayer schedule.",
    //   link: "https://prayers-timings-ochre.vercel.app/"
    // },
    {
      id: 9,
      name: "Movies Application",
      image: "project-image2.jpg",
      description: "A web application that allows users to browse and manage their movie watchlists. Users can add movies to their watchlist, mark them as watched, and explore various movie details.",
      fullDescription: "The Movies Application is designed to enhance the movie-watching experience by providing users with a platform to manage their favorite films. Users can search for movies, view detailed information, and maintain their watchlists. The application features a user-friendly interface built with React, utilizing context API for state management. It also integrates with an external movie API to fetch real-time data about movies, including titles, release years, and posters. Users can effortlessly add movies to their watchlist and keep track of what they have watched, making it an essential tool for any movie enthusiast.",
      link: "https://moves-two.vercel.app/"
    }
    
  ],
  // أضف المزيد من التصنيفات والمشاريع حسب الحاجة...
};
const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [itemsPerRow, setItemsPerRow] = useState(1);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setItemsPerRow(1);
      } else if (screenWidth <= 768) {
        setItemsPerRow(2);
      } else {
        setItemsPerRow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 1);
  };

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div>
        {Object.entries(mywork_data).map(([category, projects]) => (
          <div className="mywork-section" key={category}>
            <h2>{category.replace("Projects", " Projects")}</h2>
            <div className="mywork-container">
              {projects.slice(0, visibleCount * itemsPerRow).map((work) => (
                <div key={work.id} className="project-card">
                  {work.image && (
                    <img src={work.image} alt={`${work.name} Image`} />
                  )}
                  <h3>{work.name}</h3>
                  <p>{work.description}</p>
                  <div className="button-container">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project
                    </a>
                    <button
                      className="more-details-btn"
                      onClick={() => openModal(work)}
                    >
                      Show More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {visibleCount * itemsPerRow < projects.length && (
              <button className="mywork-showmore" onClick={handleShowMore}>
                Show More
              </button>
            )}
          </div>
        ))}
      </div>

      {/* المودال لعرض التفاصيل الكاملة */}
      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            {modalData.image && (
              <img src={modalData.image} alt={`${modalData.name} Image`} />
            )}
            <h3>{modalData.name}</h3>
            <p>{modalData.fullDescription}</p>
            <a
              href={modalData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Full Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
