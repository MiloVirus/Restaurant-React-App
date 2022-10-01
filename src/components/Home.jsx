import React from 'react'
import FooterContacto from './FooterContacto'
import './home.css'


const Home = () => {
  return (
    <>
      <div class="container-fluid container-home">
        <div className="row">
          <div className="col col-img-home">
            <div>
              <h5 class="quote">"Mi restaurante preferido es donde estén mis amigos. Si me abren la puerta de su casa y están ahí en una mesa comiendo y conviviendo con el corazón, eso es todo lo que necesito."</h5>
            </div>
          </div>
          <div className="col-lg">
            <div>
              <h2 class="h2-main">Amazing Burgers</h2>
            </div>
            <div class="col-lg text-home-main">
              <div class="col text-home-second">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus necessitatibus eius ipsum. Ipsa incidunt consequuntur ullam cum officia quod sunt id delectus, eveniet, ratione unde sapiente tenetur assumenda reiciendis!
              </div>
              <div class="col text-home-third">
              Devon en nuestras propias instalaciones, con la misma alta calidad que en nuestros tostadores en el Reino Unido y en el extranjero. Visite <b>www.amazingburgers.com</b> para obtener más información. ¡Todo natural!
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContacto/>
    </>
    
  )
}

export default Home