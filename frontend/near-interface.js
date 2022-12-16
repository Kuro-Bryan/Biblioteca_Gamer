export class BibliotecaGamer {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async getGames() {
    const games = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_games" })
    return games
  }

  async addGame(titulo, lanzamiento, desarrollador, genero, precio) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'add_game', args: { titulo: titulo, lanzamiento: lanzamiento, desarrollador: desarrollador, genero: genero, precio: precio } });
  }
}