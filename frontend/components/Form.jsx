import React from 'react';

export default function Form({ onSubmit, currentAccountId }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Bienvenido, { currentAccountId }. ingresemos un juego!</p>
        <p className="highlight">
          <label htmlFor="titulo">Titulo:</label>
          <input
            autoComplete="off"
            autoFocus
            id="titulo"
            required
          />
        </p>
        <p className="highlight">
          <label htmlFor="lanzamiento">Fecha de lanzamiento:</label>
          <input
            autoComplete="off"
            id="lanzamiento"
            required
          />
        </p>
        <p className="highlight">
          <label htmlFor="desarrollador">Desarrollador:</label>
          <input
            autoComplete="off"
            id="desarrollador"
            required
          />
        </p>
        <p className="highlight">
          <label htmlFor="genero">Género:</label>
          <input
            autoComplete="off"
            id="genero"
            required
          />
        </p>
        <p className="highlight">
          <label htmlFor="precio">Precio: $</label>
          <input
            autoComplete="off"
            id="precio"
            required
          />
        </p>
        <button type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}