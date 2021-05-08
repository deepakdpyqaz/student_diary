import {TextField,Button} from '@material-ui/core';
import './noteCreate.scss';
import {auth,db} from '../firebaeConfig/firebase';
import { useState } from 'react';
import { useHistory } from 'react-router';
const NoteCreate = () => {
    const [title,set_title]=useState("");
    const history = useHistory();
    function changeTitle(e){
        set_title(e.target.value);
    }
    function create(){
        db.collection('Notes').add({"title":title,"description":"","user_id":auth.currentUser.uid}).then((doc)=>{
            history.push("/dashboard/note/"+doc.id);
        }).catch(err=>{
            console.log(err);
        });
    }
    function cancel(){
        history.push("/dashboard");
    }
    return(
        <div className="create_note">
            <TextField id="filled-basic" fullWidth label="Note title" variant="filled" value={title} onChange={changeTitle} />
            <div className="btngroup">
                <Button variant="contained" onClick={create} color="primary">Create Note</Button>
                <Button variant="contained" onClick={cancel} color="secondary">Don't create</Button>
            </div>
        </div>
    )
}
export default NoteCreate;