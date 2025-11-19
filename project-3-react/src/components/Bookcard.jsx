import './Bookcard.css'


const BookCard = ({ books, addToList }) => {

    return (
    <ul className="list-unstyled">
      {books.map((book, index) => (
        <li key={index} className="book-card card p-3 mb-3">
          <h3 className="book-title card-title"><strong>{book.title}</strong></h3>
          <p className="book-info card-text">Author:<strong> {book.author}</strong></p>
          <p className="book-info card-text">Genre: <strong>{book.genre}</strong></p>
          <button className="btn btn-primary btn-sm mt-2" onClick={() => addToList(book)}>Add to My list</button>
        </li>
      ))}
    </ul>
  );
};

export default BookCard;
