import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../Providers/AuthProviders';

const ManageUsers = () => {

    const [AllUsers, setAllUsers] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)



    const token = localStorage.getItem('access-token');

    const fetchAllUsers = async () => {
        setLoading(true)
        const res = await axiosPublic.get(`/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)
        setAllUsers(res?.data?.data)
        console.log("users data", res?.data)
    }



    useEffect(() => {
        fetchAllUsers()
    }, []);


    const handleDelete = async (id) => {
        console.log(id)
        setLoading(true)

        const res = await axiosPublic.delete(`/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); // Adjust the endpoint as needed
        setLoading(false)

        console.log("delete user", res?.data)

        if (res.data.success) {
            toast.success(res.data.message)
            fetchAllUsers()
        }
    }




    return (
        <div>
            <div className='flex justify-between my-5 text-primaryColor items-center'>
                <p className='text-xl font-semibold '>Total Users: {AllUsers?.length}</p>
                <h2 className='text-3xl hidden md:block font-bold'>Manage Users</h2>
            </div>
            <div className='overflow-x-auto mx-auto'>
                <table className='w-full h-full table-fixed bg-black/60'>
                    <thead className='border-b bg-slate-300 px-2'>
                        <th className='w-5'>Sl</th>
                        <th className='w-20'>Image</th>
                        <th className='w-20'>Name</th>
                        <th className='w-28'>Email</th>
                        <th className='w-20'>Role</th>
                        <th className='w-20'>Action</th>
                    </thead>
                    <tbody>
                        {
                            AllUsers.map((user, index) => <tr key={index} className='text-center border-b'>
                                <td className='text-gray-300'>{index + 1}.</td>
                                <td className='text-gray-300  '>
                                    <img
                                        className='h-16 p-2 mx-auto rounded-full'
                                        src={user?.photoURL}
                                        alt="image"
                                    />
                                </td>
                                <td className='text-white font-semibold'>{user?.name}</td>
                                <td className='text-white/70'>{user?.email}</td>
                                <td className={`${user?.role === "admin" ? "text-green-500 uppercase font-semibold" : "text-primaryColor/80 uppercase"}`}>{user?.role}</td>

                                <td className=' w-full h-full flex items-center justify-center'>
                                    <button onClick={() => handleDelete(user?._id)} className='rounded-full text-sm p-2 text-red-500 hover:bg-red-600 hover:text-white hover:transition-all '>
                                        <IoMdClose />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;