import React from 'react'
import './about.css'

export default function about() {
  return (
   <section className="about">
   <div className="container">
     <div className="row">
       <div className="about--content">
         <div className="about--title">
           <h2>About Me</h2>
          </div>
          <div className="about--info">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.</p>
           <button>
             <a href="#">View Works</a>
           </button>
           <button className="btn--cv">
             <a href="#">Dowload CV</a>
           </button>
          </div>
       </div>
      
     </div>

   </div>
    
 </section>
  )
}
