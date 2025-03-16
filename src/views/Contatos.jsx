import React from 'react';
import './Contatos.css'; // Importe o CSS para estilização
import phoneIcon from "../assets/icons/phone.png";
import emailIcon from "../assets/icons/mail.png";

const Contatos = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h5>
            <img src={phoneIcon} alt="Ícone de telefone" className="icons" />Ligue para Nós
          </h5>
          <p>Estamos disponíveis 24 horas por dia, 7 dias por semana.</p>
          <p>Telefone: +55 83 88785-4321</p>
          
          <div className="horizontal-line"></div>

          <h5>
            <img src={emailIcon} alt="Ícone de email" className="icons" />Escreva para Nós
          </h5>
          <p>Preencha nosso formulário e<br></br> entraremos em contato com você<br></br> em até 24 horas.</p>
          <p>E-mail: atendimento@exclusivo.com.br</p>
          <p>E-mail: suporte@exclusivo.com.br</p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="name" placeholder="Seu Nome *" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Seu Email *" required />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" placeholder="Seu Telefone *" required />
            </div>
          </div>
          <div className="form-group">
            <textarea id="message" rows="4" placeholder="Sua Mensagem" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default Contatos;