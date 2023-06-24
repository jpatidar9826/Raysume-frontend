/* Packages */
import React from "react";
import { Link } from "react-router-dom";

import sample from "../../shared/images/sample.webp";

/* CSS */
import "./home.css";

/* Components */
import Footer from "../../shared/components/Footer/Footer";


const Home = () => {
  return (
    <React.Fragment>
      <div className="home-content-wrap">
        <div className="second-box">
          <div className="first-box">
            <div className="tag-box">
              <h4>Online Resume Builder</h4>
              <h2>Craft a standout resume with ease</h2>
              <p>
                Create a professional resume in minutes with our intutive online
                tool. Standout from the crowd and land your dream job.
              </p>
            </div>
            <div className="button-box">
              <button className="button-box-temp">Choose Template</button>
              <Link to="/resume/new"><button className="button-box-res">Create Resume</button></Link>
            </div>
        <div className="step-box-container">
            <h3>Steps to follow</h3>
          <div className="step-box">
            <div className="step-box-header">
              <h4 className="step-box-header-num">1</h4>
              <h4 className="step-box-header-heading">Choose a template</h4>
            </div>
            <p className="step-box-content">
              Select a professional template that suits your needs from our
              collection of designs.
            </p>
          </div>
          <div className="step-box">
            <div className="step-box-header">
              <h4 className="step-box-header-num">2</h4>
              <h4 className="step-box-header-heading">Add information</h4>
            </div>
            <p className="step-box-content">
              Enter your personal and professional details, including your work
              experience, education, skills, and any other relevant information.
            </p>
          </div>
          <div className="step-box">
            <div className="step-box-header">
              <h4 className="step-box-header-num">3</h4>
              <h4 className="step-box-header-heading">Download or share</h4>
            </div>
            <p className="step-box-content">
              Once you've completed your resume, download it in PDF format or
              share it directly with potential employers via email or social
              media.
            </p>
          </div>
        </div>
          </div>

          <div className="img-box">
            <img src={sample} alt="" />
          </div>
        </div>

       
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Home;
