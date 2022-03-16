import React from 'react'
import './nav.css'
import logo from '../../assets/imgs/logo.png'

export default function nav({acao}) {

  

  return (
    <header className={ acao ? 'ativaCor' : '' }>
      <nav className="nav">
      <div className="logo">
        <img src={logo}/>
      </div>
     <div className="nav--right">
      <ul>
       <li><a href="">Home</a></li>
       <li><a href="">About</a></li>
       <li><a href="">Services</a></li>
       <li><a href="">Portfolio</a></li>
       <li><a href="">Contat</a></li>
      </ul>
     </div>
    </nav>
    </header>
  )
}
