import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/nav.jsx'
import BookCard from './components/Bookcard.jsx'
import Mylist from './components/Mylist.jsx'


// import statements above
const App = () => {
  const [books, setBooks] = useState([]); 
  // setting 'books' as the useState variable. That way we can reference title, author, genre. 

  // useEffect ==========================
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/books');
      const JSONdata = await response.json();
      setBooks(JSONdata); // this an array of all of the data that was fetched from /books 
    };
    getData();
  }, []); 
  // useEffect helps to upload the data as soon as the page is loaded. 
  // the extra [] in line 26 is called a dependency array. 
  // which tells the code to run / fetch as soon as the page loads. 

  // ====================================


// Search bar ===========================
  const [searchTerm, setSearchTerm] = useState(''); 
  // this was not in the lesson, this seperates the search state from the name state
  // line searchTerm setState Variable tracks the values found in the search bar. 
  // starts empty ('') but as the user types, it updates immedietly. 

  const handleChange = (event) => {
  setSearchTerm(event.target.value); 
  // i replaced the setName to setSearchTerm so only the input updates and not the <p>Starship Name: {name}</p>
  // event.target.value updates setSearchTerm with value={searchTerm} from the input. 
};
  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
);
// .filter is a method that searches 'books' and returns only the ones that meet the requiremens. 
// .toLowerCase makes it to where the search is not case sensitive. 
// Doesnt matter what the user puts in, it'll be turned to lower case. 
// .includes helps return any books that have any letters included in the searchTerm 
// ======================================

// Lift State ===================================
  const [myList, setMyList] = useState([])
  
  const addToList = (newListItem) => {
    console.log([...myList, newListItem])
    setMyList([...myList, newListItem])
  };

  const removeFromList = (bookToRemove) => {
    setMyList(prevList => 
      prevList.filter(book => book !== bookToRemove)
    );
  };

  return (
    <>
      <NavBar></NavBar>
      <input
          className="form-control my-4 w-75 mx-auto"
          type="text"
          placeholder="Search Library"
          value={searchTerm} 
          // value= is a control input that helps us manage the state of 'searchTerm'
          onChange={handleChange}
          // onChange= another control input that tracks the changes which then impact setSearchTerm. 
          // Therefore changing searchTerm.


          // No longer have to pass the entire 'books' array  to BookCard because when the search bar is empty
          // searchTerm useState will be empty so 'filteredBooks will return all of the items in the array. 
        />
      <BookCard 
      books={filteredBooks}
      addToList={addToList}></BookCard>
      
      <Mylist 
      myList={myList}
      removeFromList={removeFromList}></Mylist>

    </>
  );
};


export default App;
