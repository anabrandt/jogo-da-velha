# Jogo da Velha

## Sobre o Projeto

Este projeto consiste na implementação de um jogo da velha para dispositivos móveis, inicialmente desenvolvido de forma offline para dois jogadores. No entanto, durante o checkpoint 2, foram adicionadas novas funcionalidades, como jogo offline de 1 jogador contra a CPU, login e cadastro de usuários com Firebase, e estatísticas do jogador.

## Funcionalidades Implementadas

- **Jogo Offline de 1 Jogador**: Implementação de um modo de jogo onde o jogador pode enfrentar a CPU em partidas offline. A CPU realiza jogadas válidas, e não é avaliada a qualidade de sua jogabilidade.

- **Login e Cadastro via Firebase**: Adição de autenticação de usuários via email e senha utilizando o Firebase Authentication. Os usuários podem criar uma conta e fazer login para acessar o jogo e suas estatísticas.

- **Histórico de Jogos do Usuário**: Implementação de uma página para exibir o histórico de jogos do usuário, incluindo vitórias, empates e derrotas. Os dados são armazenados no Realtime Database do Firebase, utilizando o UID do usuário para criar caminhos únicos.

## Estrutura do Projeto

O projeto está estruturado em várias telas e componentes que compõem o jogo da velha, as funcionalidades de login e cadastro, e a exibição das estatísticas do jogador. As principais telas incluem:

- **Tela de Jogo**: Onde o jogador pode jogar contra outro jogador offline ou contra a CPU.
- **Tela de Login**: Para autenticação de usuários já cadastrados.
- **Tela de Cadastro**: Para criação de uma nova conta de usuário.
- **Tela de Histórico**: Exibição das estatísticas de jogos do usuário.
