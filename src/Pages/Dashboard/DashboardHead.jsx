import React, { useContext, useEffect, useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const DashboardHead = ({ startDate, setStartDate }) => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [userDetails, setUserDetails] = useState([])
    // const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const title = location.pathname.split('/')[2]


    useEffect(() => {
        const fetchDetails = async () => {
            const token = localStorage.getItem('access-token')
            const res = await axiosPublic.get(`/user?email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
            console.log("details", res.data)
            setUserDetails(res?.data?.data)
        }

        fetchDetails()
    }, [loading])

    // console.log("user details", userDetails)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartDate(new Date()); // Update startDate every second
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [setStartDate]);





    const handleLogout = () => {

        logOut()
            .then(() => { })
            .catch(error => console.log(error));

        // Show logout notification
        toast.info("You have been logged out.");

        // Redirect to the login page
        navigate('/login');
    };


    return (
        <div className='flex justify-between h-14 items-center bg-slate-100 px-5'>
            <label htmlFor="my-drawer-2" className="cursor-pointer drawer-button lg:hidden mr-7">
                <FaBarsStaggered className='text-xl' />
            </label>
            <div className='hidden lg:block'>
                <h3 className='capitalize text-2xl font-bold text-primaryColor'>{title}</h3>
            </div>

            <div className='flex items-center gap-x-5'>
                <p className='text-md hidden md:flex font-semibold text-right'>
                    {moment(startDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </p>

                {/* Profile dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userDetails?.photoURL} alt={userDetails?.displayName} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <p className='text-lg text-center py-2 text-primaryColor uppercase font-bold'>{userDetails?.role}</p>
                        <li>
                            {
                                user ? <button onClick={handleLogout}>Logout</button> : <Link to={'/login'} >login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHead;
