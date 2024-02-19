import Board from "./components/Board"
import Modal from "./components/Modal"
import Players from "./components/Players"
import { GameContextProvider } from "./store/GameContext"


export default () => {
  return (
    <GameContextProvider>

      <div className="main">
        <Modal/>
        <div className="game-area">
          <h1>Tic-Tac-Toe</h1>
          <Board />
          <Players />
        </div>

      </div >
    </GameContextProvider>
  )
}