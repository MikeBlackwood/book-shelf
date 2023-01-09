import { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookCreate = () =>
{
    const [title, setTitle] = useState();
    const { createBook } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    }

    return (
        <div className='book-create'>
            <h3>Add Book</h3>
            <form onSubmit={onSubmit}>
                <label>Add Book</label>
                <input className='input' value={title}  onChange={handleChange}/>
                <button className='button'>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;