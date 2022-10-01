import React from 'react'
import Firebase from './Firebase'
import {db, storage} from "../firebase"
import { useState } from 'react'
import { addDoc, collection} from 'firebase/firestore'
import { getDownloadURL, ref,  uploadBytes} from 'firebase/storage'

const FirebaseCreate = (props) => {

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [imageUpload, setImageUpload] = useState(null)
    const [imageName, setImageName] = useState() 
    

    const onSave = async (values) =>
    {
        await addDoc(collection(db,"menu"), values)
    }

    const uploadImage = (callback) => 
    {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name}`)
      const nameImg = imageUpload.name
      setImageName(nameImg)
      
      uploadBytes(imageRef, imageUpload).then((snapshot) =>
      {
        getDownloadURL(snapshot.ref).then((url) => {
          props.imageList((prev) => [...prev, url])
        })
      })

      callback({nombre, precio, nameImg})  
    }

    const handleEvent = (e) =>
    {
      e.preventDefault()
      setImageUpload(e.target.files[0])
    }
    
    const onSend = () => 
    {
      uploadImage(onSave)  
    }


  return (
    <>
     <div>
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input class="form-control" type='text' placeholder='Name' onChange={(e)=>{setNombre(e.target.value)}}/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Price</span>
            <input class="form-control" type='text' placeholder='Price' onChange={(e)=>{setPrecio(e.target.value)}}/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Image</span>
            <input type="file" onChange={handleEvent}/>
        </div>
            <button class="btn btn-primary" onClick={onSend}>Send</button>
     </div>
        
    </>
  )
}

export default FirebaseCreate