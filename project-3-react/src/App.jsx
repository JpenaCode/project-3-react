import { useState } from 'react'
import './App.css'
import NavBar from './components/nav.jsx'




// import statements above
const App = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const [searchTerm, setSearchTerm] = useState(''); // this was not in the lesson, this seperates the search state from the name state

  const handleChange = (event) => {
  setSearchTerm(event.target.value); // i replaced the setName to setSearchTerm so only the input updates and not the <p>Starship Name: {name}</p>
};

// const YOUR_API_KEY = '93926e8f19954ff8892185839241302'

const handleSubmit = async (event) => {
	event.preventDefault();

	let response = await fetch(
		`http://localhost:3000/books`
	);
	let JSONdata = await response.json();

  const firstBook = JSONdata[0];

  setTitle(firstBook.title)
	setAuthor(firstBook.author)
  setGenre(firstBook.genre)
};
  
  return (
    <>
      <NavBar key="nav"></NavBar>
      <form onSubmit={handleSubmit}>
        Search your book :
        <input type="text" onChange={handleChange} value={searchTerm}/> {/* i added the value={searchTerm}, this makes it so the that when the user types it shows up in the input and only in the input*/}
        <input type="submit" value="book search" />
      </form>
     
      <h1>Book:</h1>
      <p>Book Title: {title}</p>
      <p>Book Author: {author}</p>
      <p>Book Genre: {genre}</p>
    </>
  );
};


export default App;