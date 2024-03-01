import { useState } from 'react'   // Importing the useState hook from React library
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [notes, setNotes] = useState([]);  // Declaring state variable 'notes' with initial value an empty array using useState hook

  function Form({ onSubmit }) {   // Declaring a child component 'Form' which takes a prop 'onSubmit'
    const [inputValue, setInputValue] = useState('');  // Declaring state variable 'inputValue' with initial value ''

    const handleSubmit = (e) => {   // Function to handle form submission
      e.preventDefault();  // Preventing default form submission behavior
      onSubmit({ id: Date.now().toString(), text: inputValue });  // Calling the onSubmit function passed as prop with 'inputValue'
      setInputValue('');  // Resetting 'inputValue' to an empty string
    };

    const handleChange = (e) => {  // Function to handle input value change
      setInputValue(e.target.value);  // Updating 'inputValue' with the new value entered in the input field
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>Nombre de notes : {notes.length}</div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange} // Calling handleChange function on input change event
          id="my-input"
          className="ml-2"
        />
        <button type="submit">Ajouter</button>
      </form>
    );
  }

  function List({ notes, onRemoveClick }) {     // Declaring a child component 'List' which takes a prop 'notes'
    return (
      <div>
        <ol>
          {notes.map((note) => (       // Mapping through 'notes' array to render each note
            <li key={note.id}>
              {note.text}
              &nbsp;
              <button onClick={() => onRemoveClick(note)}>X</button>
            </li>        // Rendering each note as list item with index as key
          ))}
        </ol>
      </div>
    );
  }

  const handleFormSubmit = (newNote) => {   // Function to handle form submission and add new note
    setNotes([...notes, newNote]);   
  };

  const onRemoveNoteBtnHandler = (noteToDelete) => {
    const newNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>Application Notes</h1>
      <Form onSubmit={handleFormSubmit} />
      <List notes={notes} onRemoveClick={onRemoveNoteBtnHandler} />
    </div>
  );
}

export default App;























