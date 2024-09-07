import React, { useState } from 'react';
import STATUS from '../utils/statusList';
import { IoMdClose } from 'react-icons/io';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const UpdateStatus = ({ enrollDetails, onClose, callFac }) => {
    const [enrollStatus, setEnrollStatus] = useState(enrollDetails?.status)
    const axiosPublic = useAxiosPublic()

    const handleOnChangeSelect = event => {
        setEnrollStatus(event.target.value)
    }

    const token = localStorage.getItem('access-token')

    const handleUpdate = async () => {
        try {
            const response = await axiosPublic.post(`/update-status/${enrollDetails?._id}`, { status: enrollStatus }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)

            if (response?.data?.success) {  
                toast.success(response?.data?.message)
                callFac()
                onClose()
            } else {
                toast.error(response?.data?.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='fixed z-10 top-0 bottom-0 left-0 right-0 h-full w-full flex justify-center items-center bg-slate-300 bg-opacity-50'>

            <div className='drop-shadow-3xl relative bg-white py-5 rounded-md px-5 w-full max-w-md'>

                <button className='absolute top-2 right-2 text-xl' onClick={onClose}>
                    <IoMdClose />
                </button>

                <h3 className='text-xl font-semibold'>Update Enroll Status</h3>
                <div className='mt-4 '>
                    <p>Name: {enrollDetails?.name}</p>
                    <p>Mobile: {enrollDetails?.number}</p>
                </div>
                <div className='flex justify-between mt-3 mb-7 '>
                    <p>Status: </p>
                    <select className='border px-5 py-1' value={enrollStatus} onChange={handleOnChangeSelect}>
                        {
                            Object.values(STATUS).map(s => {
                                return (
                                    <option value={s} key={s}>{s}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button onClick={handleUpdate} className="bg-red-500 mx-auto block px-2 md:px-3 py-1 rounded-sm text-white hover:bg-red-600" >Update</button>
            </div>
        </div>
    );
};

export default UpdateStatus;