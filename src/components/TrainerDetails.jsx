import React from 'react';
import wakil from '../assets/trainer/Photo-Wakil.jpg'
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const TrainerDetails = () => {
    return (
        <div className='px-5 pb-10 flex flex-col items-center' id='trainer'>
            <div className='text-center  my-10'>
                <h5 className='text-primaryColor/70 md:text-lg font-bold uppercase' >- Trainer -</h5>
                <h1 className=' text-2xl md:text-5xl text-white py-2 font-bold'>Our Master Trainer</h1>
                <h3 className='md:text-2xl text-opacity-80 font-semibold text-[#F63E7B]'>Your are in safe hand.</h3>
            </div>
            <div className='text-white w-80 px-3'>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    style={{ backgroundImage: `url('${wakil}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-96 relative'>

                    <div className=' absolute bottom-0 pb-2 pl-3 bg-black w-full bg-opacity-40'>
                        <h1 className='text-2xl  font-semibold'>Wakil Ahmed</h1>
                        <p className='text-sm '>Deputy General Manager</p>
                        <p className='text-sm '>Supply chain management(import-export)</p>
                        <p className='text-sm '>Role, corporate commercial & supply chain.</p>
                        <p className='text-sm '>Max Group</p>


                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default TrainerDetails;