import Carro from "./Carro"

export default class Fusca implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 140,
        private _velociadeAtual: number = 0
    ) {}

    acelerar(): void {
        this._velociadeAtual = Math.min(
            this._velociadeAtual + 5,
            this.velocidadeMaxima
        )
    }

    frear(): void {
        this._velociadeAtual = Math.max(
            this._velociadeAtual - 5,
            0
        )
    }

    get velocidadeAtual() {
        return this._velociadeAtual
    }
}
