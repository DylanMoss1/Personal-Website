import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='social-icons'>
              <Link
                class='social-icon-link email'
                to='/'
                target='_blank'
                aria-label='Email'
              >
                <i class='fas fa-envelope fa-lg' />
              </Link>
              <Link
                class='social-icon-link github'
                to='/'
                target='_blank'
                aria-label='Github'
              >
                <i class='fab fa-github fa-lg' />
              </Link>
              <Link
                class='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin fa-lg' />
              </Link>
            </div>
          </div>
        </section>
        <small class='website-rights'>Dylan Moss © 2021</small>
      </div>
  );
}

export default Footer;
