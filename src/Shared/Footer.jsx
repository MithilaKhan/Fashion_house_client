import {  FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-base-600 text-base-content">
  <div>
  <div className="avatar">
  <div className="w-20 rounded-full">
    <img src= "https://yt3.ggpht.com/a/AATXAJw3YCl6MrL6wOTMLXLFBQOEGVP1jfXkph71WA=s900-c-k-c0xffffffff-no-rj-mo" />
  </div>
</div>
    <p className='text-orange-600'><a className=" upper-case font-bold text-3xl bg-gradient-to-r from-pink-600 from-10% via-orange-500 via-30% to-purple-600 to-90% text-transparent bg-clip-text italic">Fashion House</a><br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title text-orange-500">Services</span> 
    <a className="link link-hover text-gray-400">Branding</a> 
    <a className="link link-hover text-gray-400">Design</a> 
    <a className="link link-hover text-gray-400">Marketing</a> 
    <a className="link link-hover text-gray-400">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title  text-orange-500">Company</span> 
    <a className="link link-hover text-gray-400">About us</a> 
    <a className="link link-hover text-gray-400">Contact</a> 
    <a className="link link-hover text-gray-400">Jobs</a> 
    <a className="link link-hover text-gray-400">Press kit</a>
  </div> 
  <div>
    <span className="footer-title  text-orange-500">Address </span> 
    <p className="link link-hover text-gray-400">17/3 , Maniknagar , Dhaka-1203</p> 
    <p className="link link-hover text-gray-400">+8801812345678 , +8801711122233</p> 
    <a className="link link-hover text-gray-400">www.facebook.com</a> 
    <a className="link link-hover text-gray-400">www.youtube.com</a>
  </div>
</footer> 

<footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
  <div className="avatar">
  <div className="w-12 rounded-full">
    <img src= "https://yt3.ggpht.com/a/AATXAJw3YCl6MrL6wOTMLXLFBQOEGVP1jfXkph71WA=s900-c-k-c0xffffffff-no-rj-mo" />
  </div>
</div>
    <p className='text-orange-500'>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a className='w-full'><FaTwitter/> </a>
    <a><FaFacebook/></a>
    <a><FaYoutube/></a>
  </div>
</footer>
        </div>
    );
};

export default Footer;