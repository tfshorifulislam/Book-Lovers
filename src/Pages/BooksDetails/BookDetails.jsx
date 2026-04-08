import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../API Context/APIContext';

const BookDetails = () => {
    const { id } = useParams()
    const books = useLoaderData();

    const expectBook = books.find(book => book.bookId === Number(id))
    const {
        bookName,
        author,
        image,
        tags,
        rating,
        review,
        totalPages,
        category,
        publisher,
        yearOfPublishing
    } = expectBook;



    const { handleReadBook, handleWishList } = useContext(BookContext);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <figure className='flex justify-center items-center p-20 bg-[#13131310] rounded-lg'>
                <img className='lg:h-125'
                    src={image}
                    alt={bookName} />
            </figure>
            <div>
                <div className='space-y-4 mb-6'>
                    <h1 className='playfair font-bold text-4xl text-[#131313] '>{bookName}</h1>
                    <p className='font-medium text-xl text-[#13131380] '>By: {author}</p>
                </div>
                <div className='border-t border-[#13131315] mb-4 '></div>
                <div className='font-medium text-xl text-[#13131380] mb-4'>
                    <p>{category}</p>
                </div>
                <div className='border-t border-[#13131315] mb-6 '></div>
                <div className='mb-6 leading-7 '>
                    <p className='font-bold text-[#131313]'>Review: <span className='font-normal text-[#13131370]'>{review}</span></p>
                </div>
                <div className='flex gap-4 mb-6 items-center'>
                    <p className='font-bold text-[#131313]'>Tag</p>
                    <div className='flex gap-5'>
                        {tags.map((tag, index) =>
                            <p
                                className='py-2 px-4 rounded-full bg-[#13131310] text-[#23BE0A] font-medium badge-xs sm:badge-sm md:badge-md lg:badge-lg' key={index}>
                                {tag}
                            </p>)}
                    </div>

                </div>
                <div className='border-t border-[#13131315] mb-6'></div>
                <div className='space-y-3 mb-8'>
                    <p className='text-[#13131370] leading-7'>Number of Pages: <span className='font-semibold text-[#131313]'>{totalPages}</span></p>
                    <p className='text-[#13131370] leading-7'>Publisher: <span className='font-semibold text-[#131313]'>{publisher}</span></p>
                    <p className='text-[#13131370] leading-7'>Year of Publishing: <span className='font-semibold text-[#131313]'>{yearOfPublishing}</span></p>
                    <p className='text-[#13131370] leading-7'>Rating: <span className='font-semibold text-[#131313]'>{rating}</span></p>
                </div>
                <div className='flex gap-5'>
                    <button
                        onClick={() => handleReadBook(expectBook)}
                        className='border border-[#13131330]  text-[#131313] rounded-lg font-semibold text-lg btn'>
                        Read
                    </button>
                    <button
                        onClick={() => handleWishList(expectBook)}
                        className='bg-[#50B1C9] text-white rounded-lg font-semibold text-lg btn'>
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;