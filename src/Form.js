import React, {useEffect, useState} from 'react'
import InputMask from 'react-input-mask';
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getDocs,collection,addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCk1sF3UdLJSL3Jt2_9RdpQf8suI_IdyZk",
  authDomain: "joanasite-bb0e8.firebaseapp.com",
  projectId: "joanasite-bb0e8",
  storageBucket: "joanasite-bb0e8.appspot.com",
  messagingSenderId: "1065658968989",
  appId: "1:1065658968989:web:4caea343d5c26177511d74",
  measurementId: "G-FLQQ4NH04Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function fromFirebase(){
    const dados = await getDocs(collection(db,"apoiadores-joana"));

    dados.forEach((snapshot)=>{
      console.log(snapshot.data())
    })

}

fromFirebase()

async function toFirebase(event){
  event.preventDefault()
  let nome=document.getElementById("input_name")
  let email=document.getElementById("input_mail")
  let zap =document.getElementById("inputtel")
  let cidade =document.getElementById("input_cidade")
 
  try {
    const docRef = await addDoc(collection(db, "apoiadores-joana"), {
      nome: `${nome.value}`,
      telefone: `${zap.value}`,
      Email:`${email.value}`,
      cidade: `${cidade.value}` ,
      evento:true
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




function Form(){
  

  const[input,setInput]=useState(<input id='WhatsApp' type='text' name='input_name' placeholder='WhatsApp'></input>)
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
      
    }
 
  

  return(
    <section className='input_section'>
      <div className='input_title'>
        <h2>Abra??e a causa!</h2>
        <h4>Fa??a parte do nosso trabalho.</h4>
        <p>A caminhada at?? aqui foi longa, mas n??o caminhei sozinha. Sempre tive ao meu lado, 
          pessoas que acreditam no meu trabalho 
          e sabem que juntos podemos fazer a diferen??a. Por isso eu conto com o seu apoio.
           Abrace a esperan??a voc?? tamb??m!</p>
      </div>
      <form className='form' >
      <input id='input_name' type='text' name='input_name' placeholder='Nome'></input>
      <div id='input_zap' onFocus={change} > 
        {input}
      </div>
      <input id='input_mail' className='mail' type='email' name='email' placeholder='E-mail' autoComplete='on'></input>

      <select id="input_cidade">
        {cidades.map((cid)=>{
         return <option key={cid} value={cid}>{cid}</option>
        })}
      
      </select>

      <input className='sub' type='button'  value='ENVIAR' onClick={toFirebase}></input>
      </form>
    </section>)
}  

export default Form