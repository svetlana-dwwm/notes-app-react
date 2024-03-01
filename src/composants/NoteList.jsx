import NoteListItem from './NoteListItem'

export default function NoteList({notes, onRemoveClick}) {

    const listNotes = notes.map((note, index) => 
    <li key={index}>{note.text}
        &nbsp;
        <button onClick={(event) => onRemoveClick(note)}>X</button>
    </li>
    );

    return (
    <>
    <p>Note List</p>
    <ul>{listNotes}</ul>
    </>
    )
}
