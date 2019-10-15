import React from 'react'
import {NavLink} from 'react-router-dom'
import '../sass/NavBar.scss'
import logo from '../../images/logo.png'
function toggle(){
    var midHide = document.getElementById("navMid");
    var hidden = document.querySelector(".navMid");
         // hidden.classList("hidden");
         console.log(midHide)
 }
 var midHide = document.querySelector("div");
 var hide = document.querySelectorAll(".navMid")
 
 var hidden = document.querySelector(".hidden");
 // hidden.classList("hidden");
 console.log(midHide)
 console.log(hide)

const NavBar = () => {
    function toggle(){
    var midHide = document.getElementById("navMid");

        var hidden = document.body.querySelector(".navMid");
             // hidden.classList("hidden");
             console.log(midHide)
     }
    //  var midHide = document.querySelector("div");
     var hide = document.querySelector(".navMid")
     var midHide = document.getElementById('#navMid');

     var hidden = document.querySelector(".hidden");
     // hidden.classList("hidden");
     console.log(midHide)
     console.log(hide)
    return(
        
        <>
        

        <div className="mainNav">
            <div className="navLeft">
            <img className='logo' onClick={e=>{ var hide = document.querySelector("#navHide"); hide.classList.toggle("hidden")}} src={logo} alt="logo placeholder"/>
            </div>
            <div id="navHide" className="navRight hidden">
            <NavLink exact className="navLink" to='/'>Home</NavLink>
            <NavLink className="navLink" to='/projects'>Projects</NavLink>
            <NavLink className="navLink" to="/contact">Contact</NavLink>
            </div>
            {/* <div id="navHide" className="navRight hidden">
            <i class="fab fa-react"></i>
            <i class="fab fa-java"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-sass"></i>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-php"></i>


            </div> */}

        </div>
        </>
      )
    
}
export default NavBar