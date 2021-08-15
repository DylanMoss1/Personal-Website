import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Personal Details</h2>
            <p><b>Name: </b>Dylan Moss</p>
            <p><b>Email: </b> dm894@cam.ac.uk</p>
            <p><b>Mobile Number: </b> 07935 875745</p>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Links</h2>
            <p><b>GitHub: </b> [Add link]</p>
            <p><b>LinkedIn: </b> [Add link]</p>
            <p><b>Resume: </b> [Add link]</p>
          </div>
        </div>

        <div class='footer-links'>
            <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                <p>Dylan Moss © 2020</p>
                <i class='fab fa-facebook-f' />
                <i class='fab fa-instagram' />
                <i class='fab fa-linkedin' />
            </div>
            </div>
        </div>
      </div>
    </div> 

    );
}

export default Footer;