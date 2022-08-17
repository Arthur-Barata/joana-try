import React from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init()

function App() {

  function FirstImg(){
    return(
      <div className='img_firstImg'><img id="img_firstImg" alt= "imagem de campanha" src="../assets/joana_micCapa.jpeg"></img></div>
      )
  }

  function manda(event){
    
    console.log(event.target.value)
  }
  function Header(){
    return(
      <nav>
        <header> 
          <span id="logo"></span>
        <ul className="header ul">
          <li><span className='span_li'></span>SOBRE MIM</li>
          <li><span className='span_li'></span>PROJETOS</li>
          <li><span className='span_li'></span>PARTICIPE</li>

        </ul>
        </header>
      </nav>
    )
  }
  function CarouselImage(){
    return(
      <div className="img_carousel" data-aos='fade-up'>
             <img id="img_apresentation" alt="deputada Joana Darc"src="../assets/joana_plen.JPG"></img>
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
          <p className='p_apresentation'>A caminhada até aqui foi longa, mas não caminhei sozinha. Sempre tive ao meu lado, pessoas que acreditam no meu trabalho e sabem que juntos podemos fazer a diferença. 
            Por isso eu conto com o seu apoio.</p>
          <CarouselImage></CarouselImage>
          <p className='p_apresentation'> Abrace a esperança você também!
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
             Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              </p>
        </section>  
      </div>

  )
 }


  return (
  <div id="view">
    <Header></Header>
    <FirstImg></FirstImg>
    <Apresentation></Apresentation>

      
    <section className='projects' data-aos='fade-up' data-aos-delay="50"
    data-aos-duration="1000">
        <div className='projects_div'>
          <h2 id="section_three">Ela prometeu ela cumpriu!</h2>
           <p className='p_projects'>1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero,
             written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance . 
             The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
             comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
              </p>
          <div className='video_um' data-aos='fade-right'>
              <video controls src='../assets/joana_video.mp4'></video>      
          </div> 
          <div className='carousel_videos'></div>
        </div>
    </section>
    <section className='input_section'>

      <h2>Abraçe a causa!</h2>
      <h4>Faça parte do nosso trabalho.</h4>
    </section>
    
    
  </div>




 
  )
}

export default App;