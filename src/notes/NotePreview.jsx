import { useState } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams , useHistory} from 'react-router-dom';
import { db } from '../firebaeConfig/firebase';
import './notepreview.scss';
import { Button } from '@material-ui/core';
import { Edit, Delete,DoneAll,Clear } from '@material-ui/icons';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { CircularProgress } from '@material-ui/core';
const NotePreview = () => {
    const { id } = useParams();
    const history = useHistory();
    const [note, set_note] = useState({ "title": "", "description": "" });
    const [edit, set_edit] = useState(false);
    const [note_fetched, set_note_fetched] = useState(false);
    useEffect(() => {
        const docRef = db.collection("Notes").doc(id);
        docRef.get().then((snapshot) => {
            set_note({ "title": snapshot.data()['title'], "description": snapshot.data()["description"] });
            set_note_fetched(note);
        })
    }, []);
    const description_change = (e) => {
        set_note((prev_value) => {
            return { "title": prev_value.title, "description": e.target.value }
        });
    }
    const clear=()=>{
        set_note(note_fetched);
        set_edit(false);
    }
    const edit_description=()=>{
        set_edit(true);
    }
    const done=()=>{
        let docref = db.collection("Notes").doc(id);
        docref.update(note).then(()=>{
            set_edit(false);
            set_note_fetched(note);
        }).catch((err)=>{
            console.log(err);
        });
    }
    const delete_note = ()=>{
        db.collection("Notes").doc(id).delete().then(()=>{
            history.push("/dashboard");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            { note_fetched?
                <>
                    <h1 className="title">
                        <span>
                            {note.title}
                        </span>
                        <span>
                            
                                {!edit?<Button color="secondary"  onClick={edit_description}><Edit/></Button>:<><Button color="secondary" onClick={done}><DoneAll/></Button><Button color="secondary" onClick={clear}> <Clear/> </Button></>}
                            
                            <Button color="secondary" onClick={delete_note}><Delete /></Button>
                        </span>
                    </h1>
                    <div className="description">
                        {edit?<div className="change">
                            <TextareaAutosize style={{ "width": "100%" }} defaultValue="Type your text" value={note.description} onChange={description_change} fullWidth rowsMax="20" rowsMin="5"></TextareaAutosize>
                        </div>:""}
                        <div className="preview">
                            <ReactMarkdown>
                                {note.description}
                            </ReactMarkdown>
                        </div>
                    </div>
                </> : <div className="progress_wrapper"><CircularProgress color="secondary" /> </div>
            }
        </div>
    )
}

export default NotePreview;