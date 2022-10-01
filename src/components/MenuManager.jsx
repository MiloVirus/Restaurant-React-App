import React from 'react'
import Firebase from './Menu'
import { getData } from './Firebase'

const MenuManager = (props) => {
  return (
    <>
    <div class="container">
      <div class="menu-admin-title"><h3>Menu</h3></div>
        <table class="table">
              <thead>
                  <th>Name: </th>
                  <th>Price USD: </th>
              </thead>
              <tbody>{props.menu.map((item, index) =>
              <tr key={index} id={item.id}>
                  <td data-label="Name" class="table-light">{item.data().nombre}</td>
                  <td data-label="Price" class="table-light">{item.data().precio}</td>
                  <td class="table-light">{props.imageList.map((itemList, index) =>
                  {
                   
                    if(itemList.path === `images/${item.data().nameImg}`)
                    {
                      return <img key={index} class="imageMenu" src={itemList.url} />
                    }
                    
                  })}</td>
                  <td class="table-light"><button class="btn btn-danger" onClick={() => props.onSendDelete(item.id)}>Delete</button></td>
              </tr>
              )}
          </tbody>
      </table>
    </div>
    </>
  )
}

export default MenuManager