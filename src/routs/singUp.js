import React from "react";

export default function SingUp() {
  return (
    <section>
      <h2>Cadastro</h2>
      <form>
        <label htmlFor="userName">Nome Completo</label>
        <input type="text" />
        <label htmlFor="userName">Email</label>
        <input type="email" />
        <label htmlFor="userName">Seu Nome</label>
        <input type="text" />
        <label htmlFor="password">Senha</label>
        <input type="password" />
        <label htmlFor="password">Repita a senha</label>
        <input type="password" />
        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
}