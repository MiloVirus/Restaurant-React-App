import React from 'react'
import { useState, useEffect } from 'react'
import {db} from "../firebase"
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

const FooterContacto = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [date, setDate] = useState()
    const [reservations, setReservations] = useState([])

    const onSave = async (values) =>
    {
        try
        {
            await addDoc(collection(db,"reservations"), values)
            alert("Form sent succesfully")
        }
        catch(error)
        {
            alert("Failed to send Form")
        }
    }

    const getData = async (callback) =>
    {
    
    onSnapshot(collection(db, "reservations"), (snapshot) => {
       callback(
        snapshot.docs.map(item => {
            return item
        })
    
            ) 
        })
    
    }
    useEffect(() => {
        
      getData(setReservations)

    }, [])
    

    const onSend = () => 
    {
       onSave({name, email, phone, date})
    }

  return (
    <>
    <div class="container-fluid container-footer">
            <div className="row contact-form">
                <div className="col">
                </div>
                <div className="col">
                    <div class="contactanos"><h4>Contact</h4></div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name" onChange={(e)=>{setName(e.target.value)}}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput2" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput2" class="form-label">Phone number</label>
                        <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="+150883904" onChange={(e)=>{setPhone(e.target.value)}}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Date and Time</label>
                        <input class="form-control" type="datetime-local" onChange={(e)=>{setDate(e.target.value)}}/>  
                    </div>
                    <button class="btn btn-primary" onClick={onSend}>Send</button>
                </div>  
            </div>
    </div>
    </>
    
  )
}

export default FooterContacto