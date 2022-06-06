import React from "react";

export default function LogIn() {
  return (
    <section>
      <h2>LogIn</h2>
      <form>
        <label htmlFor="userName">Seu nome</label>
        <input type="text" />
        <label htmlFor="password">Senha</label>
        <input type="password" />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </section>
  );
}