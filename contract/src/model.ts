export class PostedGame {
  titulo: string;
  lanzamiento: string;
  desarrollador: string;
  genero: string;
  precio: string;


  constructor({ titulo, lanzamiento, desarrollador, genero, precio }: PostedGame) {
    this.titulo = titulo;
    this.lanzamiento = lanzamiento;
    this.desarrollador = desarrollador;
    this.genero = genero;
    this.precio = precio;
  }
}