import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import HomePage from "../Pages/Homepage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BooksDetails/BookDetails";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/books', element: <Books /> },
            { path: '/booksDetails/:id', element: <BookDetails />, loader: ()=> fetch('booksData.json') },
        ],
        errorElement: <ErrorPage />
    },

])