import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At PKare Medical Institute, we are committed to revolutionizing
            healthcare through cutting-edge technology and personalized care.
            Our dedicated team works tirelessly to ensure that every patient
            receives the best possible treatment, with a focus on efficiency,
            accuracy, and compassion.
          </p>
          <p>Welcome to 2024 – where healthcare meets innovation!</p>
          <p>
            We are proud to be developing a state-of-the-art MERN STACK PROJECT.
          </p>
          <p>
            PKare Medical Institute's advanced hospital management system
            enhances patient care, streamlines operations, and ensures seamless
            communication across all departments. We are dedicated to improving
            healthcare outcomes by integrating the latest technological
            advancements with patient-centered services.
          </p>
          <p>
            Experience the future of healthcare with PKare Medical Institute!
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
