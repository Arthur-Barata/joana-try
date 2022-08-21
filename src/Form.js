import React, {useEffect, useState} from 'react'
import InputMask from 'react-input-mask';


function Form(){
  

  const[input,setInput]=useState(<input id='name' type='text' name='input_name' placeholder='WhatsApp'></input>)
  const[val,setVal]=useState('')
  const[cidades,setCidades]=useState(['MANAUS','PARINTIS', 'ITACOATIARA','ALVARAES',
  "AMATURA",
  "ANAMA",
  'ANORI',
  'APUI',
  'ATALAIA DO NORTE',
  'AUTAZES',
  'BARCELOS',
  'BARREIRINHA',
  'BENJAMIN CONSTANT',
  'BERURI',
  'BOA VISTA DO RAMOS',
  'BOCA DO ACRE',
  'BORBA',
  'CAAPIRANGA',
  'CANUTAMA',
  'CARAUARI',
  'CAREIRO',
  'CAREIRO DA VARZEA',
  'COARI',
  'CODAJAS',
  'EIRUNEPE',
  'ENVIRA',
  'FONTE BOA', 
  'GUAJARA',
  'HUMAITA',
  'IPIXUNA',
  'IRANDUBA',
  'ITAMARATI',
  'ITAPIRANGA',
  'JAPURA',
  'JURUA',
  'JUTAI',
  'LABREA',
  'MANACAPURU',
  'MANAQUIRI',
  'MANICORE',
  'MARAA',
  'MAUES',
  'NHAMUNDA',
  'NOVA OLINDA DO NORTE',
  'NOVO AIRAO',
  'NOVO ARIPUANA',
  'PAUINI',
  'PRESIDENTE FIGUEIREDO',
  'RIO PRETO DA EVA',
  'SANTA ISABEL DO RIO NEGRO',
  'SANTO ANTONIO DO ICA',
  'SAO GABRIEL DA CACHOEIRA',
  'SAO PAULO DE OLIVENCA',
  'SAO SEBASTIAO DO UATUMA',
  'SILVES',
  'TABATINGA',
  'TAPAUA',
  'TEFE',
  'TONANTINS',
  'UARINI',
  'URUCARA',
  'URUCURITUBA' 
  ])

    function change(event){
      setInput(<InputMask mask="(99)99999-9999 "  maskChar="_" id='inputtel' alwaysShowMask='true'></InputMask>)
       setVal(event.target.value)
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
      <div id='input_zap' onFocus={change} > 
        {input}
      </div>
      <input type='email' name='email' placeholder='E-mail' autoComplete='on'></input>
      <select>
        {cidades.map((cid)=>{
         return <option key={cid} value={cid}>{cid}</option>
        })}
      
      </select>
      </form>
    </section>)
}  

export default Form