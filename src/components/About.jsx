import React from 'react';
import aboutImg from '../assets/images/standard.jpg';
import aboutImg2 from '../assets/images/export-import.png';
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { OurCourses } from '../utils/OurCourses';
import { Link } from 'react-router-dom';



const About = () => {

    console.log(OurCourses)

    return (
        <div className='space-y-10 bg-BgSecondaryColor px-6 pb-6 md:pb-0' id='about'>
            {/* First part */}
            <div className=' flex flex-col md:flex-row justify-between items-center gap-8 pt-10'>
                {/* about image */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-5/12 ' >
                    <img src={aboutImg} alt="" />
                </motion.div>

                {/* About Content */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-2/4'
                >
                    <h2 className='text-primaryColor/70 md:text-5xl text-3xl  font-bold mb-4 leading-normal'>What you will learn!</h2>
                    {/* <h4 className='text-blue-500/80 md:text-3xl text-sm font-semibold '>Our Courses</h4> */}
                    <div className='py-5 text-base'>
                        {
                            OurCourses.map((course, index) => {
                                return (
                                    <p key={index} className='text-white hover:text-primaryColor duration-200'>{index + 1}. {course.title}</p>
                                )
                            })
                        }
                    </div>
                    <div className='mb-8 text-primaryColor'>
                        <p className='text-yellow-400'>Course fee ৳40,000/- only</p>
                        <p className='text-sm'>only 3 slot left</p>
                    </div>

                    <Link to={'/enroll'} className='btnPrimary'>Enroll Now</Link>
                </motion.div>
            </div>
            {/* 2nd part */}

            <div className=' flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                {/* about image */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-5/12 py-10'
                >
                    <img src={aboutImg2} alt="" />
                </motion.div>

                {/* About Content */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-2/4'
                >
                    <h2 className='text-primaryColor/80 md:text-5xl text-3xl font-bold mb-4 leading-normal'>Who we are?</h2>
                    <h4 className='text-green-500/80 md:text-3xl text-xl font-semibold '>About us</h4>
                    <p className='text-base text-white/60 pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sit, molestiae modi nesciunt sequi nulla soluta doloremque quaerat atque enim aut adipisci tempora dolore magnam quasi magni voluptates. Illo, adipisci!</p>

                    <button className='btnPrimary mt-10'>Read More</button>
                </motion.div>
            </div>

        </div>
    );
};

export default About;