import {createContext, useState} from 'react'
import axios from "axios";


const BooksContext  = createContext();

const Provider = ({children}) => {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }
    const createBook = async (title) => {
        const response  = await axios.post('http://localhost:3001/books', {
            title
        });
        const newList = [...books, response.data];
        setBooks(newList);
    }

    const editBookByID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle})
        const newBook = books.map((book) => {
            if (book.id === id)
            {
                return {...book, ...response.data}
            }
            return book
        })
        setBooks(newBook)
    }


    const deleteBookByID = async (id) =>
    {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const newList = books.filter((book) => {
            return book.id !== id
        })
        setBooks(newList)
    }

    const bookState = {
        books,
        deleteBookByID,
        editBookByID,
        createBook,
        fetchBooks
    }

    return (<BooksContext.Provider value={bookState}>
        {children}
    </BooksContext.Provider>)
}
export {Provider};
export default BooksContext;