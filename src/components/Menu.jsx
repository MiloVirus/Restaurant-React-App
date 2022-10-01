import React from 'react'
import FirebaseCreate from "./FirebaseCreate"
import {db, storage} from "../firebase"
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { listAll, ref,  uploadBytes, getDownloadURL} from 'firebase/storage'

const getData = async (callback) =>
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
 
  return (
    <>
    <div class="container container-menu">
        <div><h1>Menu</h1></div>
        <table class="table table-menu">
              <thead>
                  <th>Name: </th>
                  <th>Price USD: </th>
              </thead>
              <tbody>{menu.map((item, index) =>
              <tr key={index} id={item.id}>
                  <td class="table-light">{item.data().nombre}</td>
                  <td class="table-light">${item.data().precio}</td>
                  <td class="table-light">{imageList.map((itemList, index) =>
                  {
                   
                    if(itemList.path === `images/${item.data().nameImg}`)
                    {
                      return <img key={index}class="imageMenu" src={itemList.url} />
                    }
                    
                  })}</td>
              </tr>
              )}
          </tbody>
      </table>
    </div>
    </>
  )
}

export default Firebase