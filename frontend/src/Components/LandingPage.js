import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faInstagram,
    faStackOverflow
} from '@fortawesome/free-brands-svg-icons';

function LandingPage(props){
    return(
        <div  style={{position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
            <h1> Welcome to your <i><b>Contactfull!</b></i> </h1>
            <h3> Rok Šekoranja | Rookxc </h3>
            <h5> MongoDB | Express.js | React.js | Node.js </h5>
            <div style={{paddingTop: "10px"}}>
                <a href="https://www.instagram.com/rokseko/"><FontAwesomeIcon style={{marginRight: "50px", color: "#000"}} icon={faInstagram}/></a>
                <a href="https://www.facebook.com/rok.sekoranja.921/"><FontAwesomeIcon style={{marginRight: "50px", color: "#000"}} icon={faFacebook}/></a>
                <a href="https://www.linkedin.com/in/rok-sekoranja/"><FontAwesomeIcon style={{marginRight: "50px", color: "#000"}} icon={faLinkedin}/></a>
                <a href="https://github.com/Rookxc"><FontAwesomeIcon style={{marginRight: "50px", color: "#000"}} icon={faGithub}/></a>
                <a href="https://stackoverflow.com/users/9874809/rok-%c5%a0ekoranja"><FontAwesomeIcon style={{color: "#000"}} icon={faStackOverflow}/></a>
            </div>
        </div>
    )
}

export default LandingPage;