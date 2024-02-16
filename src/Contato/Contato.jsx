import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { useRef } from "react";

const Contato = () => {
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
        <div className="d-flex">
            <div className="p-5 ms-5 w-75 gap-4 d-flex flex-column">
                <div>
                    <h1>Fale Conosco</h1>
                    <span>Você pode nos contactar pelo formulário de contato ou telefone. Entre em contato e agende uma visita.</span>
                </div>
                <div className="d-flex gap-5 flex-column">
                    <di className>
                    <h3>Goiania/GO</h3>
                        <div className="d-flex gap-3 ms-4">
                            <FaPhoneAlt></FaPhoneAlt>
                            <p>(62) 9 8173-6310</p>
                        </div>
                        <div className="d-flex gap-3 ms-4">
                            <FaLocationDot></FaLocationDot>
                            <p>Av. Deputado Jamel Cecílio, Nº 2496, Sala B 153, Ed. New Business Style, Jardim Goiás, Goiânia - Go | CEP: 74.810-100</p>
                        </div>
                    </di>
                    <div>
                        <h3>Brumadinho/MG</h3>
                        <div className="d-flex gap-3 ms-4">
                            <FaPhoneAlt></FaPhoneAlt>
                            <p>(62) 9 8173-6310</p>
                        </div>
                            <div className="d-flex gap-3 ms-4">
                                <FaLocationDot></FaLocationDot>
                                <p>Rua Lisio Pacífico Homem de Andrade, N º 520, Bairro Lourdes | CEP: 35.460-000.</p>
                            </div>
                    </div>
                    <div>
                        <h3>Belo Horizonte/MG</h3>
                        <div className="d-flex gap-3 ms-4">
                            <FaPhoneAlt></FaPhoneAlt>
                            <p>(62) 9 8173-6310</p>
                        </div>
                        <div className="d-flex gap-3 ms-4" >
                            <FaLocationDot></FaLocationDot>
                            <p>Rua Paracatu, nº 1154, Salas 715/716, 7º Andar Bairro Santo Agostinho | CEP: 30180-098.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex w-50'>
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
            </div>
    )
}

export default Contato