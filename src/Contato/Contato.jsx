import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Contato.css'
import AnimatedComponent from "../AnimatedComponent";
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';

import { useRef } from "react";

const Contato = () => {

    const Contatos = [
        {location: 'Brasilia/DF', phone: null, endereço: 'Brasília - Centro Empresarial Varig, Setor Comercial Norte, 12º andar, Quadra 4, Bloco B, 100, Asa Norte 70, Brasília - DF, 70714-900'},
        {location: 'Belo Horizonte/MG', phone: '(31) 9 7252-3131', endereço: 'Belo Horizonte - R. Paraíba, 550 - 8º Ed. Renaissance Work Center - Savassi, Belo Horizonte -   MG, 30130-140'},
        {location: 'São Paulo/SP', phone: '(31) 9 7252-3131', endereço: 'São Paulo - Av. Pres. Juscelino Kubitschek, 1455 - 4° Andar - Vila Nova Conceição, São Paulo - SP, 04543-011'},
        {location: 'Rio De Janeiro/RJ', phone: '(31) 9 7252-3131', endereço: 'Rio De Janeiro - Rua Lauro Müller, 116 - 32° Andar - Shopping Rio Sul, Botafogo, Rio De Janeiro - RJ, 22290-160'},
        {location: 'João Pessoa/PB', phone: '(31) 9 7252-3131', endereço: 'João Pessoa - Rua Maria das Dores Souza 81, João Pessoa, Paraíba - 58046-095'},
    ]

    
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
        <div className="d-flex">
            <AnimatedComponent className="w-100 d-flex flex-column contatos ">
                <div className="w-75 m-auto mb-5 ">
                    <h1 className="mt-5">Fale Conosco</h1>
                    <span>Para um melhor relacionamento com nossos clientes, concentramos nossa equipe operacional em nossa matriz.</span>
                </div>
                <div className="pb-5">   
                        <div className="d-flex w-75 m-auto">
                            <div className="mb-2 gap-2 d-flex flex-column contato">
                                <h3 className="title-contato"> Matriz - Goiania/GO</h3>
                                <div className="d-flex gap-3 ms-4 align-items-center justify-content-start contato-individual">
                                    <FaPhoneAlt className="icon-contato-location icon-contato"></FaPhoneAlt>
                                    <p>(62)99270-6106 / (62)98173-6310  / (62)3642-2328</p>
                                </div>
                                <div className="d-flex gap-3 ms-4 align-items-center justify-content-start contato-individual">
                                    <FaLocationDot className="icon-contato-location icon-contato"/>
                                    <p>Av. Deputado Jamel Cecílio, Nº 2496, Sala B 153, Ed. New Business Style, Jardim Goiás, Goiânia - Go | CEP: 74.810-100</p>
                                </div>
                                <div className="d-flex gap-3 ms-4 align-items-center justify-content-start contato-individual">
                                    <MdEmail className="icon-contato-location icon-contato"/>
                                    <p>contato@vmec.adv.br</p>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="pb-5">   
                    {Contatos.map((contato, index) => (
                        <div className="d-flex w-75 m-auto" key={index}>
                            <div className="mb-2 gap-2 d-flex flex-column contato">
                                <h3 className="title-contato"> {contato.location} </h3>
                                <div className="d-flex gap-3 ms-4 align-items-center justify-content-start contato-individual">
                                    <FaLocationDot className="icon-contato-location icon-contato"/>
                                    <p>{contato.endereço}</p>
                                </div>
                                {index !== Contatos.length - 1 && <div className="traco"></div>}
                            </div>
                        </div>
                    ))}
                </div>
                
            </AnimatedComponent>
            <div className='d-flex w-75 form-contato'>
                <div className='form-container p-5'>
                    <h1>Entre em contato </h1>
                    <form className='d-flex flex-column gap-5 form' onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder='Nome'required/>
                        <input type="email" name="user_email" placeholder='Email'required/>
                        <input type="text" name="assunto" placeholder='Assunto'required/>
                        <textarea rows={2} name="message" placeholder='Digite sua mensagem'/>
                        <button className='btn' type="submit" value="send">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contato
