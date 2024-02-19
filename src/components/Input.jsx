import React, { useContext } from "react";
import { GameContext } from "../store/GameContext";

const Input = ({ type, ...props }) => {
    const { GameState } = useContext(GameContext);
    const className = `${GameState.turn === type ? 'active' : ''}`;
    return (
        <input className={className} {...props} value={`Player ${type}`} disabled />
    );
}

export default Input;
