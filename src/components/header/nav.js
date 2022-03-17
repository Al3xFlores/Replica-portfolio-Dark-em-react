import React from 'react'
import './nav.css'
import logo from '../../assets/imgs/logo.png'
import NavLinks from './NavLinks'

export default function nav({acao}) {

  

  return (
    <header className={ acao ? 'ativaCor' : '' }>
      <div className='container'>
      <nav className="nav">
      <div className="logo">
        <img src={logo}/>
      </div>
     <div className="nav--right">
       <NavLinks />
     </div>
    </nav>
    </div>
    </header>
  )
}