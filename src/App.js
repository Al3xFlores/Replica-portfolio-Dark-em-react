import React, { useEffect, useState } from 'react'

import './App.css';
import Nav from './components/header/nav';
import Home from './components/home/home'
import About from './components/about/about'


function App() {

  const [ativaCor, setAtivaCor] = useState(false)

  useEffect(function(){
    function posicaoSroll() {
      if(window.scrollY > 10) {
        setAtivaCor(true)
      } else {
        setAtivaCor(false)
      }
    }
    window.addEventListener('scroll', posicaoSroll)
  })

  return (
    <>
    <Nav acao={ativaCor}/>
    <Home />
    <About />
    </>
  );
}

export default App;
