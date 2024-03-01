export default function AddNote({ onSubmit }) {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(inputValue);
      setInputValue('');
    };

    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          id="my-input"
          className="ml-2"
        />
        <button type="submit">Ajouter</button>
      </form>
    );




   /* return (
    <form>
        <input type="text" placeholder="ajoutez une note"/>
    </form>
    )*/
}

/*function Form({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(inputValue);
      setInputValue('');
    };

    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          id="my-input"
          className="ml-2"
        />
        <button type="submit">Ajouter</button>
      </form>
    );
  }*/