# Contrato Biblioteca gamer

El contrato inteligente guarda datos de los juegos brindados por el usuario.

<br />

# Inicio Rapido

1. Asegurate de tener instalado [node.js](https://nodejs.org/en/download/package-manager/) >= 16.
2. Installar [`NEAR CLI`](https://github.com/near/near-cli#setup)

<br />

## 1. Construir y desplegar el contrato
puedes compilar y desplegar automaticamente el contrato en NEAR testnet ejecutando el siguiente comando:

```bash
npm run deploy
```

Cuando finalice, busca el documento `neardev/dev-account` para encontrar la dirección en la cual se desplegó el contrato

```bash
cat ./neardev/dev-account
# Ejemplo: dev-1659899566943-21539992274971
```

<br />

## 2. Recuperar los juegos guardados
`get_games` es un metodo de solo lectura (metodo `view`) que devuelve una parte del vector `games`.

Los metodos `View` pueden ser llamados **gratuitamente** por cualquiera, incluso por personas sin una cuenta de NEAR

```bash
near view <dev-account> get_games '{"from_index":0, "limit":10}'
```

<br />

## 3. Agregar un juego
`add_game` Agrega los datos al vector `games`.

```bash
# Usar near-cli para agregar un juego 
near call <dev-account> add_game '{"text": "a juego"}' --accountId <account>
```