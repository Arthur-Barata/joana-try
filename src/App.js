import React from 'react'
import Header from './Header.js';
import FirstImg from './FirstImg.js';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Projects from './Projects.js';
import Form from './Form.js'
AOS.init()

function App() {

  function manda(event){
    
    console.log(event.target.value)
  }
  
  function CarouselImage(){
    return(
      <div className="img_carousel" data-aos='fade-up'>
             <img id="img_apresentation" alt="deputada Joana Darc"src="../assets/joana_miau.png"></img>
      </div>
    )

  }
 function Apresentation(){
  return(
  <div className="apresentation">
        <section className="text1">
          <div className="apresentation_title">
            <span data-aos="zoom-out" data-aos-delay="50"
    data-aos-duration="1000"></span>
            <h2 className='h2_aprensentation'>Conheça a Joana Darc protetora.</h2>
            <span data-aos="zoom-out" data-aos-delay="50"
    data-aos-duration="1000"></span>
          </div>
          <p className='p_apresentation'></p>
          <CarouselImage></CarouselImage>
          <p className='p_apresentation'>Eu sou a Joana Darc Cordeiro. Sou protetora de animais desde que consigo me lembrar e foi essa causa tão importante que me trouxe aos caminhos da política.

Fundei a ONG PATA – Proteção, Adoção e Tratamento Animal em 2011 e percebi que os avanços para a Causa estavam diretamente ligados a políticas públicas.

Se eu já tinha muito claro que essa era a missão da minha vida, precisava buscar formas efetivas de proteção aos animais. Entrei de corpo e alma nessa tarefa e fui a Vereadora mais jovem eleita na Câmara Municipal de Manaus em 2016 e, em 2018, fui a Deputada Estadual mais votada na capital do Amazonas.

Os animais me trouxeram para a política e o cuidado com as pessoas, sem distinção, me motiva todos os dias a dar voz e representatividade a quem precisa.</p>
        </section>  
      </div>

  )
 }

  return (
  <div id="view">
    <Header></Header>
    <FirstImg></FirstImg>
    <Apresentation></Apresentation>
    <Projects></Projects>
    <Form></Form>
    <section className='news'>
      <div className='news_content'>
        <h2>aaaaaaaaaaaaaaaa</h2>
        <div>
          
        </div>
      </div>
    </section>
    
  </div>
 
  )
}

export default App;