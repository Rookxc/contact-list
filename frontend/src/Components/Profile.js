import {useState, useEffect} from 'react';
import Button from './Button'
  
function Logout(){
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("userID", "");
    window.location.href = "/";
}

function Profile(props){   
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return(
        <div className="row d-flex justify-content-center">
            <div className="col-md-4">
                <div style={{ marginTop: "60px", backgroundColor: "#abb2ba", padding: "30px", borderRadius:"35px", borderColor: "#343a40", borderStyle: "solid", borderWidth: "10px"}}>
                    <p style={{marginTop: "30px"}}>Username: <b>{username}</b></p>
                    <p>Email: <b>{email}</b></p>
                    <Button text="Logout" onClick={Logout}></Button>
                </div>
            </div>
        </div>
    )    
}

   
    

export default Profile;