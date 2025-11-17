const BookCard = ({ books }) => {

    return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookCard;