import React from "react";
import backgroundImage from "../images/beans.jpg"; // Replace with the actual path to your image
import joyImage1 from "../images/joy.PNG";
// import joyImage2 from "../images/joy.PNG"; // Assuming you have two images with the same name
import victoryImage from "../images/victory.jpeg"; // Assuming you have two images with the same name


import "./about.css";

const About = () => {
  // const backgroundStyles = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   // Add more CSS styles as needed
  // };

  return (
    <div className="body">
      <div className="about-b">
        <div className="about-p">
          <h2>About Us</h2>
          <br />
          <h3>About Mwanyi Ecommerce Platform</h3>
          Welcome to Mwanyi Ecommerce Platform, where the essence of coffee craftsmanship
          meets the convenience of modern technology. Mwanyi Ecommerce was born
          out of a simple yet powerful vision to connect coffee farmers directly
          with buyers, creating a community that values transparency, fairness,
          and the love for extraordinary coffee.
          <br />
          <br />
          <h3>Our Vision</h3>
          At Mwanyi Ecommerce Platform, we envision a world where every coffee farmer has
          the opportunity to showcase their skills and connect with buyers who
          appreciate the dedication poured into each coffee bean. We are
          passionate about empowering farmers, promoting sustainable practices,
          and building a global network that honors the rich diversity of coffee
          cultures.
          <br />
          <br />
          <h3>Our Mission</h3>
          Our mission is to transform the coffee industry by providing a
          platform where farmers thrive, buyers discover exceptional coffees,
          and a sense of community flourishes.
          <br />
          <br />
          <h3>Why Choose Mwanyi Ecommerce?</h3>
          <h5>Direct Farmer-Buyer Connection: </h5>
          By cutting out unnecessary intermediaries, we enable direct
          communication between farmers and buyers, fostering a community of
          understanding and appreciation.
          <br />
          <h5>Curated Selection:</h5>
          Mwanyi Ecommerce Platform curates a selection of the finest coffees from
          passionate farmers, ensuring that every cup tells a story of
          craftsmanship and dedication.
          <br />
          <h5>Ethical Sourcing:</h5>
          Our commitment to ethical sourcing ensures that every coffee on our
          platform is produced with respect for the environment and the
          livelihoods of the farmers.
          <br />
          <br />
          <h3>Beyond Coffee, We're a Community:</h3>
          Mwanyi Ecommerce Platform is not just a platform; it's a community of coffee
          lovers, farmers, and enthusiasts. Join our forums, attend virtual
          events, and immerse yourself in the world of coffee culture. We
          believe in fostering connections that go beyond the transaction,
          creating a space where conversations flow as smoothly as the coffee we
          deliver to your doorstep.
          <br />
          <h3>Giving Back:</h3>
          At Mwanyi Ecommerce Platform, we believe in giving back. A percentage of every
          purchase goes directly to community projects in coffee-growing
          regions. Together, we can make a positive impact on the lives of those
          who cultivate the beans we cherish.
          <br />
          <br />
          Join us on this exciting journey as we redefine the way coffee is
          bought and sold. Together, let's create a future where every sip is a
          celebration of the incredible people and places behind the world's
          favorite beverage. Cheers to a shared love for coffee!
          </div>

        {/* Section with two images, names, and titles */}
        <div className="image-sec">
          <h2>Our founders</h2>
          <div className="image-section">
            <div className="image-container">
              <img className="joy" src={joyImage1} alt="Joy 1" />
              <p className="name">Joyce Adee</p>
              <p className="title">Founder</p>
            </div>
            <div className="image-container">
              <img className="victory" src={victoryImage} alt="Victory" />
              <p className="name">Doreen Victory</p>
              <p className="title">Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
