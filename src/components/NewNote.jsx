import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import {Zoom }from "@mui/material";

function NewNote(props) {

    const [note, setNote] = React.useState({
        title : "",
        content : ""
    });

    const [flag, setFlag] = React.useState(0);

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title : "",
            content : ""
        });
        event.preventDefault();
    }

    function expand(){
        setFlag(1);
    }

    return (
        <div>
        <form className="create-note">
            {flag ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/> : null}
            
            <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={flag ? "1" : "3"} value={note.content}/>
            <Zoom in={flag}>
                <Fab onClick={submitNote}><AddIcon/></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default NewNote;
