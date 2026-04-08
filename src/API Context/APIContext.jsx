import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();

const APIContext = ({ children }) => {

    const [readBook, setReadBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleWishList = (expectBook) => {

        const isExisted = readBook.find(book => book.bookId === expectBook.bookId);
        if (isExisted) {
            toast.error(`${expectBook.bookName} is already in your reading list.`)
            return;
        }

        const exist = wishList.find(book => book.bookId === expectBook.bookId);

        if (exist) {
            toast.error(`${expectBook.bookName} is already in your wishlist.`);
        }
        else {
            toast.success(`${expectBook.bookName} added to your wishlist.`);
            setWishList([...wishList, expectBook]);
        }
    }


    const handleReadBook = (expectBook) => {
        const exist = readBook.find(book => book.bookId === expectBook.bookId);

        if (exist) {
            toast.error(`${expectBook.bookName} is already in your reading list.`);
        }
        else {
            toast.success(`${expectBook.bookName} added to your reading list.`);
            setReadBook([...readBook, expectBook]);
        }
    }


    const data = {
        readBook,
        setReadBook,
        handleReadBook,
        handleWishList,
        wishList,
        setWishList
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default APIContext;
