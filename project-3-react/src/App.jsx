import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/nav.jsx'
import BookCard from './components/Bookcard.jsx'





// import statements above
const App = () => {
  const [books, setBooks] = useState([]); 
  // setting 'books' as the useState variable. That way we can reference title, author, genre. 
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  // useEffect ==========================
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/books');
      const JSONdata = await response.json();
      setBooks(JSONdata.results); // this an array of all of the data that was fetched from /books
    };
    getData();
  }, []); 
  // useEffect helps to upload the data as soon as the page is loaded. 

  // ====================================


// Search bar ===========================
  const [searchTerm, setSearchTerm] = useState(''); // this was not in the lesson, this seperates the search state from the name state

  const handleChange = (event) => {
  setSearchTerm(event.target.value); // i replaced the setName to setSearchTerm so only the input updates and not the <p>Starship Name: {name}</p>
};

const handleSubmit = async (event) => {
	event.preventDefault();

	let response = await fetch(
		`http://localhost:3000/books`
	);
	let JSONdata = await response.json();
   // data can also be refreshed / fetched when there is an event using a handler. 
  const firstBook = JSONdata[0];

  setTitle(firstBook.title)
	setAuthor(firstBook.author)
  setGenre(firstBook.genre)
};
// ======================================

  return (
    <>
      <NavBar></NavBar>
      <BookCard books={books}></BookCard>
      <form onSubmit={handleSubmit}>
        Search your book :
        <input type="text" onChange={handleChange} value={searchTerm}/> {/* i added the value={searchTerm}, this makes it so the that when the user types it shows up in the input and only in the input*/}
        <input type="submit" value="book search" />
      </form>
     
      <h1>Book: {title}</h1>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
    </>
  );
};


export default App;