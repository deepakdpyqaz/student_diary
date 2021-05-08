import { useEffect,useState } from 'react';
import {auth} from '../firebaeConfig/firebase';
import {Container,TextField} from '@material-ui/core';
import './profile.scss';
const Profile = () => {
    const [user,set_user] = useState({});
    useEffect(()=>{
        let logged_user = auth.currentUser;
        set_user(logged_user);
    },[])
    return (
        <Container className="profile_form">
            <TextField id="standard-basic" variant="filled" color="secondary" fullWidth readonly label="Name" value={user.displayName} />
            <TextField id="standard-basic" variant="filled" color="secondary" fullWidth readonly label="Email" value={user.email} />
            <TextField id="standard-basic" variant="filled" color="secondary" fullWidth readonly label="Phone" value={user.phoneNumber}/>
        </Container>
    )
}

export default Profile;