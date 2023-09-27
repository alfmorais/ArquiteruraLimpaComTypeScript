import Carro from "./Carro"

export default class Ferrari implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 324,
        private _velociadeAtual: number = 0
    ) {}

    acelerar(): void {
        this._velociadeAtual = Math.min(
            this._velociadeAtual + 20,
            this.velocidadeMaxima
        )
    }

    frear(): void {
        this._velociadeAtual = Math.max(
            this._velociadeAtual - 20,
            0
        )
    }

    get velocidadeAtual() {
        return this._velociadeAtual
    }
}
