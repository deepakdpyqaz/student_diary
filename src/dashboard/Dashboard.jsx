import './dashboard.scss';
import Navbar from '../navbar/Navbar';
import { useEffect, useState } from 'react';
import { auth,db } from '../firebaeConfig/firebase';
import Note from '../notes/Note';
import NotePreview from '../notes/NotePreview';
import {CircularProgress} from '@material-ui/core';
import {BrowserRouter,Route,Switch, useHistory} from 'react-router-dom';
import NoteCreate from '../notes/NoteCreate';
import Profile from '../profile/Profile';
const Dashboard = () => {
    const [notes, set_notes] = useState([]);
    const [fetched,set_fetched]=useState(false);
    const history = useHistory();
    useEffect(() => {
        if(!auth.currentUser)
        {
            history.push('/');
            return;
        }
        let notesRef = db.collection("Notes").where('user_id',"==",auth.currentUser.uid);
        notesRef.onSnapshot((snapshot) => {
            set_notes(snapshot.docs.map((doc) => {
                return { "id": doc.id, "data": doc.data() }
            }));
            set_fetched(true);
        },err=>{
            console.log(err);
        })
    }, [])
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/dashboard/note/:id">
                        <NotePreview/>
                    </Route>
                    <Route path = "/dashboard/create">
                        <NoteCreate/>
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/dashboard">
                        { fetched?notes.map((note) => {return <Note key={note.id} title={note["data"]["title"]} id={note.id} />}): <div className="progress_wrapper"><CircularProgress color="secondary" /> </div>}
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Dashboard;