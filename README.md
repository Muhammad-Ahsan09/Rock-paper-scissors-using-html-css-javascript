# Rock Paper Scissors Game

A simple Rock Paper Scissors game using HTML, CSS, and JavaScript. Play against the computer, track your wins, losses, and ties, and use the autoplay feature for continuous play. Scores are saved in local storage. Use buttons or keyboard shortcuts to play. Reset scores anytime. Perfect for learning basic web development!

## Features

- User-friendly interface with buttons for Rock, Paper, and Scissors.
- Keyboard support for playing: `r` for Rock, `p` for Paper, `s` for Scissors.
- Autoplay feature to play automatically every second.
- Score tracking with wins, losses, and ties, saved in local storage.
- Reset button to clear the scores and start fresh.

## How to Play

1. **Choose Your Move**: Click on the Rock, Paper, or Scissors button, or use the keyboard shortcuts (`r`, `p`, `s`).
2. **View the Result**: The result of each round is displayed, showing the player's move, the computer's move, and the outcome (Win, Lose, or Tie).
3. **Check Your Score**: The current score is displayed and updated after each round.
4. **Autoplay**: Click the Autoplay button to start or stop automatic play.
5. **Reset Scores**: Click the Reset Scores button to clear the current score and start over.

## Code Overview

### HTML
The HTML structure includes buttons for Rock, Paper, and Scissors, a section to display the result, and buttons for resetting the score and autoplay.

### CSS
The CSS styles provide a dark-themed background, styling for the buttons, and text formatting to make the game visually appealing.

### JavaScript
The JavaScript handles the game logic:
- **pickComputerMove**: Randomly selects the computer's move.
- **chooseWinner**: Determines the winner based on the player's and computer's moves.
- **setScore**: Updates the score display.
- **Event Listeners**: Handle button clicks and keyboard input to play the game.
- **Autoplay**: Uses `setInterval` to automatically play a move every second.

## Local Development

To run the game locally, simply clone the repository and open the `index.html` file in your browser.

```bash
git clone https://github.com/yourusername/rock-paper-scissors.git
cd rock-paper-scissors
open index.html

