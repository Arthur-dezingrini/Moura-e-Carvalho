import './Social.css'
import Telefone from "../../assets/Telefone.png"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import AnimatedComponent from '../../AnimatedComponent';


const Social = () => {
    return (
        <AnimatedComponent className='container d-flex w-100 p-5'>
            <div className='contacts'>
                <div className='individual-social pt-2 gap-3'>
                    <img src={Telefone} className='icon2' width={45}></img>
                    <span>(62) 99270-6106 / (62)3642-2328 </span>
                </div>
                <div  className='individual-social'>
                    <MdEmail className='icon'></MdEmail>
                    <span>contato@vmec.adv.br</span>
                </div>
                <div  className='individual-social'>
                    <FaLocationDot className='icon'></FaLocationDot>
                    <span>
                    Av. Deputado Jamel Cecílio, Nº 2496, Sala B 153, Ed. New Business Style, Jardim Goiás, Goiânia - Go | CEP: 74.810-100
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