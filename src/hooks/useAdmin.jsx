import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosPublic from './useAxiosPublic';

const useAdmin = () => {

    const { user,loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // const [loading, setLoading] = useState(false)
    const [isAdmin, setIsAdmin] = useState()


    useEffect(() => {
        const token = localStorage.getItem('access-token')
        const adminCheck = async () => {
            // setLoading(true)
            const response = await axiosPublic.get(`/user/admin/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("isAdmin", response?.data?.data)
            // setLoading(false)
            setIsAdmin(response?.data?.data)
        }

        adminCheck()
    }, [loading])


    return [isAdmin, loading];
};

export default useAdmin;