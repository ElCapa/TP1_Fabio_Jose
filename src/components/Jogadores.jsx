export default function Jogadores({ simbolo, jogadorAtual }) {
  const estaAtivo = simbolo === jogadorAtual;

  return (
    <li className={`flex items-center justify-between px-4 py-2 w-full border ${estaAtivo ? 'border-yellow-400 text-yellow-400' : 'border-transparent text-white'} rounded-lg`}>
      <span className="font-bold">{simbolo === 'X' ? 'Jogador 1' : 'Jogador 2'}</span>
      <span>{simbolo}</span>
    </li>
  );
}
