import axios from 'axios'

const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL: import.meta.env.VITE_PRODUCTION_BACKEND_URL,
        // baseURL: import.meta.env.VITE_BACKEND_URL,
    });

    return axiosPublic;
};

export default useAxiosPublic;