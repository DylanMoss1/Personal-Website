import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='social-icons'>
              <a
                class='social-icon-link email'
                href='mailto: dm894@cam.ac.uk'
                target='_blank'
                aria-label='Email'
              >
                <i class='fas fa-envelope fa-lg' />
              </a>
              <a
                class='social-icon-link github'
                href='https://github.com/DylanMoss1'
                target='_blank'
                aria-label='Github'
              >
                <i class='fab fa-github fa-lg' />
              </a>
              <a
                class='social-icon-link linkedin'
                href='https://www.linkedin.com/in/dylan-moss-455a54178/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin fa-lg' />
              </a>
            </div>
          </div>
        </section>
        <small class='website-rights'>Dylan Moss © 2021</small>
        <small class="website-rights"><a class="credits" href="http://www.videezy.com/">Free Stock Video Footage by Videezy.com</a></small>
      </div>
  );
}

export default Footer;
