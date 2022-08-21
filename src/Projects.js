import React from 'react'




function Projects(){

    
    return(
      <section className='projects' data-aos='fade-up' data-aos-delay="50"
      data-aos-duration="1000">
          <div className='projects_div'>
            <h2 id="section_three">É trabalho da Joana!!</h2>
            <h3 >Projetos de Lei:</h3>
             <div className='cards'>
                <ul className='cards_ul'>
                  <li className='cards_li'>
                    <img className='cards_icon' alt='cards icones' src='../assets/pata.png'></img>
                    <div className='cards_text'>Lei em favor dos animais silvestresaa aaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa</div>
                  </li>
                  <li className='cards_li'>
                    <img className='cards_icon' alt='cards icones' src='../assets/lgbt.png'></img>
                    <div className='cards_text'>Lei em favor dos idosos com mobilidade reduzida apenas pela manha</div>
                  </li>
                  <li className='cards_li'>
                    <img className='cards_icon' alt='cards icones' src='../assets/lei.png'></img>
                    <div className='cards_text'>Lei em favor dos homens com menos de 1,70 de altura</div>
                  </li>
                </ul>
                <ul className='cards_ul'>
                  <li className='cards_li'>
                    <img className='cards_icon' alt='cards icones' src='../assets/pessoas.png'></img>
                    <div className='cards_text'>Lei em favor dos animais silvestresaa aaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa</div>
                  </li>
                  <li className='cards_li'>
                    <img className='cards_icon' alt='cards icones' src='../assets/pata.png'></img>
                    <div className='cards_text'>Lei em favor dos idosos com mobilidade reduzida apenas pela manha</div>
                  </li>
                  <li className='cards_li'>
                    <img className='cards_icon' alt='cards icones' src='../assets/pessoas.png'></img>
                    <div className='cards_text'>Lei em favor dos homens com menos de 1,70 de altura</div>
                  </li>
                </ul>
  
              <button className='cards_btn'>Mais</button>
             </div>
             
          </div>
      </section>
    )
}

export default Projects