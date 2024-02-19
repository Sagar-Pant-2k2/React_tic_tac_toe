import { createContext, useReducer } from "react";
import GameContextReducer, { initialState } from "./GameContextReducer";



const GameContext = createContext();

const GameContextProvider = ({ children }) => {

    const [GameState, gameDispatch] = useReducer(GameContextReducer, initialState);

    const mark = (idx) => {
        gameDispatch({ type: 'mark', payload: idx });
    }

    const replay = () => {
        gameDispatch({ type: 'replay' })
    }

    return (
        <GameContext.Provider value={{ GameState, mark, replay }}>
            {children}
        </GameContext.Provider>)
}

export {
    GameContext,
    GameContextProvider
}