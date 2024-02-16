import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contato.css'

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          alert("Mensagem enviada com sucesso")
        },
        (error) => {
          alert("Algo deu errado, tente novamente mais tarde")
        },
      );
  };

  return (
    <div className='d-flex'>
        <img src="./src/assets/contato-imagem.jpeg" alt="Imagem"/>
        <div className='form-container p-5'>
            <h1>Entre em contato </h1>
            <form className='d-flex flex-column gap-5 form' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Nome'required/>
                <input type="email" name="user_email" placeholder='Email'required/>
                <input type="text" name="user_assunto" placeholder='Assunto'required/>
                <textarea rows={2} name="message" placeholder='Digite sua mensagem'/>
                <button className='btn' type="submit" required>Enviar</button>
            </form>
        </div>
    </div>
  );
};

export default Contato