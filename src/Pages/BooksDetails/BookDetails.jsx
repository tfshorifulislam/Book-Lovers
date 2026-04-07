import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams()
    const books = useLoaderData();

    const expectBook = books.find(book => book.bookId === Number(id))
    const {
        bookId,
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
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='p-10 '>
                    <img
                        className='max-h-full w-full'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='mb-4'>
                        <h2 className="playfair font-medium md:font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-[#131313]">
                            {bookName}
                        </h2>
                    </div>
                    <div className='mb-6'>
                        <p className='font-medium text-xl text-[#13131380] '>By : {author}</p>
                    </div>

                    <div className=' border-t border-[#13131315] mb-4'></div>
                    <div className='mb-4'>
                        <p className='font-medium text-xl text-[#13131380]'>{category}</p>
                    </div>
                    <div className=' border-t border-[#13131315] mb-6'></div>
                    <div className='mb6'>
                        <p className='font-medium md:font-bold text-[#131313] leading-6'>Review: <span className='tex-[#13131370] font-normal'> {review}</span></p>
                    </div>
                    <div>
                        <p>Tag {tags.map(tag => <span> {tag}</span>)}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;