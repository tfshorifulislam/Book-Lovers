import React from 'react';
import bannerImg from '../../assets/hero3.png';
const Banner = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto py-20">
                <div className="flex flex-col space-y-5 lg:flex-row-reverse items-center justify-between">
                    <img
                        className="lg:w-110"
                        src={bannerImg}
                    />
                    <div>
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:leading-15 xl:leading-20 text-[#131313] playfair text-center lg:text-left ">
                            Books to freshen up <br /> your bookshelf
                        </h1>

                        <div className='flex justify-center lg:justify-start'>
                            <button
                                className="btn btn-xs sm:btn-sm md:btn-md  bg-[#23BE0A] text-white font-medium lg:font-bold md:text-lg lg:text-xl mt-5 lg:mt-12">View The List

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;