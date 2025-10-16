import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycomponent from './mycomponent.jsx'
import Aiassisant from './aiassisant.jsx'
import NavBar from './navBar.jsx'
import img from './assets/react.svg'
import img1 from './assets/img2.jpg'
import img3 from './assets/img3.png'

createRoot(document.getElementById('root')).render(

   <div id='maindiv'>
    <Mycomponent props={{ title: "GHOST", content: "This is a React project1",honeypot:"this is compoent number 1" ,image: img}} />
  <Mycomponent props={{ title: "DEV LENS", content: "This is a React project2",honeypot:"this is compoent number 1" ,image: img1}} />
  <Mycomponent props={{ title: "PEN2PDF", content: "This is a React project3",honeypot:"this is compoent number 1" ,image: img3}} />

   </div>
    

)
