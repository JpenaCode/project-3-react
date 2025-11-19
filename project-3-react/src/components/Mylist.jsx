import './Mylist.css'

import {useState } from 'react'; // since were using 
//use state independently in this component a new useState has
//to be imported. 

const MyList = ({ myList, removeFromList }) => {

    const [bookNotes, setBookNotes] = useState([])
    // Step 2 for notes: create new useState Variable
    // to store the user input and updated in newBookNotes.

    const [newBookNotes, setNewBookNotes] = useState({
        notes: ''
    })

    const handleInputChange = (event) => {
        setNewBookNotes({...newBookNotes, [event.target.name]: event.target.value})
    }; // Step 3 for notes: this updates the new bookNotes array
    // with the value input in the form. 
 
    const handleSubmit = (event, index) => {
        event.preventDefault();

        const noteIndex = {...newBookNotes, index};

        setBookNotes(prevBookNotes => [...bookNotes, noteIndex]);
        // better understand why we need prevBookNotes ******* 
        setNewBookNotes({notes: ''})
    }; 

    // const handleNotesChange = (index, value) => {
    //     const updatedList = myList.map((book, index))
    // }



      return (
    <h1 className="text-center my-4">
      My List
      {myList.length === 0 ? (
        <p className="text-muted">Your List is Empty</p>
      ) : (
        <ul className="list-unstyled">
          {myList.map((book, index) => {
            const noteForThisBook = bookNotes.find(
              (note) => note.index === index
              // **** Research This More 
            );

            return ( // ***** why do we need two returns??? 
              <li className="book-card card mb-3 p-3" key={index}>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromList(book)}>x</button>
                <h3 className="book-title card-title">
                  <strong>{book.title}</strong>
                </h3>
                <p className="book-info card-text">
                  Author: <strong>{book.author}</strong>
                </p>
                <p className="book-info card-text">
                  Genre: <strong>{book.genre}</strong>
                </p>

                <form className="mt-2" onSubmit={(event) => handleSubmit(event, index)}>
                  <label className="form-label" htmlFor="notes">Add Notes: </label>
                  <input
                    className="form-control"
                    id="notes"
                    name="notes"
                    value={newBookNotes.notes}
                    onChange={handleInputChange}
                  />
                  <button type="submit" className="btn btn-primary btn-sm mt-2">Add Notes</button>
                </form>
                    
                <section className="bookCard-notes mt-3">
                  <strong>Notes:</strong>{" "} 
                  {noteForThisBook ? noteForThisBook.notes : "No notes yet."}
                </section>
              </li>
            );
          })}
        </ul>
      )}
    </h1>
  );
};


export default MyList;
