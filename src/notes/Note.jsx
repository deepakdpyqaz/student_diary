import './note.scss';
import {Link} from 'react-router-dom';
const backgrounds = [
    "#F5B700","#DC0073","#00A1E4","#04E762"
]
const Note = (props) => {
    return (
        <div className="note" style={{"background":backgrounds[Math.floor(Math.random()*backgrounds.length)]}}>
            <Link to={"/dashboard/note/"+props.id} style={{"textDecoration":"none"}}>
                <div className="title">{props.title}</div>
            </Link>
        </div>
    )
}
export default Note;