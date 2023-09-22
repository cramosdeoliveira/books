import { PersonagemView } from "./components/personagem-view.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { Guerreiro } from "./modules/Guerreiro.js";
import { Mago } from "./modules/Mago.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const personagemMagoGelo = new Mago("Gandalf", 7, "Gelo", 8, 10);
const personagemMagoFogo = new Mago("Arquimedes", 4, "Fogo", 3, 10);
const personagemArqueiroDaFloresta = new Arqueiro("Legolas", 9, 6);
const personagemArqueiroMago = new ArqueiroMago("Philis", 12, "Fogo", 9, 10, 7);
const personagemGuerreiro = new Guerreiro('Aragorn', 15)


const personagens = [
  personagemMagoGelo,
  personagemMagoFogo,
  personagemArqueiroDaFloresta,
  personagemArqueiroMago,
  personagemGuerreiro
];

new PersonagemView(personagens).render();
