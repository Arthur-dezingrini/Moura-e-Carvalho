import './Social.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import AnimatedComponent from '../../AnimatedComponent';


const Social = () => {
    return (
        <AnimatedComponent className='container d-flex w-100 p-5'>
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
                    <div className='d-flex'>
                        <div className='d-flex social-mobile'>
                        <FaFacebook className='icon'></FaFacebook>
                        <FiInstagram className='icon'></FiInstagram>
                        </div>
                    </div>
                    <span>SIGA-NOS</span>
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default Social