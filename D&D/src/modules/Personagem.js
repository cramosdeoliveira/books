export class Personagem {
  nome;
  #level;
  tipo;
  descricao;
  vida = 100;
  mana = 100;

  constructor(nome) {
    this.nome = nome;
    this.#level = 1;
  }

  get level() {
    return this.#level;
  }

  set level(novoLevel) {
    if (novoLevel > 1 && novoLevel <= 20) {
      this.#level = novoLevel;
    }
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implácavel ${this.constructor.tipo}`;
    } else {
      return `${this.constructor.tipo} Iniciante`;
    }
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return `Empate`;
    } else if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`;
    }
    return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`;
  }

  aumentarLevel() {
    return this.level++;
  }

  diminuirLevel() {
    return this.level--;
  }
}