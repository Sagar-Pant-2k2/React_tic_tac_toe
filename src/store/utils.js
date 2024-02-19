export function checkWinner(boxes) {
    const winningCombos = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check each winning combination
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a]; // Return the winner ('X' or 'O')
        }
    }

    // If no winner found
    return null;
}


