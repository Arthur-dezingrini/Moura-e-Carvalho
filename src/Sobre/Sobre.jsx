import React from 'react';
import './Sobre.css'
import AnimatedComponent from '../AnimatedComponent';
import image from '../assets/Equipe.jpg'

const Sobre = () => (
  <div className='container pt-5 pb-5'>
    <div className='d-flex gap-5 align-items-center'>
      <AnimatedComponent animationType={'scale'}>
        <img src={image} className='image-sobre animated mt-5' alt="Imagem" width={600}/>
      </AnimatedComponent>
      <AnimatedComponent animationType={'slideRigth'} className='d-flex flex-column text-center gap-3 animated'>
        <h2>Sobre Nós</h2>
          <div className='d-flex text-start flex-column gap-3'>
            <span>
              Dr.ª Valdéris Ott de Moura, advogada de formação e militância voltada para a área trabalhista bancária, com mais de 21 anos de vasta experiencia e atuação em vários estados da federação. Pós-graduada em gestão de pessoas, liderança e coaching pela pontifícia Universidade Católica do Rio Grande Do Sul, pós-graduada em direito empresarial pela Fundação Getúlio Vargas Goiânia e pós-graduanda em direito ambiental e gestão estratégica de sustentabilidade, pela Pontifícia Universidade Católica de São Paulo.
            </span>
            <span>
              Dr. Thiago Júnio Carvalho, advogado trabalhista há mais de 10 anos, com atuação em diversos estados da federação, em especial com direito trabalhista bancário. Graduado em direto pela Universidade Salgado de Oliveira e pós-graduando em Direito e Processo do Trabalho, pela Universidade Federal de Goiás.            
            </span>
            <span>
              O escritório Valdéris Moüra & Carvalho Advogados foi fundado no final de 2023, com a junção de dois perfis totalmente diferentes, com o intuito de prestar uma advocacia de excelência. O escritório possui a sua matriz em Goiânia-GO, e também conta com filais em Brasilia-DF, Belo Horizonte-MG, São Paulo-SP, Rio de Janeiro-RJ e João Pessoa-PB.            </span>
          </div>
      </AnimatedComponent>
    </div>
  </div>
);

export default Sobre;