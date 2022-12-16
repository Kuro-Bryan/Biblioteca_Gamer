import { NearBindgen, call, view, Vector } from 'near-sdk-js'
import { PostedGame } from './model'

@NearBindgen({})
class BibliotecaGamer {
  games: Vector<PostedGame> = new Vector<PostedGame>("v-uid");

  //near call dev-1671181715001-72882593290695 add_game '{"titulo":"...","lanzamiento":"...", "desarrollador":"...", "genero":"...", "precio":"..."}' --accountId darkuro.testnet
  @call({})
  add_game({ titulo, lanzamiento, desarrollador, genero, precio }: { titulo: string, lanzamiento: string, desarrollador: string, genero: string, precio: string }) {
    
    const juego: PostedGame = { titulo, lanzamiento, desarrollador, genero, precio };
    this.games.push(juego);
  }

  //near view dev-1671181715001-72882593290695 get_games
  @view({})
  // Retorna un array de juegos.
  get_games({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): PostedGame[] {
    return this.games.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_games(): number { return this.games.length }
}