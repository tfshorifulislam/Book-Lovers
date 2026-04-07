import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            
            {/* 404 Number */}
            <h1 className="text-[120px] font-extrabold text-[#23BE0A] leading-none">
                404
            </h1>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            {/* Button */}
            <a
                href="/"
                className="mt-6 px-6 py-3 bg-[#23BE0A] text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
                Go Back Home
            </a>

        </div>
    );
};

export default ErrorPage;