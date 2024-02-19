import React from 'react';
import './Sobre.css'
import AnimatedComponent from '../AnimatedComponent';

const Sobre = () => (
  <div className='container pt-5 pb-5'>
    <div className='d-flex gap-5'>
      <AnimatedComponent animationType={'scale'}>
        <img className='image-sobre' src="./src/assets/Escritorio.jpeg" alt="Imagem" width={450}/>
      </AnimatedComponent>
      <AnimatedComponent animationType={'slideBottom'} className='d-flex flex-column text-center gap-3'>
        <h2>Sobre Nós</h2>
          <div className='description d-flex align-items-end flex-column'>
            <span>Fundado em 2015, com foco de atuação nas demandas relativas à área trabalhista bancária, o escritório Moura Advogados, administrado e fundado pela Drª Valdéris Ott de Moura, trilhou um caminho de sucesso, sempre com olhos voltados para a evolução dos serviços e identificando a necessidade de uma advocacia personalizada.
            Logrando êxito em inúmeras ações do ramo, tornou-se referência em todo o Estado de Goiás.
            No ano de 2020, em uma visita inusitada à cidade de Brumadinho/MG, a sócia fundadora comoveu-se com a história das famílias enlutadas pela perda de seus entes queridos na tragédia do rompimento da barragem ocorrida  em 25.01.2019, e assim, estabeleceu uma filial naquela cidade, para demandas cíveis e trabalhistas, exclusivas e relativas à tragedia. Assumiu a gestão da referida filial, o advogado e sócio, Dr. Marcos Ribeiro Bernadi.
            Não paramos por aqui, o Brasil é o alvo da Advocacia de excelência da Moura Advogados.</span>
          </div>
      </AnimatedComponent>
    </div>

    <div className='valores d-flex gap-5 p-5'>
      <AnimatedComponent animationType={'scale'} className='card card-individual w-50 gap-2 p-3'>
        <h2>Missão</h2>
        <span>Prevenir e solucionar conflitos, com atendimento especializado e personalizado, tendo como objetivo gerar tranquilidade, pessoalidade e transparência nas relações, visando sempre o melhor resultado.</span>
      </AnimatedComponent>
      <AnimatedComponent animationType={'scale'} className='card card-individual w-50 gap-2 p-3'>
        <h2>Visão</h2>
        <span>Ser o melhor e mais conceituado escritório de advocacia especializad</span>
      </AnimatedComponent>
      <AnimatedComponent animationType={'scale'} className='card card-individual w-50 gap-2 p-3'>
        <h2>valores</h2>
        <span>Profissionalismo é a base do nosso trabalho, com integridade, ética, transparência e comprometimento.</span>
      </AnimatedComponent>
    </div>
  </div>
);

export default Sobre;