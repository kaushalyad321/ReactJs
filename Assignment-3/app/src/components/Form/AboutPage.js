import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div class="card">
        <img src="/img.jpg" alt="John" style={{width:'100%'}}/>
        <h1>Kaushal Kumar Yadav</h1>
        <p class="title">CEO & Founder, Google </p>
        <p>Harvard University</p>
        <a href="#">
          <i class="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <p>
          <button className="contact">Contact</button>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
