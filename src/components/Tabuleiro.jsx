import { useState, useEffect } from 'react';

export default function Tabuleiro({ aoEncerrarJogo, jogadorAtual, setJogadorAtual, reiniciarJogo }) {
  const tabuleiroVazio = Array(3).fill().map(() => Array(3).fill(null));
  const [tabuleiro, setTabuleiro] = useState(tabuleiroVazio);

  useEffect(() => {
    if (reiniciarJogo) {
      setTabuleiro(tabuleiroVazio);
    }
  }, [reiniciarJogo]);

  function aoClicarCelula(indiceLinha, indiceColuna) {
    if (tabuleiro[indiceLinha][indiceColuna] || !jogadorAtual) return;

    const novoTabuleiro = tabuleiro.map((linha, iLinha) =>
      linha.map((celula, iColuna) =>
        iLinha === indiceLinha && iColuna === indiceColuna ? jogadorAtual : celula
      )
    );

    setTabuleiro(novoTabuleiro);

    if (verificarVitoria(novoTabuleiro, jogadorAtual)) {
      aoEncerrarJogo(jogadorAtual); 
    } else if (novoTabuleiro.flat().every(celula => celula)) {
      aoEncerrarJogo(null); 
    } else {
      setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X'); 
    }
  }

  function verificarVitoria(tabuleiro, jogador) {
    const padroesVitoria = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],  
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
    return padroesVitoria.some(padrao =>
      padrao.every(([linha, coluna]) => tabuleiro[linha][coluna] === jogador)
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 bg-gray-800 p-4 rounded-lg shadow-lg">
      {tabuleiro.map((linha, indiceLinha) =>
        linha.map((celula, indiceColuna) => (
          <button
            key={`${indiceLinha}-${indiceColuna}`}
            onClick={() => aoClicarCelula(indiceLinha, indiceColuna)}
            className="w-20 h-20 bg-gray-700 text-3xl text-white font-bold rounded-md flex items-center justify-center hover:bg-gray-600"
          >
            {celula}
          </button>
        ))
      )}
    </div>
  );
}
