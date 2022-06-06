import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <h2>Olá,</h2>
      <h2>Sou o João Paulo</h2>
      <h4>Bem-vindo ao meu Portfolio</h4>
      <p>
      Desejo fazer parte de uma 
      equipe e atuar na área de informática. Acredito que poderia executar 
      meus conhecimentos teóricos e práticos e ajudar no crescimento da empresa e do grupo de trabalho.
      </p>
      <Link to="/about">
        <button className="btn"> Mais informação...</button>
      </Link>
    </header>
  );
}