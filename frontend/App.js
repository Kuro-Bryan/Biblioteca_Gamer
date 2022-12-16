import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Games from './components/Games';

const App = ({ isSignedIn, bibliotecaGamer , wallet }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    bibliotecaGamer.getGames().then(setGames);
  }, []);

  onSubmit = async (e) => {
    e.preventDefault();

    const { fieldset, titulo, lanzamiento, desarrollador, genero, precio } = e.target.elements;

    fieldset.disabled = true;

    await bibliotecaGamer.addGame(titulo.value, lanzamiento.value, desarrollador.value, genero.value, precio.value)
    const games = await bibliotecaGamer.getGames()

    setGames(games);
    titulo.value = '';
    lanzamiento.value= '';
    desarrollador.value= '';
    genero.value= '';
    precio.value= '';
    fieldset.disabled = false;
    titulo.focus();
  };

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }

  return (
    <main>
      <table>
        <tr>
          <td><h1>🎮 Biblioteca Gamer 🎮</h1></td>
          <td>{ isSignedIn
          ? <button onClick={signOut}>Cerrar sesión</button>
          : <button onClick={signIn}>Iniciar sesión</button>
        }</td>
        </tr>
      </table>

      <hr />
      { isSignedIn
        ? <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
        : <SignIn/>
      }

      <hr />

      { !!games.length && <Games games={games}/> }

    </main>
  );
};

export default App;