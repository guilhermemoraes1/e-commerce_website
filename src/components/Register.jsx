import React from 'react';
import './Register.css'; 

const Register = () => {
  return (
    <div className="register-container">
      <h1>Crie uma conta</h1>
      <p>Insira seus dados abaixo</p>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="______" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ou Número de telefone</label>
          <input type="text" id="email" placeholder="______" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="______" />
        </div>
        <button type="submit" className="create-account-btn">Criar Conta</button>
        <button type="button" className="google-btn">Inscrever-se com o Google</button>
      </form>
      <p className="login-link">Já tem uma conta? <a href="/login">Entrar</a></p>
    </div>
  );
};

export default Register;