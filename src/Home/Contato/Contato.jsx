import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contato.css'
import AnimatedComponent from '../../AnimatedComponent';
import ImageContato from '../../assets/contato-imagem.jpg'


export const Contato = () => {
  const sendEmail = (e => {
    e.preventDefault();

    emailjs.sendForm(
     'service_931rtm2', 
     'template_qrt2t1c', 
     e.target, 
     '0v_ZALNIMQO5kz_Vt'
    )
    .then((result) => {
        alert("Mensagem enviada com sucesso")
        window.location.relaoad()
      }, (error) => {
    alert("Erro ao enviar mensagem, tente novamente mais tarde")
    window.location.relaoad()
    });
}) 
   

  return (
    <div className='d-flex'>
        <AnimatedComponent className='w-100' animationType={'scale'}>
          <img src={ImageContato} className='w-100' alt="Imagem"/>
        </AnimatedComponent>
        <AnimatedComponent animationType={'scale'} className='form-container p-5 w-100'>
            <h1>Entre em contato </h1>
            <form className='d-flex flex-column gap-5 form' onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Nome'required/>
                <input type="email" name="user_email" placeholder='Email'required/>
                <input type="text" name="assunto" placeholder='Assunto'required/>
                <textarea rows={2} name="message" placeholder='Digite sua mensagem'/>
                <button className='btn' type="submit" required>Enviar</button>
            </form>
        </AnimatedComponent>
    </div>
  );
};

export default Contato