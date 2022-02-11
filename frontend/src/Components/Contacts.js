import {useState, useEffect } from 'react';

import Button from './Button'
import ButtonSmall from './ButtonSmall'

function Contacts(){ 
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const [data, setData] = useState([]);

    var success = true;

    useEffect(() => {
        getContacts();
    },[]);

    async function getContacts(){
        var userID = localStorage.getItem("userID");

        const res = await fetch('http://localhost:3001/contacts/' + userID, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        var status = await res.status;
        var data = null;

        if(status === 201 || status === 200){
            data = await res.json();
        } 
        else{
            success = false;
        }

        setData(data);
    }

    async function addContact(e){
        e.preventDefault();

        var userID = localStorage.getItem("userID");

        const res = await fetch('http://localhost:3001/contacts/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: userID,
                first_name: first_name,
                last_name: last_name,
                phone_number: phone_number,
                email: email
            })
        });

        var status = await res.status;
        var data = null;

        if(status === 201 || status === 200){
            console.log("IF");
            data = await res.json();
        } 
        else{
            console.log("ELSE");
            success = false;
        }
 
        window.location.href = "/contact_list";
    }

    function addContactToForm(contact){
        document.getElementById("form").style.visibility="visible";
        document.getElementById("button").style.visibility="visible";
        
        setId(contact._id);
        setFirst_name(contact.first_name);
        setLast_name(contact.last_name);
        setPhone_number(contact.phone_number);
        setEmail(contact.email);   
    }

    async function editContact(){
        const res = await fetch('http://localhost:3001/contacts/' + id, {
            method: 'PUT',
            credentials: 'include',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                phone_number: phone_number,
                email: email
            })
        })

        var status = await res.status;
        var data = null;

        if(status === 201){
            data = await res.json();
        } 
        else{
            success = false;
        }

        setFirst_name("");
        setLast_name("");
        setPhone_number("");
        setEmail("");
 
        window.location.href = "/contact_list";
    }

    async function deleteContact(contact){
        if(window.confirm("Are you sure you wish to delete this contact?")){
             const res = await fetch('http://localhost:3001/contacts/' + contact._id, {
                 method: 'DELETE',
                 credentials: 'include',
                 headers:{
                     'Content-type': 'application/json'
                 },
             })
 
             var status = await res.status;
             var data = null;
         
            if(status === 201 || status === 200){
                 data = await res.json();
            }
        }
        else{
            console.log("Do nothing :)");
        }
    
        window.location.href = "/contact_list";

     }

    function changeVisibility(){
        document.getElementById("form").style.visibility="visible";
        document.getElementById("button").style.visibility="visible";
    }

    return (
        <>
        <br/> <br/>
            <h2 style={{marginBottom: "30px"}}> Contacts </h2>
            <div>
                <>
                {
                    data.map(contact=>{
                        return(
                        <div key={contact._id}>
                            <label className="name lead">{contact.first_name}{" "}{contact.last_name}</label><br/>
                            <span className="text-muted small">{contact.phone_number}</span><br/>
                            <span className="text-muted small">{contact.email}</span><br/>
                            <ButtonSmall text="✏️" onClick={()=>addContactToForm(contact)}/>
                            <ButtonSmall text="🚮" onClick={()=>deleteContact(contact)}/><br/><br/>
                        </div>)
                    })
                }
                </>
            </div>
            <Button text="➕" onClick={changeVisibility}></Button>
            <br/><br/>
            <div>
                <form style={{visibility: "hidden"}} id="form" className="form-group">
                        <h2 style={{marginBottom: "30px"}}> Add contact </h2>
                        <input
                            style={{marginBottom: "15px"}}
                            type="text"
                            className="form-control"
                            name="first_name"
                            placeholder="First name"
                            value={first_name}
                            onChange={(e) => {
                                setFirst_name(e.target.value);
                            }}
                        />
                        <input
                            style={{marginBottom: "15px"}}
                            type="text"
                            className="form-control"
                            name="last_name"
                            placeholder="Last name"
                            value={last_name}
                            onChange={(e) => {
                                setLast_name(e.target.value);
                            }}
                        />
                        <input
                            style={{marginBottom: "15px"}}
                            type="text"
                            className="form-control"
                            name="phone_number"
                            placeholder="Phone number"
                            value={phone_number}
                            onChange={(e) => {
                                setPhone_number(e.target.value);
                            }}
                        />
                        <input
                            style={{marginBottom: "15px"}}
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Button text="Add contact" onClick={addContact}/>   
                </form>

                <div style={{visibility: "hidden"}} id="button">
                    <Button text="Update contact" onClick={editContact}/>    
                </div>
            </div>
           
           
           
        </>
    );
}

export default Contacts;