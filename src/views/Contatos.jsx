import React from 'react';
import './Contatos.css'; // Importe o CSS para estilização

const Contatos = () => {
  return (
    <div className="contact-container">
      <h1>Ligue para Nós</h1>
      <p>Estamos disponíveis 24 horas por dia, 7 dias por semana.</p>
      <p>Telefone: +55 83 88785-4321</p>

      <h2>Escreva para Nós</h2>
      <p>Preencha nosso formulário e entraremos em contato com você em até 24 horas.</p>
      <p>E-mail: atendimento@exclusivo.com.br</p>
      <p>E-mail: suporte@exclusivo.com.br</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Seu Nome *</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Seu Email *</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Seu Telefone *</label>
          <input type="tel" id="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Sua Mensagem</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default Contatos;