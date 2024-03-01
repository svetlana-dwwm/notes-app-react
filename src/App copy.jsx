import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteList from './composants/NoteList'
import Counter from './composants/Counter'
import Filter from './composants/Filter'
import NoteListItem from './composants/NoteListItem'
import AddNote from './composants/AddNote'

function App() {

  const [notes, setNotes] = useState([
    { id: 1, text: "first note"},
    { id: 2, text: "second note"},
    { id: 3, text: "third note"}
  ])

  function onRemoveNoteBtnHandler(noteToDelete) {
    
    const newNotes = notes.filter(note => note.id !== noteToDelete.id);
    setNotes(newNotes);
  }

  return (
    <>
    <h1>Application Notes</h1>
    <p>{notes.length} notes affichees</p>
    <Counter />
    <Filter />
    <NoteList notes={notes} onRemoveClick={onRemoveNoteBtnHandler} />   
    </>
  ) 
}

export default App;


/*function App() {

<h1>Application Notes</h1>

  const [count, setCount] = useState(0)  // Declaring state variable 'count' with initial value 0 using useState hook
  const [notes, setNotes] = useState([])  // Declaring state variable 'notes' with initial value an empty array using useState hook

  function Form({ onSubmit }) {   // Declaring a child component 'Form' which takes a prop 'onSubmit'
    const [inputValue, setInputValue] = useState('');  // Declaring state variable 'inputValue' with initial value ''

    const handleSubmit = (e) => {  // Function to handle form submission
      e.preventDefault();   // Preventing default form submission behavior
      onSubmit(inputValue);  // Calling the onSubmit function passed as prop with 'inputValue'
      setInputValue('');  // Resetting 'inputValue' to an empty string
    };

    const handleChange = (e) => {  // Function to handle input value change
      setInputValue(e.target.value);  // Updating 'inputValue' with the new value entered in the input field
    };

    return (
      <>
      <div>Nombre de notes : {notes.length}</div>  {/*Displaying the number of notes*//*}
      /*<form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}   // Calling handleChange function on input change event
          id="my-input"
          className="ml-2"
        />
        <button type="submit">Ajouter</button>
      </form>
      </>
    );
  }

  function List({ notes }) {  // Declaring a child component 'List' which takes a prop 'notes'
    return (
      <>
      <div>
        <ol>
          {notes.map((note, index) => (  // Mapping through 'notes' array to render each note
            <li key={index}>{note}
            &nbsp;
            <button onClick={() => onRemoveClick({ index })}>X</button>
            </li>  // Rendering each note as list item with index as key
          ))}
        </ol>
      </div>
      </>
    );
  }

  const handleFormSubmit = (newNote) => {  // Function to handle form submission and add new note
    setNotes([...notes, newNote]);  // Updating 'notes' state by adding newNote to the existing array
  };

  const onRemoveNoteBtnHandler = (noteToDelete) => {
    const newNotes = notes.filter((note, index) => index !== noteToDelete.index);
    setNotes(newNotes);
  };



export default App;