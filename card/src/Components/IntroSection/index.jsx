import React from 'react';
import './style.css';

import topBG from '../../assets/I2.jpg';
import logo from '../../assets/Logo.png';
import agentPic from '../../assets/agentPic.jpg';

//Icons
import { FaPhone } from 'react-icons/fa6';
import { BsEnvelopePaperFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { FaGlobe } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function IntroSection() {
  return (
    <div className='IntroSection'>
      <div className='top-half-circle'>
        <img src={topBG} alt='I1' />
      </div>
      <div className='topLogo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='agentPic'>
        <img src={agentPic} alt='agentPic' />
      </div>
      <div className='agent-name-info'>
        <h1 className='agent-name'>Jane Smith</h1>
        <h2 className='agent-name agent-profession'>Real Estate Agent</h2>
      </div>
      <div className='bottom-half-circle'>
        <img src={topBG} alt='I1' />
      </div>
      <div className='social-icons'>
        <div className='social-icon icon-1'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaPhone />
          </a>
        </div>
        <div className='social-icon icon-2'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <BsEnvelopePaperFill />
          </a>
        </div>
        <div className='social-icon icon-3'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaMapMarkerAlt />
          </a>
        </div>
        <div className='social-icon icon-4'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaGlobe />
          </a>
        </div>
        <div className='social-icon icon-5'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF />
          </a>
        </div>
        <div className='social-icon icon-6'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
