import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NewNote from "./NewNote";

function App(){
    
    const [notes, setNotes] = React.useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
    <div>
        <Header/>
        <NewNote onAdd={addNote}/> 
        {notes.map((noteItem,index) =>
            <Note
                key = {index}
                id = {index}
                title = {noteItem.title}
                content = {noteItem.content}
                onDelete = {deleteNote}
            />
        )}
        <Footer/>
    </div>
    );
}

export default App;