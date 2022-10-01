import React from "react"
import FirebaseCreate from "./FirebaseCreate"
import {db, storage} from "../firebase"
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { listAll, ref,  uploadBytes, getDownloadURL} from 'firebase/storage'
import MenuManager from "./MenuManager"



export const getData = async (callback) =>
{
    //const snapshot = await getDocs(collection(db, "usuarios"))
    onSnapshot(collection(db, "menu"), (snapshot) => {
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
const Firebase = () => {

    const [menu, setMenu] = useState([])
    const [imageList, setImageList] = useState([])
    const [imgPath, setImagePath] = useState([])

    useEffect(() => {
      getData(setMenu)
      createList()
    }, [])

    const createList = () => 
    {
      listAll(imageListRef).then((response) =>
      {
        console.log(response)
        response.items.forEach((item) => {
          let path = item._location.path
          setImagePath()
          getDownloadURL(item).then((url) =>
          {
            setImageList((prev) => [...prev, {url, path}])  
          })
        })  
      })
    }
 
    const onDelete = async (values) =>
    {   
        const docRef = doc(db, "menu", values);
        await deleteDoc(docRef)
    }

    const onSendDelete = (id) => 
    {
      let result = window.confirm("Are you sure you want to delete this item ?")
      if (result === false){

      }
      else
      {
        onDelete(id)
      }   
    }

  return (
    <>
    <MenuManager menu ={menu} imageList={imageList} onSendDelete={onSendDelete}/>
    <FirebaseCreate createList={createList} imageList={setImageList} />
    </>
  )
}

export default Firebase