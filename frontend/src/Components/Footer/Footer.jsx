import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
        <div footer-logos>
        <img id='footer-logo1' src={assets.logo}  alt=''/>
            <img id='footer-logo2' src={assets.leta_food} alt='' />
        </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2> Company</h2>
            <ul>
                <li>Home</li>
                <li>About us </li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+254-758-747-247</li>
                <li>info@letafood.com</li>
            </ul>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>
        copyright 2024  letafood.com - All rights Reserved
    </p>
    </div>
  )
}
