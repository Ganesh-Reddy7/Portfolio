import React from 'react';
import { FaEnvelopeOpen ,FaPhoneSquareAlt , FaInstagram ,FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">Get In<span> Touch</span></h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't Be Shy !</h3>

          <p className="contact_description">
            Feel free to Get in Touch with me.I am Always open to discuss new projects , creational ideas
            or opportunities to be part of your visions or your company.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen  className='info_icon'/>
              <div>
                <span className="info_title">Mail me : </span>
                <h4 className="info_description">ganeshreddym717@gmail.com</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt  className='info_icon'/>
              <div>
                <span className="info_title">Call me : </span>
                <h4 className="info_description">+91 9010545180</h4>
              </div>
            </div>

          </div>

          <div className="contact_socials">
            <a href="https://www.linkedin.com/in/ganesh-reddy-558a0b24b" className="contact_social-link">
            <FaLinkedinIn />
            </a>

            <a href="https://twitter.com/ganeshreddy_mr?t=Fr-gsQToO-TSK-JgCu3sjA&s=09" className="contact_social-link">
            <FaTwitter />
            </a>

            <a href="https://github.com/Ganesh-reddy7" className="contact_social-link">
            <FaGithub />
            </a>

            <a href="https://instagram.com/ganesh_mr.cool07?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D" className="contact_social-link">
            <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input type="text"
              placeholder='Your Name'
              className='form_control'
              />
            </div>

            <div className="form_input-div">
              <input type="email"
              placeholder='Your Email'
              className='form_control'
              />
            </div>

            <div className="form_input-div">
              <input type="text"
              placeholder='your Subject'
              className='form_control'
              />
            </div>
          </div>
          <div className="form_input-div">
            <textarea className="form_control textarea" placeholder='Your Message'></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact