import { PersonagemView } from './src/components/personagem-view.js'
import { Mago } from './src/modules/Mago.js'
import {Personagem} from './src/modules/Personagem.js'

const personagem1 = new Personagem('Gandalf', 10, 'Mago')
personagem1.mana = 5
personagem1.vida = 10
personagem1.descricao = 'Ótimo para ataques de longe'
personagem1.obterInsignia()

const personagem2 = new Personagem('Legolas', 7, 'Arqueiro')
personagem2.mana = 3
personagem2.vida = 8
personagem2.descricao = 'Bom para ataques de longe e surpresa'
personagem2.obterInsignia()

const personagens = [personagem1, personagem2]

new PersonagemView(personagens).render()


