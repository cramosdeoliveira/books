import { Personagem } from "./Personagem.js";
import { Arqueiro } from "./Arqueiro.js";
import { Mago } from "./Mago.js";

export class ArqueiroMago extends Personagem {
  static tipo = "ArqueiroMago";
  ladoMago;
  ladoArqueiro;
  static descricao = 'Detentor de feitiços e flechas mágicas!';

  constructor(
    nome,    
    elementoMagico,
    levelMagico,
    inteligencia,
    destreza
  ) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(
      nome,      
      elementoMagico,
      levelMagico,
      inteligencia
    );
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
  }
}
