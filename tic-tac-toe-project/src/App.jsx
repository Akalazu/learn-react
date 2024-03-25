import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player One" playerSymbol="X" />
          <Player playerName="Player Two" playerSymbol="Y" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
