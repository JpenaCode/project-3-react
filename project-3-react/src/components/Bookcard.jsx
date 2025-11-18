import './Bookcard.css'


const BookCard = ({ books, addToList }) => {

    return (
    <ul>
      {books.map((book, index) => (
        <li key={index} className="book-card">
          <h3 className="book-title"><strong>{book.title}</strong></h3>
          <p className="book-info">Author:<strong> {book.author}</strong></p>
          <p className="book-info">Genre: <strong>{book.genre}</strong></p>
          <button onClick={() => addToList(book)}>Add to My list</button>
        </li>
      ))}
    </ul>
  );
};

export default BookCard;