import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../Providers/AuthProviders';
import moment from 'moment';
import { FcComboChart } from 'react-icons/fc';
import { FaUser, FaUsers } from 'react-icons/fa6';
import { PiClockCountdownBold } from "react-icons/pi";
import { MdOutlineGridGoldenratio } from "react-icons/md";

const DashboardHome = ({ startDate }) => {

    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false)
    const [enrollments, setEnrollments] = useState([])
    const [users, setUsers] = useState([])
    const [dailyEnrollCount, setDailyEnrollCount] = useState({});

    const formattedDate = moment(startDate).format('YYYY-MM-DD')

    const token = localStorage.getItem('access-token')

    const fetchEnrollData = async () => {
        setLoading(true)
        const response = await axiosPublic.get('/enrollments', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setEnrollments(response?.data?.data)
        setLoading(false)
    }

    const fetchUsers = async () => {
        setLoading(true)
        const response = await axiosPublic.get('/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUsers(response?.data?.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchEnrollData()
        fetchUsers()
    }, [])

    console.log("users", users)
    console.log("enrollments", enrollments)


    const confirmEnroll = enrollments?.filter(enrollment => enrollment.status === "APPROVED")
    const rejectedEnroll = enrollments?.filter(enrollment => enrollment.status === "REJECTED")


    const enrollCountByDate = enrollments.reduce((acc, enrollment) => {
        const date = moment(enrollment?.createdAt).format('YYYY-MM-DD');
        acc[date] = (acc[date] || 0) + 1;
        return acc
    }, {});

    const todayEnrollCount = enrollCountByDate[formattedDate] || 0;
    console.log("daily count", todayEnrollCount)


    return (
        <section className=''>
            <h2 className="text-2xl py-4 font-medium">Hi, Welcome back : <span className='text-primaryColor font-bold'>{user?.displayName}</span></h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 bg-base-200 border-none ">
                <div className="stat bg-white text-primaryColor rounded ">
                    <div className="stat-figure text-secondary">
                        <MdOutlineGridGoldenratio className="text-5xl  " />
                    </div>
                    <div className="stat-title">Total Enrollments</div>
                    <div className="stat-value">{enrollments.length} </div>
                </div>

                <div className="stat bg-white text-primaryColor rounded ">
                    <div className="stat-figure text-secondary">
                        <PiClockCountdownBold className="text-5xl  " />
                    </div>
                    <div className="stat-title">Daily Enrollments</div>
                    <div className="stat-value">{todayEnrollCount}</div>
                </div>

                <div className="stat bg-white text-green-400 rounded ">
                    <div className="stat-figure text-green-500">
                        <MdOutlineGridGoldenratio className="text-5xl  " />
                    </div>
                    <div className="stat-title">Confirm Enrollments</div>
                    <div className="stat-value">{confirmEnroll?.length} </div>
                </div>

                <div className="stat bg-white text-red-500 rounded ">
                    <div className="stat-figure text-red-600">
                        <MdOutlineGridGoldenratio className="text-5xl  " />
                    </div>
                    <div className="stat-title">Rejected Enrollments</div>
                    <div className="stat-value">{rejectedEnroll.length} </div>
                </div>

                <div className="stat bg-white text-indigo-500 rounded ">
                    <div className="stat-figure text-indigo-600">
                        <FaUsers className="text-5xl  " />
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{users.length} </div>
                </div>

            </div>


        </section>
    );
};

export default DashboardHome;