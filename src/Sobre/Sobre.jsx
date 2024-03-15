import React from 'react';
import './Sobre.css'
import AnimatedComponent from '../AnimatedComponent';
import image from '../assets/Equipe.jpg'

const Sobre = () => (
  <div className='container pt-5 pb-5'>
    <div className='d-flex gap-5'>
      <AnimatedComponent animationType={'scale'}>
        <img src={image} className='image-sobre animated' alt="Imagem" width={600}/>
      </AnimatedComponent>
      <AnimatedComponent animationType={'slideRigth'} className='d-flex flex-column text-center gap-3 animated'>
        <h2>Sobre Nós</h2>
          <div className='description d-flex align-items-end flex-column'>
            <span>Fundado em 2015, com foco de atuação nas demandas relativas à área trabalhista bancária, o escritório Moura Advogados, administrado e fundado pela Drª Valdéris Ott de Moura, trilhou um caminho de sucesso, sempre com olhos voltados para a evolução dos serviços e identificando a necessidade de uma advocacia personalizada.
            Logrando êxito em inúmeras ações do ramo, tornou-se referência em todo o Estado de Goiás.
            No ano de 2020, em uma visita inusitada à cidade de Brumadinho/MG, a sócia fundadora comoveu-se com a história das famílias enlutadas pela perda de seus entes queridos na tragédia do rompimento da barragem ocorrida  em 25.01.2019, e assim, estabeleceu uma filial naquela cidade, para demandas cíveis e trabalhistas, exclusivas e relativas à tragedia. Assumiu a gestão da referida filial, o advogado e sócio, Dr. Marcos Ribeiro Bernadi.
            Não paramos por aqui, o Brasil é o alvo da Advocacia de excelência da Moura Advogados.</span>
          </div>
      </AnimatedComponent>
    </div>
  </div>
);

export default Sobre;