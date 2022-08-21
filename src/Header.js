import React from 'react'

function Header(){
    function scrollTo(event){
    var element = document.getElementsByClassName("apresentation")[0];
    if(event.target.value===1){
      element = document.getElementsByClassName("apresentation")[0];
      element.scrollIntoView({behavior: "smooth"});
      console.log(event.target.value)
    }
    if(event.target.value===2){
      element = document.getElementsByClassName("projects")[0];
      element.scrollIntoView({behavior: "smooth"});
      console.log(event.target.value)
    }
    if(event.target.value===3){
      element = document.getElementsByClassName("input_section")[0];
      element.scrollIntoView({behavior: "smooth"});
      console.log(event.target.value)
    }
    }
    return(
      <nav>
        <header> 
          <span id="logo"><img src='../assets/num_nome_azul.png'></img></span>
        <ul className="header ul">
          <li onClick={scrollTo} value={1}><span className='span_li'></span>SOBRE MIM</li>
          <li onClick={scrollTo} value={2}><span className='span_li' ></span>PROJETOS</li>
          <li onClick={scrollTo} value={3}><span className='span_li'></span>PARTICIPE</li>

        </ul>
        </header>
      </nav>
    )
  }
  export default Header