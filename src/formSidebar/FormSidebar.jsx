import './formSidebar.scss';
const FormSidebar = (props)=>{
    return(
        <div className="form_sidebar">
              <h2>{props.text}</h2>
        </div>
    )
}

export default FormSidebar;