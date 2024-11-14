import { useState } from 'react';
import Jogadores from './components/Jogadores';
import Tabuleiro from './components/Tabuleiro';
import GameOver from './components/GameOver';
import './App.css';

function App() {
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [vencedor, setVencedor] = useState(null);
  const [jogadorAtual, setJogadorAtual] = useState("X");
  const [reiniciarJogo, setReiniciarJogo] = useState(false);

  function aoReiniciar() {
    setJogoEncerrado(false);
    setVencedor(null);
    setJogadorAtual("X");
    setReiniciarJogo(true); 
  }

  function aoEncerrarJogo(vencedor) {
    setJogoEncerrado(true);
    setVencedor(vencedor);
    setReiniciarJogo(false); 
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <header className="flex items-center justify-center bg-yellow-100 py-4">
        <img src="src/assets/game-logo.png" alt="" className="w-16 h-16 mr-4" />
        <h1 className="font-caprasimo text-4xl font-bold text-text-dark">Fitche Fatche</h1>
      </header>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-100">
        <ul className="flex justify-between items-center mb-4 text-white text-lg">
          <Jogadores simbolo="X" jogadorAtual={jogadorAtual} />
          <Jogadores simbolo="O" jogadorAtual={jogadorAtual} />
        </ul>
        
        <Tabuleiro 
          jogadorAtual={jogadorAtual} 
          setJogadorAtual={setJogadorAtual} 
          aoEncerrarJogo={aoEncerrarJogo} 
          reiniciarJogo={reiniciarJogo} 
        />
        
        {jogoEncerrado && <GameOver vencedor={vencedor} aoReiniciar={aoReiniciar} />}
      </div>
    </main>
  );
}

export default App;
