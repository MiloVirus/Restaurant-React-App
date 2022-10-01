import React from 'react'
import FirebaseCreate from "./FirebaseCreate"
import {db, storage} from "../firebase"
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { listAll, ref,  uploadBytes, getDownloadURL} from 'firebase/storage'

const ReservationsManager = () => {

const getData = async (callback) =>
{
    //const snapshot = await getDocs(collection(db, "usuarios"))
    onSnapshot(collection(db, "reservations"), (snapshot) => {
       callback(
        snapshot.docs.map(item => {
            console.log(item.id)
            return item
        })
    
       ) 
    })
    //callback(snapshot.docs.map(doc=>doc.data()))
}
const imageListRef = ref(storage, "images/")


    const [reservation, setReservation] = useState([])
   
   

    useEffect(() => {
      getData(setReservation)
    }, [])

  return (
  <>
  <div className="container">
    <div class="reservations-title"><h3>Reservations</h3></div>
    <table class="table">
              <thead>
                  <th>Name: </th>
                  <th>Email: </th>
                  <th>Phone: </th>
                  <th>Date: </th>
              </thead>
              <tbody>{reservation.map((item, index) =>
              <tr key={index} id={item.id}>
                  <td data-label="Name:" class="table-light">{item.data().name}</td>
                  <td data-label="Email:" class="table-light">{item.data().email}</td>
                  <td data-label="Phone:" class="table-light">{item.data().phone}</td>
                  <td data-label="Date:" class="table-light">{item.data().date}</td>
              </tr>
              )}
          </tbody>
      </table>
  </div>
  </>
  )
}


export default ReservationsManager