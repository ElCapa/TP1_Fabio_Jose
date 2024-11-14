export default function GameOver({ vencedor, aoReiniciar }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-20 rounded-lg shadow-lg text-center max-w-xs">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Fim do Jogo!</h2>
        {vencedor ? (
          <p className="text-lg text-green-500 mb-4">{vencedor} venceu!</p>
        ) : (
          <p className="text-lg text-gray-700 mb-4">É um empate!</p>
        )}
        <button
          onClick={aoReiniciar}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-600"
        >
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}
