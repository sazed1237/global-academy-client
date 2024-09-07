import React, { useContext, useState } from 'react';
import HeadContact from '../components/HeadContact';
import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../hooks/useAdmin';
import { Link } from 'react-scroll';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin()



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleLogOut = () => {
        logOut()
        toggleMenu()
    }


    const navItems = <>
        <li className='hover:text-primaryColor duration-300 cursor-pointer'><Link onClick={toggleMenu} to={'overview'} spy={true} smooth={true} offset={-100} activeClass='active' >Overview</Link></li> 
        <li className='hover:text-primaryColor duration-300 cursor-pointer'><Link onClick={toggleMenu} to={'feature'} spy={true} smooth={true} offset={-100} activeClass='active' >Feature</Link></li>
        <li className='hover:text-primaryColor duration-300 cursor-pointer'><Link onClick={toggleMenu} to={'about'} spy={true} smooth={true} offset={-100} activeClass='active' >About</Link></li>
        <li className='hover:text-primaryColor duration-300 cursor-pointer'><Link onClick={toggleMenu} to={'trainer'} spy={true} smooth={true} offset={-100} activeClass='active' >Trainer</Link></li>

         {
           isAdmin && <li className='hover:text-primaryColor duration-300 cursor-pointer'><a onClick={toggleMenu} href='dashboard/home'  spy={true} smooth={true} offset={-100} activeClass='active' >Dashboard</a></li>
         }

    </>

    const userProfile = <>
        {
            user ? <>
                <button onClick={handleLogOut} className='bg-BgPrimaryColor px-4 text-white py-1 md:py-2 transition-all duration-300 rounded hover:bg-primaryColor ' >Logout</button>
            </>
                : <>

                    <button onClick={handleLogin} className='bg-BgPrimaryColor px-4 text-white py-1 md:py-2 transition-all duration-300 rounded hover:bg-primaryColor ' >Login</button>
                </>
        }

    </>
    // console.log("isAdmin", isAdmin)

    return (
        <div className=' navBar fixed top-0 left-0 right-0'>
            <HeadContact />
            <nav className='bg-secondaryColor md:px-14 p-3 text-BgPrimaryColor navBar border-b border-primaryColor/50'>
                <div className='flex items-center justify-between font-medium'>

                    <div className='flex  gap-5 items-center'>
                        {/* menu btn for mobile */}
                        <div className='lg:hidden'>
                            <button onClick={toggleMenu} className=' text-primaryColor focus:outline-none '>
                                {
                                    isMenuOpen ? (<FaXmark className='w-6 h-6 text-lg' />) : (<FaBars className='w-6 h-6 text-lg' />)
                                }
                            </button>
                        </div>

                        {/* logo */}
                        <a href='/' className='text-xl  lg:text-2xl w-32  text-primaryColor '><span className='font-bold'>GlobalChain Academy</span></a>

                        {/* Menu full */}

                        <ul className='lg:flex space-x-8 pl-16 items-center text-white text-xl hidden '>
                            {navItems}
                        </ul>
                    </div>

                    <div className='lg:flex items-center gap-5'>
                        {/*  user */}
                        <div className='lg:flex items-center space-x-12 hidden'>
                            {userProfile}
                        </div>
                        <a href='/enroll' className='gradientBtn  px-4 text-white py-2 transition-all hover:scale-105 duration-300 rounded hover:bg-primaryColor ' >Enroll Now</a>
                    </div>

                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-5 pb-5 text-lg lg:hidden bg-[#1e1f2f] ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className='space-y-4 text-white'>
                    {navItems}
                </ul>
                {userProfile}
            </div>




        </div>
    );
};

export default Header;