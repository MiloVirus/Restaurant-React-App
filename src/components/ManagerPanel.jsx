import React from 'react'
import Firebase from './Firebase'
import { signOut } from "firebase/auth";
import {useAuth} from './AuthContext'
import { auth } from '../firebase';
import FirebaseCreate from './FirebaseCreate';
import MenuManager from './MenuManager';
import ReservationsManager from './ReservationsManager'
import { useState } from 'react';


const ManagerPanel = () => {

  const [menu, setMenu] = useState(true)
  const [reservations, setReservations] = useState(false)
  

  const {usuario} = useAuth()
  
  const logOut = () =>
  {
    signOut(auth)
  }
  const bringMenu = () =>
  {
    console.log("click menu")
    setMenu(true)
    setReservations(false)
  }
  const bringReservations = () =>
  { 
    console.log("click reserve")
    setMenu(false)
    setReservations(true)
  }
  
  return (
    <> 
    <div class="container-fluid container-main-manager">
      <div className="row">
        <div className="col-sm manager-dashboard" id="manager-dashboard">
          <div className="dashboard">
            <div class="dashboard-item" onClick={bringMenu}><h6>Menu</h6></div>
            <div class="dashboard-item" onClick={bringReservations}><h6>Reservations</h6></div>
            <div class="align-self-end dashboard-item" onClick={logOut}><h6>Logout</h6></div>
          </div>
        </div>
        <div className="col-sm manager-panel">
        <div class="container-fluid">
        </div>
            {menu && <Firebase/>}
            {reservations && <ReservationsManager/>}
        </div>
      </div>
    </div>
    </>
  )
}

export default ManagerPanel