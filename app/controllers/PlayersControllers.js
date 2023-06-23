import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class Player {
    constructor() {

    }

    function _drawPlayers() {
    let players = AppState.players
    let template = ''
    players.forEach(player => template += player.PlayerCardTemplate)

    setHTML('players, template')
}

export class PlayersController {
    constructor() {
        console.log('players controller loaded')
        console.log(AppState.players)
        _drawPlayers
    }
}
}