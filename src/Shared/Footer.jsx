import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebook, FaRegCopyright, FaWhatsapp } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div className='my-12 flex flex-col md:flex-row gap-10'>

                <div className='md:w-1/2 space-y-8'>
                    <h1 className='text-2xl font-semibold flex items-center space-x-3 text-white'>GlobalChain Academy</h1>
                    <p className='md:w-1/2 '>Global Chain Academy is learning platform who promote themselves & where semi-skill, skilled, fresh comers, newly graduated student participated in this course but highly interested & efficient people in SCM & must be good in English reading-writing-speaking accommodate in this course.</p>

                </div>

                {/* Footer navigation */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>

                    <div className='space-y-4 mt-5 '>
                        <h2 className='text-2xl'>PlatForm</h2>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300' >Overview</a>
                            <a href="/" className='block hover:text-gray-300' >Features</a>
                            <a href="/" className='block hover:text-gray-300' >About</a>
                        </ul>
                    </div>

                    <div className='space-y-4 mt-5 '>
                        <h2 className='text-2xl'>Help</h2>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300' >How does it works?</a>
                            <a href="/" className='block hover:text-gray-300' >Where to ask quetions?</a>
                            <a href="/" className='block hover:text-gray-300' >How to play?</a>
                            <a href="/" className='block hover:text-gray-300' >What is needed for this?</a>
                        </ul>
                    </div>

                    <div className='space-y-4 mt-5 '>
                        <h2 className='text-2xl'>Contact</h2>
                        <p>+88 01817-087372</p>
                        <p>37/1, East Ahmed Nagor-paikpara <br />Chowdhuri Atikullah Saroni, <br />Mirpur-1, Dhaka-1216 </p>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row sm:items-center gap-5 justify-between md:my-6 my-2'>
                <p className='flex items-center text-sm md:text-base gap-2'><FaRegCopyright /> <span><a href="https://sazedulislam.netlify.app" target='_blank' >Sazed Creation's</a> 2024. All rights reserved.</span></p>

                <div className='flex space-x-3'>
                    <a href="https://wa.me/01817087372" target="_blank" rel="noopener noreferrer">
                        <FaWhatsappSquare className='h-6 w-6  hover:-translate-y-1 transition-all duration-300' />
                    </a>
                    <a href="https://www.facebook.com/share/t7CTm9zJsBMLsFD8/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className='h-6 w-6 hover:-translate-y-1 transition-all duration-300' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;