import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Michelle, © 2021</small>
          <div className="social-icons">
            
              <a style={{color: 'white'}} href="https://www.facebook.com/RicosCakes.kg">
              <i className="fab fa-facebook-f"/></a>
           
              
            
              <a style={{color: 'white'}} href="https://www.instagram.com/michelle_bishkek/">
              <i className="fab fa-instagram"/></a>
            
            <Link className="social-icon-link youtube"
              to="/"
              target='blank'
              aria-label='Youtube'
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="social-icon-link twitter"
              to="/"
              target='blank'
              aria-label='Twitter'
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="social-icon-link linkedin"
              to="/"
              target='blank'
              aria-label='Linkedin'
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
