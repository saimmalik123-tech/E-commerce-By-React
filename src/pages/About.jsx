import React from "react";
import "../css/About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-hero">
          <h1>About Us</h1>
          <p>
            At <span className="highlight">E-commerce</span>, we believe
            shopping should be easy, fun, and accessible to everyone. Since our
            founding, we’ve been passionate about delivering high-quality
            products with exceptional customer service.
          </p>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              <span className="highlight">E-commerce</span> is your trusted
              online destination for fashion, electronics, beauty, and home
              essentials. Our team works tirelessly to bring you an effortless
              online shopping experience — from browsing products to doorstep
              delivery.
            </p>
            <p>
              We started as a small team with a big dream: to make online
              shopping simpler and more reliable for everyone. Over the years,
              we’ve grown into one of the leading online stores, serving
              thousands of satisfied customers every month.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="E-commerce team working"
            />
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To empower customers by providing a wide range of quality products
              with a seamless, trustworthy shopping experience. We aim to
              connect people with products they love — delivered quickly and
              affordably.
            </p>
          </div>

          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To become the most customer-centric e-commerce platform in the
              region, known for innovation, trust, and an unbeatable shopping
              experience that inspires millions every day.
            </p>
          </div>
        </div>

        <div className="core-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Customer First:</strong> Every decision we make revolves
              around giving our customers the best experience.
            </li>
            <li>
              <strong>Integrity:</strong> We build trust by being honest,
              transparent, and ethical in everything we do.
            </li>
            <li>
              <strong>Innovation:</strong> We constantly evolve to provide
              smarter, faster, and better solutions.
            </li>
            <li>
              <strong>Teamwork:</strong> We believe success is achieved
              together, not alone.
            </li>
            <li>
              <strong>Quality:</strong> Every product we sell meets strict
              quality standards to ensure customer satisfaction.
            </li>
          </ul>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <p>
            Behind <span className="highlight">E-commerce</span> is a passionate
            team of designers, developers, and customer service professionals —
            all working together to deliver excellence.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.NF-jE1qzAAF9vPKkae0FIAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Ali Khan"
              />
              <h4>Ali Khan</h4>
              <p>CEO & Founder</p>
            </div>

            <div className="team-member">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.D59RPCrqqka-VELZrfcJvAHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Muhammad Ali"
              />
              <h4>Muhammad Ali</h4>
              <p>Marketing Director</p>
            </div>

            <div className="team-member">
              <img
                src="https://thumbs.dreamstime.com/z/businessman-desk-laptop-his-office-handsome-young-sitting-smiling-100579045.jpg"
                alt="Abdul Rehman"
              />
              <h4>Abdul Rehman</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </div>

        <div className="why-choose">
          <h2>Why Choose Us?</h2>
          <p>
            We understand that online shopping is more than just a purchase —
            it’s about trust, convenience, and satisfaction. That’s why we focus
            on:
          </p>
          <ul>
            <li>✔ Fast, reliable, and secure delivery</li>
            <li>✔ Quality-checked products from trusted brands</li>
            <li>✔ Easy returns and refunds</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Affordable pricing and seasonal discounts</li>
          </ul>
        </div>

        <div className="about-ending">
          <p>
            Thank you for choosing <span className="highlight">E-commerce</span>{" "}
            — where shopping meets simplicity, and quality meets trust.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
