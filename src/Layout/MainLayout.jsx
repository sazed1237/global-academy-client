import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import '../App.css'
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className='bg-secondaryColor'>
                <Outlet />
            </div>
            <Toaster position='bottom-right'  />
            <Footer />
        </div>
    );
};

export default MainLayout;