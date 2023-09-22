import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {
  static tipo = "Mago";
  elementoMagico;
  levelMagico;
  inteligencia;
  static descricao = 'O mago é impacável!';

  constructor(nome, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  obterInsignia() {
    if (this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`;
    } else {
      return super.obterInsignia();
    }
  }
}
