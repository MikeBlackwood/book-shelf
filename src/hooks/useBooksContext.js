import {useContext} from "react";
import BooksContext from "../context/Books";


const useBooksContext = () => {
    return useContext(BooksContext)
}

export default useBooksContext;