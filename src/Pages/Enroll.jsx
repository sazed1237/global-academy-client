import React from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaArrowLeft } from 'react-icons/fa6';

const Enroll = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const status = "PENDING"


        const enrollData = { name, email, number, address, status }
        console.log(enrollData)

        const response = await axiosPublic.post('/enroll', enrollData)
        console.log(response.data)

        if (response?.data?.success) {
            toast.success("Your Enroll is Successful. we will contract you soon!")
            navigate('/')
        } else {
            toast.error(response?.data?.message)
        }

    }

    return (
        <div className=' w-full h-screen mx-auto flex items-center justify-center lg:mt-32 mt-20 text-white'>
            <div className='max-w-xl relative w-full bg-BgSecondaryColor p-5 my-10'>
                <Link to={'/'} className='flex hover:text-white duration-200 items-center gap-1 text-white/40 pb-4'><FaArrowLeft /> Back to home</Link>
                <h2 className='text-2xl text-center text-primaryColor pb-7'>Enroll your name and get our services</h2>

                <form onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                required
                                type="text"
                                name='name'
                                id='name'
                                placeholder='Enter your name'
                                className='w-full rounded-sm px-2 py-1 bg-transparent outline-none border border-primaryColor/20'
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name='email'
                                id='email'
                                placeholder='Enter your email'
                                className='w-full rounded-sm px-2 py-1 bg-transparent outline-none border border-primaryColor/20'
                            />
                        </div>
                        <div>
                            <label htmlFor="number">Mobile Number</label>
                            <input
                                required
                                type="text"
                                name='number'
                                id='number'
                                placeholder='Enter your mobile number'
                                className='w-full rounded-sm px-2 py-1 bg-transparent outline-none border border-primaryColor/20'
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name='address'
                                id='address'
                                placeholder='Enter your address'
                                className='w-full rounded-sm px-2 py-1 bg-transparent outline-none border border-primaryColor/20'
                            />
                        </div>

                    </div>
                    <div className='w-full text-center mt-10'>
                        <input type="submit" value="Enroll now" className='bg-primaryColor px-4 py-2 rounded-md text-lg hover:bg-BgPrimaryColor duration-300 hover:scale-105 cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Enroll;