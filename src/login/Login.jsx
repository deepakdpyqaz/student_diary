import './login.scss';
import FormSidebar from '../formSidebar/FormSidebar';
import { TextField, Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { useState} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebaeConfig/firebase';
const Login =() => {
    const history = useHistory();
    const [login_creds,set_login_creds] = useState({"username":"","password":""});
    const [sidebar_text,set_sidebar_text] = useState("Login to see your notes");
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/dashboard"); 
      }
      else{
          history.push("/");
      }
    })

    const login_creds_change = (e) => {
        set_login_creds((prev_value)=>{
            return (
                {
                    ...prev_value,
                    [e.target.name] : e.target.value
                }
            )
        })
    }
    const firebaselogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(login_creds.username,login_creds.password).then((creds)=>{
            set_sidebar_text("Login Successfull");
        },(err)=>{
            set_sidebar_text(err.message);
        })
        set_sidebar_text("Please wait...");
        set_login_creds({"username":"","password":""});
    }
    return (
        <div className="login_wrapper_container">

        <div className="login_wrapper">
            <FormSidebar text={sidebar_text} />
            <form noValidate autoComplete="off" onSubmit={firebaselogin}>
                <TextField required fullWidth id="username" label="Enter your username" name="username"  onChange={login_creds_change}  value={login_creds.username} />
                <TextField required type="password" fullWidth id="password" label="Enter your password" name="password" onChange={login_creds_change}   value={login_creds.password}/>
                <Button style={{"marginBottom":"20px"}} disabled={!(login_creds.username && login_creds.password)} type="submit" variant="contained" color="secondary">Login</Button>
                <NavLink to="/signup">Register Here</NavLink>
            </form>
        </div>
        </div>
    )
}

export default Login;