import React from 'react'
import './home.css'
import hero from '../../assets/imgs/hero_img.png'

export default function home() {
  return (
   <section class="home">
   <div class="container">
     <div class="row">
       <div class="home--content">
         <div class="home--info">
           <h2>I’m Michael</h2>
           <h4>Freelance Web  Mobile <br/>UI/UX  Designer</h4>
           <div class="button">
             <button>
               <a href="#">Hire Me</a>
              </button>
           </div>
         </div>
         <div class="image">
           <img src={hero}/>
          </div>
       </div>
     </div>
   </div>
</section>
  )
}
