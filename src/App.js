import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import "./global.css";

function App() {
  return (
    <div className="login-container">
      <section className="form">
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Digite seu nome" />
          
          <input placeholder="Digite seu sobrenome" />
          
          <input placeholder="Digite seu E-mail" />
          
          <button type="submit"> Cadastrar </button>

          <a href="/registrar">
            <FiLogIn size ={16} color ="#ff0000" />
            Não tenho cadastro
          </a>
        </form>
      </section>
    </div>
  );
}

export default App;
