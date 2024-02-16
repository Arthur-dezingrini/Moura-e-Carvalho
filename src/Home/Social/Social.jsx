import './Social.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Social = () => {
    return (
        <div className='container d-flex w-100 p-5'>
            <div className='contacts'>
                <div className='individual-social'>
                    <FaPhoneAlt className='icon'></FaPhoneAlt>
                    <span>(31) 3564-5231</span>
                </div>
                <div  className='individual-social'>
                    <MdEmail className='icon'></MdEmail>
                    <span>contato@mouraa.com.br</span>
                </div>
                <div  className='individual-social'>
                    <FaLocationDot className='icon'></FaLocationDot>
                    <span>
                        Rua Paracatu, nº 1154, Salas 715/716, 7º Andar Bairro Santo Agostinho - CEP: 30180-098 | Belo Horizonte/MG
                    </span>
                </div>
                <div className='individual-social'>
                    <div className='d-flex align-items-center'>
                        <FaFacebook className='icon'></FaFacebook>
                        <FiInstagram className='icon'></FiInstagram>
                    </div>
                    <span>SIGA-NOS</span>
                </div>
            </div>
        </div>
    )
}

export default Social