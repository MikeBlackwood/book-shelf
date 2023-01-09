import {useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

const BookShow = ({book}) =>
{
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookByID } = useBooksContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>
    const handleSubmit = ( ) => {
        setShowEdit(false);
    }

    if(showEdit)
    {
        content = <BookEdit book={book} onSubmit={handleSubmit}></BookEdit>
    }

    return (
        <div className='book-show'>
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            {content}
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>Edit</button>
                <button className='delete' onClick={()=> {deleteBookByID(book.id)}}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;