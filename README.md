📖 Sobre o Projeto
Este projeto é uma engine de batalha baseada em texto (CLI) que replica a complexidade matemática e estratégica dos jogos da franquia Monster Hunter.

O foco atual é uma simulação de combate "1v1" contra o monstro insígnia Arkveld, onde tanto o Caçador quanto a IA do Monstro operam sob regras estritas de:

Cálculo de Dano (Motion Values, Hitzones, Elemento).

RNG Controlado (Precisão, Esquiva, Crítico).

Gerenciamento de Recursos (Vida, Buffs, Status).

O código foi refatorado para seguir princípios SOLID e Clean Architecture, visando escalabilidade futura para múltiplos jogadores.

⚙️ Funcionalidades Atuais
Combate Turn-Based: Sistema de iniciativa dinâmico.

Inteligência Artificial (IA) Básica: O monstro Arkveld reage, aplica status e escolhe alvos.

Mecânicas de RPG Profundas:

Hitzones: Danos variam dependendo se você acerta a Cabeça, Pata ou Cauda.

Status Ailments: Implementação de Veneno (Poison), Paralisia e Explosão (Blast) com sistema de buildup.

Offset System: Mecânica de risco/recompensa para anular ataques (inspirado em MH Wilds).

Arsenal Expansível: Estrutura pronta para receber novas armas e skills via Factory Pattern.


Para rodar a simulação na sua máquina:
Clone o repositório:

git clone https://github.com/seu-usuario/mh-battle-sim.git

Instale as dependências:

npm install

Inicie a Batalha:

npx ts-node src/main.ts
