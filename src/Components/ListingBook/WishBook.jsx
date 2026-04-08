import React, { useContext } from 'react';
import { BookContext } from '../../API Context/APIContext';
import { IoLocationOutline } from "react-icons/io5";
import { GrDocumentUser } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";

const WishBook = () => {
    const { wishList } = useContext(BookContext);

    if (wishList.length === 0) {
        return (
            <div className="flex justify-center items-center h-[70vh] px-4">
                <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full border border-gray-100">

                    {/* Icon */}
                    <div className="text-6xl mb-4">📚</div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-[#131313] mb-2">
                        Your Wishlist is Empty
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 mb-6">
                        Looks like you haven’t added any books yet. Start exploring and add your favorite books here!
                    </p>

                    {/* Button */}
                    <button className="bg-[#23BE0A] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                        Browse Books
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div>
            {
                wishList.map(book => <div key={book.bookId}>
                    <div className='flex flex-col md:flex-row gap-9 mt-10 '>
                        <div className='bg-[#13131315] py-14 px-20 flex justify-center items-center rounded-2xl'>
                            <img className='h-30' src={book.image} alt={book.bookName} />
                        </div>
                        <div>
                            <h1
                                className='playfair font-bold text-2xl text-[#131313] mb-4'>{book.bookName}
                            </h1>
                            <p className='text-[#13131380] font-medium mb-4'>{book.author}</p>

                            <div className='mb-4 flex flex-col md:flex-row md:items-center gap-4 text-start'>
                                <p className='font-bold text-[#131313]'>Tag</p>
                                <span className='flex gap-4'>
                                    {book.tags.map((tab, i) =>
                                        <span
                                            key={i}
                                            className='py-2 px-4 bg-[#23BE0A10] text-[#23BE0A] rounded-full text-medium '>
                                            {tab}
                                        </span>)}
                                </span>
                                <p
                                    className='text-[#13131380] flex items-center gap-2'>
                                    <IoLocationOutline /> Year of Publishing: {book.yearOfPublishing}
                                </p>
                            </div>

                            <div className='text-[#13131360] mb-4 flex flex-col md:flex-row  md:items-center gap-6'>
                                <span className='flex items-center gap-2'>
                                    <MdManageAccounts />
                                    <p>Publisher: {book.publisher}</p>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <GrDocumentUser />
                                    <p>Pages: {book.totalPages}</p>
                                </span>
                            </div>

                            <div className='border-t border-[#13131315] mb-4'></div>

                            <div className='flex flex-col md:flex-row md:items-center gap-6'>
                                <div className='flex justify-center px-5 py-3 rounded-full bg-[#328EFF15]'>
                                    <p className='flex justify-center text-[#328EFF]'>Category: {book.category}</p>
                                </div>
                                <div className='flex justify-center  px-5 py-3 rounded-full bg-[#FFAC3315]'>
                                    <p className='text-[#FFAC33]'>Rating: {book.rating}</p>
                                </div>

                                <div className='flex justify-center  px-5 py-3 rounded-full bg-[#23BE0A]'>
                                    <p className='text-white font-medium'>View Details </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default WishBook;