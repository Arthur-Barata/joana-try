import React, {useState} from 'react'
import InputMask from 'react-input-mask';


function Form(){

  const[val,setVal]=useState(<input id='name' type='text' name='input_name' placeholder='WhatsApp'></input>)

    function change(){
      setVal(<InputMask mask="(99)99999-9999 "  maskChar="_" id='inputtel' alwaysShowMask='true'></InputMask>)
    }
    function changeb(){
      setVal(<input id='name' type='text' name='input_name' placeholder='WhatsApp'></input>)
    }
  

  return(
    <section className='input_section'>
      <div className='input_title'>
        <h2>Abraçe a causa!</h2>
        <h4>Faça parte do nosso trabalho.</h4>
        <p>A caminhada até aqui foi longa, mas não caminhei sozinha. Sempre tive ao meu lado, 
          pessoas que acreditam no meu trabalho 
          e sabem que juntos podemos fazer a diferença. Por isso eu conto com o seu apoio.
           Abrace a esperança você também!</p>
      </div>
      <form className='form' >
        <input id='input_name' type='text' name='input_name' placeholder='Nome'></input>
      <div id='input_zap' onFocus={change} onBlur={changeb}> 
        {val}
      </div>
      <input type='email' name='email' placeholder='E-mail' autoComplete='on'></input>
      
      </form>
    </section>)
}  

export default Form