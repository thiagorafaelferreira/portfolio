import React from 'react';
import './App.css';
import java from "./img/java-logo.png";
import android from "./img/android-logo.png";
import javascript from "./img/javascript-logo.png";
import react from "./img/react-logo.png";
import spring from "./img/spring-logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="avatar-wrapper" >
          <div className="avatar-layout">
            <div className="coin avatar" ></div>
          </div>  
        </div>
        <div className="about" >
          <div>
            <h4 style={{ marginBottom: '0px'}}>Olá</h4>
            <h1 className='h1-about'>Eu sou Thiago Ferreira</h1>
            <h3  style={{ marginTop: '5px' }}>{`{ Desenvolvedor Web e Mobile }`}</h3>
          </div>
          <p>
            Carreira focada em desenvolver habilidades técnicas na área de sistemas para web.<br />
            Para trazer valor as empresas com otimização/informatização de rotinas, criação de<br />
            produtos que atendam necessidades específicas, melhorar processos de controle de <br />
            cada negócio com a construação de sistemas web.<br />
          </p>
          <p>  
            As habilidades incluem:<br /> 
            <ul>
              <li>Análise do negócio para construir um projeto mais adequedo;</li>
              <li>
                Conhecimento técnico, boas práticas, 
                tecnologias para contruir Interface de usuário;
              </li>
              <li>Conhecimento técnico, boas práticas,
                tecnologias para construir Back-end;
              </li>            
            </ul>
          </p>
        </div>
      </div>
      <div className='content-wrapper'>
        <h2>Sobre Mim</h2>
        <div className="content">
          <p className="description">
            Eu sou uma pessoa que gosta de tecnologia, estar aprendendo sobre os mais diversos conteúdos relacionados. <br />
            Sou um iniciante na área da culinária, nada mais prazeroso do que fazer uma comida saborosa e poder fazer para <br/>
            as pessoas a sua volta. <br />
            Gosto de praticar esportes, pratico pelo prazer e pensando na saúde e melhor qualidade de vida. <br />
            Sou uma pessoa comprometida com o trabalho, e em ter ótimo desempenho naquilo que faço.
          </p>
          <div className="coins">
            <div className="coin coin-layout">
                <h3 style={{ marginBottom: '0'}}>10+ </h3>
                <h6 style={{ marginTop: '0'}}>anos de experiência</h6>
            </div>
            <div className="coin coin-layout">
                <h2 style={{ marginBottom: '0'}}>8+</h2>
                <h6 style={{ marginTop: '0'}}>grandes projetos</h6>
            </div>
            <div className="coin coin-layout">
                <h2 style={{ marginBottom: '0'}}>20+ </h2>
                <h6 style={{ marginTop: '0'}}>cursos de aperfeiçoamento</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="formation-wrapper">
          <h2>Formação</h2>
        <ul>
          <li className="list-item"><strong>Ciências da computação</strong><br />
            Unilassale<br />
            2008 - 2015
          </li>
          <li className="list-item"><strong>Técnico em Eletrônica</strong><br />
            Escola Técnica Parobé<br />
            2005 - 2007</li>
          <li className="list-item"><strong>Ensino médio</strong><br />
            Escola Espírito Santo<br/>
            conluído em 2002</li>
        </ul>
        </div>
        <div className="skills-wrapper">
          <h2>Habilidades</h2>
          <div className="img-wrapper">
            <div className="img-align">
              <img src={java} alt="sicredi logo"/>
              <img src={spring} alt="panvel logo"/>
              <img src={react} alt="adp logo"/>
            </div>
           
            <div className="img-align">
              <img src={javascript} alt="totvs logo"/>
              <img src={android} alt="unicred logo"/>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
