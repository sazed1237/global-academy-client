import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../utils/variants';
import { Link } from 'react-router-dom';


const HomeBanner = ({ banner, heading, subHeading, subHeading2, courseFee, btn1, btn2, hidden }) => {
    return (
        <div className='gradientBg rounded-xl  rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:min-h-[400px] md:flex-row-reverse items-center justify-between gap-12'>

                {/* banner image */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={banner} className='lg:pr-10' alt="" />
                </motion.div>


                {/* banner content */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}

                    className='md:w-3/4'
                >
                    <h1 className='md:text-5xl text-3xl font-bold text-white mb-6 lg:leading-relaxed'>
                        {heading}
                    </h1>

                    <p className='text-[#EBEBEB] text-lg  md:text-2xl mb-8'>{subHeading}</p>
                    <p className='text-yellow-300 font-bold  text-xl md:text-3xl'>{courseFee}</p>
                    <p className='text-[#EBEBEB] md:text-2xl mb-8'>{subHeading2}</p>


                    <div className='space-x-5 space-y-4'>
                        <Link to={'/enroll'} className='btnPrimary gradientBtn '>{btn1}</Link>
                        {/* <button className={`btnPrimary ${hidden ? 'hidden' : ''}`}>{btn2}</button> */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeBanner;