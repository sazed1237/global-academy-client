import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../Providers/AuthProviders';
import moment from 'moment';
import UpdateStatus from '../../components/UpdateStatus';
import { MdModeEdit } from 'react-icons/md';

const ManageEnrollments = () => {


    const [AllEnrollments, setAllEnrollments] = useState([])
    const [openStatus, setOpenStatus] = useState(false)
    const [enrollDetails, setEnrollDetails] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)



    const token = localStorage.getItem('access-token');

    const fetchAllEnrollments = async () => {
        setLoading(true)
        const res = await axiosPublic.get(`/enrollments`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)
        setAllEnrollments(res?.data?.data)
        console.log("enroll data", res?.data)
    }

    useEffect(() => {
        fetchAllEnrollments()
    }, []);


    const handleDelete = async (id) => {
        console.log(id)
        setLoading(true)

        const res = await axiosPublic.delete(`/enrollment/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)

        console.log("delete ", res?.data)

        if (res.data.success) {
            toast.success(res.data.message)
            fetchAllEnrollments()
        }
    }

    return (
        <div>
            <div className='flex justify-between my-5 text-primaryColor items-center'>
                <p className='text-xl font-semibold '>Total Enrollments: {AllEnrollments?.length}</p>
                <h2 className='text-3xl hidden md:block font-bold'>Manage Enrollments</h2>
            </div>

            <div className='overflow-x-auto mx-auto'>
                <table className='w-full h-full table-fixed bg-black/50'>
                    <thead className='border-b bg-slate-300 px-2'>
                        <th className='w-5'>Sl</th>
                        <th className='w-20'>Name</th>
                        <th className='w-20'>Email</th>
                        <th className='w-20'>Number</th>
                        <th className='w-20'>Address</th>
                        <th className='w-20'>Date</th>
                        <th className='w-20'>Status</th>
                        <th className='w-20'>Action</th>
                    </thead>
                    <tbody>
                        {
                            AllEnrollments.map((enrollment, index) => <tr key={index} className='text-center border-b'>
                                <td className='text-gray-300'>{index + 1}.</td>
                                <td className='text-white font-semibold'>{enrollment.name}</td>
                                <td className='text-orange-400 w-20'>{enrollment.email}</td>
                                <td className='text-orange-400 w-20'>{enrollment.number}</td>
                                <td className='text-gray-300'>{enrollment.address}</td>
                                <td className='text-gray-300 text-sm'>{moment(enrollment?.createdAt).format('YYYY-MM-DD')}</td>
                                <td>
                                    <button onClick={() => {
                                        setEnrollDetails(enrollment)
                                        setOpenStatus(true)
                                    }}
                                        className={`rounded-full text-sm p-2  hover:text-white hover:transition-all ${enrollment.status === "PENDING" ? "text-orange-500 hover:bg-orange-500" : enrollment.status === "APPROVED" ? "text-green-500 hover:bg-green-600" : "text-red-500 hover:bg-red-600"}`}
                                    >
                                        {enrollment?.status}
                                    </button>
                                </td>

                                <td className=' w-full h-full flex items-center justify-center'>

                                    <button onClick={() => handleDelete(enrollment?._id)} className='rounded-full text-sm p-2 text-red-500 hover:bg-red-600 hover:text-white hover:transition-all '>
                                        <IoMdClose />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

                {
                    openStatus && <UpdateStatus enrollDetails={enrollDetails} onClose={() => setOpenStatus(false)} callFac={fetchAllEnrollments} />
                }
            </div>


        </div>
    );
};

export default ManageEnrollments;