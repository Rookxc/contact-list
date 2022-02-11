import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Button(props){
    return(
        <button style={{margin: "15px", width: "85px"}}  className="btn btn-dark" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;