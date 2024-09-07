import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaPhone, FaWhatsapp, } from 'react-icons/fa6';
import { SiMinutemailer } from "react-icons/si";


const HeadContact = () => {
    return (
        <div className=' md:px-14 p-4 bg-[#010851] text-white md:flex flex-col sm:flex-row sm:items-center gap-2 justify-between py-2 hidden'>

            <span className='flex items-center text-xs md:text-sm gap-2'><FaPhone /><a href="#">+88 01817-087372</a> or <SiMinutemailer /> <a href="#">ahmedwakil70@gmail.com</a></span>

            <div className='flex space-x-3'>
                <a href="https://www.facebook.com/share/t7CTm9zJsBMLsFD8/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className='md:h-6 md:w-6 hover:-translate-y-1 transition-all duration-300' />
                </a>
                <a href="https://wa.me/01817087372" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='md:h-6 md:w-6 hover:-translate-y-1 transition-all duration-300' />
                </a>
            </div>
        </div>
    );
};

export default HeadContact;