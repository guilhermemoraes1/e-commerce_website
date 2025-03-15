import React from 'react';
import './FazerLogin.css'; // Importe o CSS para estilização

const FazerLogin = () => {
  return (
    <div className="register-container">
      <h1>Entrar na conta</h1>
      <p>Insira seus dados abaixo</p>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="email">Email ou Número de telefone</label>
          <input type="text" id="email" placeholder="______" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="______" />
        </div>
        <div className="button-group">
          <button type="submit" className="create-account-btn">Entrar</button>
          <button type="button" className="google-btn">Esqueceu a senha</button>
        </div>
      </form>
    </div>
  );
};

export default FazerLogin;