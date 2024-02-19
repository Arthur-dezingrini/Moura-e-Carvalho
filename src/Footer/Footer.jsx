import '../Footer/Footer.css'
import { FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
             <a href="https://wa.me/5554997106055" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="whatsapp-link"></FaWhatsapp></a>
            <div className='d-flex align-items-center justify-content-center p-4 w-100 footer'>
                <span>
                    Copyright © 2024 Moura e Carvalho advogados. Todos os direitos reservados.
                </span>
            </div>
        </div>
    )
}

export default Footer