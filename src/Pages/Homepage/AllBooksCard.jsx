import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router';

const AllBooksCard = ({ book }) => {
    
    return (
        <Link to={`/booksDetails/${book.bookId} `} className="relative rounded-2xl">
           <div className='bg-[#131313] absolute inset-0 z-50 opacity-0 hover:opacity-10 rounded-2xl'></div>
            <div className="card bg-base-100 shadow-sm ">
                <figure className='bg-base-200'>
                    <div className='p-10 flex justify-center items-center'>
                        <img
                            className='h-60'
                            src={book.image}
                            alt={book.author} />
                    </div>
                </figure>
                <div className="card-body">
                    <div className="flex gap-5 my-5">
                        {book.tags.map((tag, i) => <div key={i}>
                            <span className='bg-[#23BE0A10] py-3 px-4 rounded-full text-[#23BE0A] font-medium'>
                                {tag}
                            </span>
                        </div>)}
                    </div>
                    <h2 className="card-title playfair text-2xl font-bold text-[#131313] md:line-clamp-1 ">
                        {book.bookName}
                    </h2>
                    <p className='text-[#13131380] font-medium '>By : {book.author}</p>
                    <div className='border border-dashed border-[#13131325] my-5'></div>
                    <div className="card-actions justify-between">
                        <div
                            className="font-medium text-[#13131380]">
                            {book.category}
                        </div>
                        <div
                            className="font-medium text-[#13131380] flex items-center gap-1">
                            {book.rating}
                            <IoIosStarOutline />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AllBooksCard;