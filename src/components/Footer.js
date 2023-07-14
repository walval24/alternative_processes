import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our Newsletter
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Alternative Processes
            </Link>
          </div>
          <small class='website-rights'>AP © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/groups/780786319000246'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/alternativeprocesses/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCoGvr0lDqpt141tYjq4KZPg'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link tiktok'
              href='https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F&lang=en&enter_method=mandatory'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='TikTok'
            >
              <i class='fab fa-tiktok' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/company/alternative-processes/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
