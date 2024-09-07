import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaList, FaPlus, FaWallet } from 'react-icons/fa6';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import DashboardHead from '../Pages/Dashboard/DashboardHead';
import { FaHome, FaUserAlt } from 'react-icons/fa';

const Dashboard = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                {/* Dashboard content */}
                <DashboardHead startDate={startDate} setStartDate={setStartDate} ></DashboardHead>
                <div className='flex-1 px-3 bg-base-300 min-h-screen'>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet startDate={startDate} ></Outlet>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='flex'>
                    {/* Dashboard side bar */}
                    <div className='w-52 min-h-screen bg-secondaryColor'>
                        <div className='text-center pt-3 pb-8 text-3xl font-bold'>
                            <h1 className='text-primaryColor'>Global Chain <span className='font-light'>Academy</span></h1>
                        </div>
                        {/* <div className='text-white mx-2 space-y-5 rounded-md '>
                            <Link className='flex items-center rounded-md hover:bg-btnHoverColor bg-btnBgColor px-2 py-1 gap-2 duration-200 ' to={'/dashboard/addTrade'} > <FaPlus /> Add Trade </Link>
                        </div> */}

                        <ul className='menu uppercase text-white/70 mt-3'>
                            <li className='mb-10 capitalize'><NavLink to={'/dashboard/home'}>
                                <LuLayoutDashboard></LuLayoutDashboard>
                                Dashboard
                            </NavLink></li>


                            <li><NavLink to={'/dashboard/enrollments'}>
                                <FaList></FaList>
                                Manage Enroll
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/confirm'}>
                                <FaList></FaList>
                                Confirm enroll
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/rejected'}>
                                <FaList></FaList>
                                Rejected Enroll
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/users'}>
                                <FaUserAlt />
                                Manage Users
                            </NavLink></li>

                            <li><NavLink to={'/'}>
                                <FaHome />
                                Home
                            </NavLink></li>

                            {/* 
                            <li><NavLink to={'/dashboard/tradelog'}>
                                <FaWallet></FaWallet>
                                Trade Log
                            </NavLink></li> */}

                            {/* <li><NavLink to={'/dashboard/reports'}>
                                <LiaChartBar />
                                Reports
                            </NavLink></li> */}

                            {/* <li><NavLink to={'/dashboard/help'}>
                                <IoMdHelpCircleOutline />
                                Help
                            </NavLink></li> */}

                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;