import React from 'react';
import PropTypes from 'prop-types';

export default function Games({ games }) {
  return (
    <>
      <h2>Juegos disponibles</h2>
      {games.map((juego, i) =>
        <p key={i}>
          <strong>{juego.titulo}</strong>
          <br/>
          Fecha de lanzamiento: {juego.lanzamiento}.
          <br/>
          Desarrollador: {juego.desarrollador}.
          <br/>
          Género: {juego.genero}.
          <br/>
          Precio: ${juego.precio} MXN.
        </p>
      )}
    </>
  );
}

Games.propTypes = {
  games: PropTypes.array
};
