import React from 'react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/footer.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar className='social-footer d-flex justify-content-center'>
      <FontAwesomeIcon className='social-icon' icon={faFacebook} />
      <FontAwesomeIcon className='social-icon' icon={faTwitter} />
      <FontAwesomeIcon className='social-icon' icon={faInstagram} />
      <FontAwesomeIcon className='social-icon' icon={faYoutube} />
      <FontAwesomeIcon className='social-icon' icon={faEnvelope} />
    </Navbar>
  );
}
