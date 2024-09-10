import React from 'react';
import cardImg1 from '../assets/images/logistics.jpg'
import cardImg2 from '../assets/images/payment.jpg'
import cardImg3 from '../assets/images/documents.jpg'
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
// variants


const Features = () => {
    return (
        <div className='' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-center px-10 py-10 ' >

                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='lg:w-1/4'
                >
                    <h2 className='text-3xl text-primaryColor/80 font-bold lg:w-1/2 mb-3'>Why we are Better than others</h2>
                    <p className='text-xs text-white/70'>Our Supply Chain course offers a comprehensive exploration of the dynamics in supply chain relationship & capable of taking leadership. Ideal of professionals with over 28+ years of experience, this 45days course into understanding and differentiating commercial relationships & gather unwanted experience of SCM. Learners will appraise how to prepare shipping documents, comply LC terms, analysis techniques and identify Competitive forces affecting supply chains. The course also covers processes for successful stakeholder engagement and the partnering. By the end, participants will gain practical skills in Sourcing, managing stakeholder relationships, and implementing partnerships effectively. This course not only enriches your technical skills and knowledge but also enhances the competencies valued by employers.</p>

                </motion.div>

                {/* Features card */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}

                    className='w-full lg:w-3/4'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        <div className='w-full h-[450px] gradientBtn shadow-3xl rounded-[35px] flex flex-col items-center  hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <img src={cardImg1} alt="" className='w-full h-52 rounded-t-[35px]' />

                            <div>
                                <h1 className='text-2xl font-semibold text-white px-2 text-center mt-2'>Logistics Managements </h1>
                                <p className='text-[14px] text-white/60 text-center pt-2 px-2'>Logistics management is the process of planning, implementing, and controlling the movement of goods, services, and information between the point of origin and the point of consumption. To know about loading & unloading any materials movement.</p>
                            </div>
                        </div>

                        <div className='w-full h-[450px] gradientBtn shadow-3xl rounded-[35px] flex flex-col items-center  hover:-translate-y-4 transition-all duration-300 cursor-pointer lg:mt-20'>
                            <img src={cardImg2} alt="" className='w-full h-52 rounded-t-[35px]' />

                            <div>
                                <h1 className='text-2xl font-semibold text-white px-2 text-center mt-2'>Payment Disbursement</h1>
                                <p className='text-[14px] text-white/60 text-center pt-2 px-2'>Disbursement or payment disbursement–is the delivery of payment from a business's bank account to a third party's bank account. The disbursement meaning refers to a range of payment types, including cash, electronic funds transfer from Nasto account or checks.</p>
                            </div>
                        </div>

                        <div className='w-full h-[470px] gradientBtn shadow-3xl rounded-[35px] flex flex-col items-center  hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <img src={cardImg3} alt="" className='h-52 w-full rounded-t-[35px]' />

                            <div>
                                <h1 className='text-xl font-semibold text-white px-2 text-center mt-2'>Export-Import compliance documentation</h1>
                                <p className='text-[14px] text-white/60 text-center pt-2 px-2'>Trade compliance is the process of complying with all laws covering the trade of goods and technology. This can mean not only export control regulations and laws, but also the import laws, as well as any international regulations and rules that must be followed by while in transit. Export compliance can be viewed as being a part of trade compliance, but not the other way around.</p>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Features;