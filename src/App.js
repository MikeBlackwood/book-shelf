import {useContext, useEffect, useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/Books";

function App() {

    const {fetchBooks} = useContext(BooksContext)

    useEffect(()=> {
        fetchBooks();
    }, [])



    return (
    <div className="app">
        <div>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate/>
        </div>
    </div>
  );
}

export default App;
