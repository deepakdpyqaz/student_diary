import Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import { useHistory,NavLink,Link} from 'react-router-dom';
import { auth } from '../firebaeConfig/firebase';
const Navigation = () => {
    let history = useHistory();
    const logout = () => {
        auth.signOut().then(res=>{
            console.log(res);
            history.push('/');
        }).catch(err=>{
            console.log(err);
        });
    }
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand> <NavLink to="/dashboard" style={{"color":"inherit","textDecoration":"inherit"}}> Student Diary </NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between px-2">
                <Nav className="mr-auto">
                    <Nav.Link> <Link to="/dashboard" style={{"color":"inherit","textDecoration":"inherit"}}> Notes </Link></Nav.Link>
                    <Nav.Link> <Link to={"/dashboard/create"} style={{"color":"inherit","textDecoration":"inherit"}}> Create New </Link></Nav.Link>
                    <Nav.Link> <Link to="/profile" style={{"color":"inherit","textDecoration":"inherit"}}> Profile </Link></Nav.Link>
                </Nav>
                <Nav className="ml-2">
                    <Button onClick={logout} color="secondary" variant="contained">Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
export default Navigation;

