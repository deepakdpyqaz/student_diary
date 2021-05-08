import './signup.scss';
import FormSidebar from '../formSidebar/FormSidebar';
import { TextField, Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { useState} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebaeConfig/firebase';
const Signup =() => {
    const history = useHistory();
    const [signup_creds,set_signup_creds] = useState({"name":"","username":"","password":""});
    const [sidebar_text,set_sidebar_text] = useState("Signup to enjoy our services!!");
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/dashboard"); 
      }
    })

    const signup_creds_change = (e) => {
        set_signup_creds((prev_value)=>{
            return (
                {
                    ...prev_value,
                    [e.target.name] : e.target.value
                }
            )
        })
    }
    const firebasesignup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(signup_creds.username,signup_creds.password).then((creds)=>{
            set_sidebar_text("signup Successfull");
            creds.user.updateProfile({
                "displayName":signup_creds.name
            })
        },(err)=>{
            set_sidebar_text(err.message);
        })
        set_sidebar_text("Please wait...");
        set_signup_creds({"name":"","username":"","password":""});
    }
    return (
        <div className="signup_wrapper">
            <FormSidebar text={sidebar_text} />
            <form noValidate autoComplete="off" onSubmit={firebasesignup}>
                <TextField required fullWidth id="name" label="Enter your name" name="name"  onChange={signup_creds_change}  value={signup_creds.name} />
                <TextField required fullWidth id="username" label="Enter your username" name="username"  onChange={signup_creds_change}  value={signup_creds.username} />
                <TextField required type="password" fullWidth id="password" label="Enter your password" name="password" onChange={signup_creds_change}   value={signup_creds.password}/>
                <Button style={{"marginBottom":"20px"}} disabled={!(signup_creds.username && signup_creds.password)} type="submit" variant="contained" color="secondary">signup</Button>
                <NavLink to="/">Already registered</NavLink>
            </form>
        </div>
    )
}

export default Signup;