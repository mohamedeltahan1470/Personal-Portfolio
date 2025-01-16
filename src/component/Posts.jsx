import "./Posts.css";
import { useState } from "react";

const Posts = () => {
  const posts = [
    {
      image:
        "https://res.cloudinary.com/dum9aqxis/image/upload/v1734792027/%D8%B5%D9%88%D8%B1%D8%A9_1_qhtcp0.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dum9aqxis/image/upload/v1733342318/ba6deff2-1946-4022-a765-495cc1e2b577_gaho1x.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dum9aqxis/image/upload/v1733342383/7e5af332-f0be-452c-8de1-bc7fefeec3af_wgh0a8.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < posts.length - 1 ? prev + 1 : prev));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="container">
      <div className="carousel">
        <button
          onClick={goToPrevious}
          className="arrow left-arrow"
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <div className="image-container">
          <img
            loading="lazy"
            src={posts[currentIndex].image}
            alt={posts[currentIndex].title}
            className="carousel-image"
          />
        </div>
        <button
          onClick={goToNext}
          className="arrow right-arrow"
          disabled={currentIndex === posts.length - 1}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Posts;
