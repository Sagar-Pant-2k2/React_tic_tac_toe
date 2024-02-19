import React, { useContext } from 'react';
import Box from './Button';
import { GameContext } from '../store/GameContext';

export default () => {
    const { GameState, mark } = useContext(GameContext);

    return (
        <div className="board">
            {GameState.boxes.map((item, idx) => {
                let className = '';
                if (idx === 3 || idx === 4 || idx === 5) {
                    className += 'upper-border ';
                    className += 'lower-border ';
                }
                if (idx === 1 || idx === 4 || idx === 7) {
                    className += 'left-border ';
                    className += 'right-border ';
                }

                return (
                    <Box key={idx} onClick={() => mark(idx)} className={`box ${className.trim()}`}>
                        {item}
                    </Box>
                );
            })}
        </div>
    );
}
