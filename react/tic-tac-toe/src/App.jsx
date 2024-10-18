import { useState } from 'react'
import './App.css'
import Board from './components/Board.jsx'

const TURN=['X', 'O'];
const winnerOptions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const EMPATE = 'EMPATE!!!!!'

function App() {
    const [history, setHistory] = useState([]);
    const [winner, setWinner] = useState(null);
    const boardValues = Array(9).fill(null);
    
    history.map((item) => {
        boardValues[item[0]] = item[1];
    })
    const currentTurn = TURN [history.length %2 ];
    let message = `TURN: ${currentTurn}`;

    function handleClick(index) {
        if (!winner && !boardValues[index]) {
            setHistory([...history, [index, currentTurn]]);
        }
        
    }

    function checkWinner() {        
        const haveWinner = winnerOptions.some((item) => {
            const [a,b,c] = item;
            return (boardValues[a] && boardValues[a] == boardValues[b] && boardValues[a] == boardValues[c])
        })

        if (haveWinner) {
            setWinner((currentTurn === TURN[0])?TURN[1] :TURN[0])
        } else if (history.length === 9){
            setWinner(EMPATE);
        }
    }

    function reset () {
        setHistory([]);
        setWinner(null);
    }

    if (!winner) {
        checkWinner();
    } else {
        message = winner === EMPATE ? EMPATE : `GANADOR: ${winner}`;
    }
    
    console.log(history);
    return (
        <>
        <h1>{message}</h1>
        <Board values={boardValues} handleClick={handleClick}></Board>
        <button className='reset' onClick={reset}>Reset</button>
        </>
    )
}

export default App
