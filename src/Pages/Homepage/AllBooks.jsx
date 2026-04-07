import React, { use } from 'react';
import AllBooksCard from './AllBooksCard';

const dataPromise = fetch('booksData.json').then(res => res.json())
const AllBooks = () => {
    const books = use(dataPromise)
    console.log(books)
    return (
        <div>
            <div className='flex justify-center text-4xl font-bold text-[#131313] playfair mb-16'>
                <h1>Books</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center md:text-left mx-auto'>
                {books.map(book => <AllBooksCard key={book.bookId} book ={book} />)}
            </div>
        </div>
    );
};

export default AllBooks;