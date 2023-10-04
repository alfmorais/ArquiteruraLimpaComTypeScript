import Carro from "./Carro"

export default class Civic implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 208,
        private _velociadeAtual: number = 0
    ) {}

    acelerar(): void {
        this._velociadeAtual = Math.min(
            this._velociadeAtual + 10,
            this.velocidadeMaxima
        )
    }

    frear(): void {
        this._velociadeAtual = Math.max(
            this._velociadeAtual - 10,
            0
        )
    }

    get velocidadeAtual() {
        return this._velociadeAtual
    }
}
