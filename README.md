```markdown
# Jogo Fitche Fatche 

Este é um projeto de Jogo da Velha desenvolvido com React e Taiwindcss.

## Funcionalidades

- **Mudança de jogadores**: alterna automaticamente após cada jogada.
- **Virificar  vitória e empate**: identifica uma vitória ou empate e exibe uma mensagem de finalização do jogo.
- **Reiniciar o jogo**: permite que os jogadores reiniciem o jogo sem precisar atualizar a página.

## Como Executar o Projeto

### Pré-requisitos

- Node.js 
- npm 

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/ElCapa/TP1_Fabio_Jose.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## Estrutura do Código

- **App.js**: O componente principal que gerencia o estado geral do jogo e exibe o título, o tabuleiro e o botão de reiniciar.
- **Tabuleiro.js**: Controla o estado e a lógica do tabuleiro, alternando entre os jogadores e verificando as condições de vitória.
- **Jogadores.js**: Exibe os jogadores ("X" e "O") e destaca o jogador atual.
- **GameOver.js**: Mostra uma mensagem de finalização de jogo quando há um vencedor ou um empate.

## Tecnologias Utilizadas

- **React**: biblioteca JavaScript para construir interfaces de usuário.
- **Taiwind CSS**: para estilização da interface.

## Dificuldades Encontradas

Durante o desenvolvimento do projeto, algumas dificuldades surgiram, especialmente na construção e estilização do layout do tabuleiro:

1. **Posicionamento das Células no Tabuleiro**: Criar uma grade 3x3 e garantir que cada célula respondesse corretamente aos cliques foi desafiador. Precisávamos assegurar que cada célula mantivesse um tamanho uniforme e que o design se adaptasse a diferentes resoluções de tela.

2. **Estilização do Tabuleiro e das Células**: Garantir que as células tivessem um estilo visual. 

3. **Mensagens de Final de Jogo e Reinicialização**: Definir a lógica para que as mensagens de "Game Over" ou "Empate" aparecessem na interface sem interferir no layout foi um desafio. 


## Contribuidores

Este projeto foi desenvolvido por:

- **Fabio Monteiro** 
- **José Costa**

Sinta-se à vontade para contribuir com sugestões ou melhorias!

## Licença

Este projeto é de código aberto e está licenciado sob a licença MIT.
```
