import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Turnos from './componentes/turno';
import Navegacion from './componentes/navegacion';
import esperanza from './formatos/esperanza.gif';
import peces from './formatos/peces.png';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import hilos from './formatos/hilos.jpg';
import airelibre from './formatos/airelibre.jpg'
import bolos from './formatos/bolos.jpg'
import personas from './formatos/personassm.jpg'
import pinpom from './formatos/pinpomjpg.jpg'
import grupo from './formatos/grupolove.jpg'
import globos from './formatos/globos.jpg'
import tre from './formatos/trelove.jpg'
import directora from './formatos/personal/directora.jpeg'
import jfemfermera from './formatos/personal/jfemfermera.jpeg'
import jfemfermeros from './formatos/personal/jfemfermeros.jpg' 
import neurologo from './formatos/personal/neurologo.jpeg'
import psicologa from './formatos/personal/psicologa.jpeg'
import whats from './formatos/contactos/whats.png'
import call from './formatos/contactos/call.png'
import email from './formatos/contactos/email.png'
import ig from './formatos/contactos/ig.png'
import maps from './formatos/contactos/maps.png'


function App() {
  const images = [
    {
      //imagen grande
      original: hilos,
      //imagen peqqueña
      thumbnail: hilos
    },
    {
      //imagen grande
      original: airelibre,
      //imagen peqqueña
      thumbnail: airelibre
    },
    {
      //imagen grande
      original: bolos,
      //imagen peqqueña
      thumbnail: bolos
    },{
      //imagen grande
      original: personas,
      //imagen peqqueña
      thumbnail: personas
    },
    {
      //imagen grande
      original: pinpom,
      //imagen peqqueña
      thumbnail: pinpom
    },
    {
      //imagen grande
      original: grupo,
      //imagen peqqueña
      thumbnail: grupo
    },
    {
      //imagen grande
      original: globos,
      //imagen peqqueña
      thumbnail: globos
    },
    {
      //imagen grande
      original: tre,
      //imagen peqqueña
      thumbnail: tre
    },
    
  ];

  return (
    <Router>
      <div className='body'>
        <Navegacion />

        <Routes>
          <Route path="/" element={
            <div>
              <div className='menu'>
                <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '0px' }}>
                  <a href="#acerca">Acerca de Nosotros</a>
                  {/* <a href="#section2">Servicios</a> */}
                  <a href="#nosotros">Servicios</a>
                  <a href="#contacto">Contacto</a>
                  <Link to="/visitas">Turnos</Link>
                  <a href="#"><img src={peces} alt='logo' /></a>
                </nav>
              </div>

              <div className='gif'>
                <img src={esperanza} alt='gif' />
              </div>

              <div className='acerca' id="acerca" style={{ height: '500px', padding: '20px' }}>
                <h2>Bienvenidos a Esperanza: Tu Centro de Salud Integral</h2>
                <p>
                  En Esperanza, nos dedicamos a brindar atención médica de calidad con un enfoque integral y humano. Nuestro compromiso es ofrecer servicios de salud personalizados que promuevan el bienestar físico, emocional y mental de nuestros pacientes. Con un equipo de profesionales altamente capacitados y tecnología de punta, en Esperanza encontrarás el apoyo necesario para cuidar de tu salud y la de tus seres queridos. Ven y descubre un lugar donde tu bienestar es nuestra prioridad.
                </p>

                <div className='carrusel'>
                  <ImageGallery items={images} 
                  showPlayButton={false}
                  showNav={false}
                  showBullets={true}
                  autoPlay={true}
                  slideInterval={2500}
                  slideDuration={1000}
                  thumbnailPosition='left'
                  />
                </div>
              </div>

              {/* <div id="section2" style={{ height: '500px', padding: '20px' }}>
                <h2>Sección 2</h2>
                <p>Contenido de la Sección 2</p>
              </div> */}
 <hr class="divisoria" />
              <div className='personal' id="nosotros" style={{ height: '500px', padding: '20px' }}>
              

                <div className='imagen-box'>
                  <img src={directora}/>
                  <div className='contenido'>
                      <h3>Sandra Salvatierra</h3>
                      <p>DIRECTORA</p>
                  </div>
                </div>
                <div className='imagen-box'>
                  <img src={neurologo}/>
                  <div className='contenido'>
                      <h3>David Hoft</h3> 
                      <p>Especialista en neurologia</p>
                  </div>
                </div>

                <div className='imagen-box'>
                  <img src={psicologa}/>
                  <div className='contenido'>
                      <h3>Julieta Suarez</h3>
                      <p>Terapeutica general</p>
                  </div>
                </div>

                <div className='imagen-box'>
                  <img src={jfemfermeros}/>
                  <div className='contenido'>
                      <h3>Pedro Capo</h3>
                      <p>Encargado de emfermeros          -turnos nocturno-</p>
                  </div>
                </div>

                <div className='imagen-box'>
                  <img src={jfemfermera}/>
                  <div className='contenido'>
                      <h3>Kun chin Ga</h3>
                      <p>Encargada de enfermeras </p>
                  </div>
                </div>

            

                
              </div>

              {/* <!-- Agregamos la línea divisoria --> */}
               <hr class="divisoria" />

              <div className='contacto' id="contacto" style={{ height: '500px', padding: '20px' }}>
                <h2>Sección 3</h2>

                <div className='iconos'>
                  
                    <div className='maps'>
                      <img src={maps}/>
                    </div>

                    <div className='call'>
                      <img src={call}/>
                    </div>

                    <div className='email'>
                      <img src={email}/>
                    </div>

                    <div className='whats'>
                      <img src={whats}/>

                    </div> <div className='ig'>
                      <a href=''> <img src={ig}/></a>
                     
                    </div>
                
                </div>
          
              </div>
            </div>
          } />
          {/* <Route path="/visitas" element={<Turnos />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
