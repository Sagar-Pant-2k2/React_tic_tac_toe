import { checkWinner } from "./utils";
export const initialState = { turn: 'X', boxes: new Array(9).fill(""), winner: null }
export default (state, { type, payload }) => {
    
    if (type === 'mark') {
        if (state.winner || (state['boxes'][payload] !== "")) return state;
        const newBoxes = [...state['boxes']];
        newBoxes[payload] = state.turn;
        const winner = checkWinner(newBoxes);
        if (winner) {
            return { ...state, boxes: newBoxes, winner };
        }
        //for draw
        if (newBoxes.every(cell => cell !== "")) {
            return { ...state, winner: 'draw',boxes:newBoxes };
        }

        return {...state, turn: state.turn === 'X' ? 'O' : 'X', boxes: newBoxes };
    }
    else if (type === 'replay') {
        return initialState;
    }
    return state;
}
