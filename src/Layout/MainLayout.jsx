import React from 'react';
import NavBar from '../Components/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-480 w-11/12 mx-auto'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;