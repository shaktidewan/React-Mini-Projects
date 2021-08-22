import React,{useState} from 'react';
import Board from './Board';
import calculateWinner from '../calculateWinner';

const style ={
    marginLeft: '700px',
    marginTop: '20px'
}
const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]); //array ne array banaunu parxa... past moves haru rakhna ko lagi
    const [stepNumer, setStepNumber] = useState(0); //acutal step in an above array created
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumer]);//sending most recent step number of history

    const handleClick = (i) =>{
        //slicing out the history we don't need because we are jumping from one to another
        //completly wiping out the steps we are actual on
        //slicing from 0 to stepnumber +1(ie current step)
        const timeInHistory = history.slice(0,stepNumer + 1);
        const current = timeInHistory[stepNumer];//most current move

        const squares = [...current] //clone of state that we are going to mutuated.
        //copying board state. immutable
        // const boardCopy = [...board];
        //if user click on occupied square or if game is won, return
        if( winner || squares[i] ) return; //yedi winner vayeskayo ya lekhisakeko square ma click garyo vane nothing return
        //put an x or an o in the clicked square
        squares[i] = xIsNext ? 'X' : 'O'; //i = kun square ho vanera 
        //yedi square[1] ma click garyo vane X dine state true cha vane natra O
        setHistory([...timeInHistory, squares])
        //...timeInHistory = we want keep this state
        //sqaures = most recent state

        setStepNumber(timeInHistory.length);
        //it will give new state number beacuse it will add one array here and length will increase by one and give new stepnumber
        setXisNext(!xIsNext);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 ===0 );
    }

    
        //_ is given to step because it is not used
        const renderMoves = history.map((_step, move) => {
            //render out button for moving back and forward
            const destination = move ? `move #${move}` : "Go to start";
            console.log(destination);
            return (
                <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {destination}
                </button>
                </li>
            )
        })
    

    return (
        <>
        {/* squares={history[stepNumer]} = current history state and current stepNumber */}
            <Board squares={history[stepNumer]} onClick={handleClick} />
            <div style={style}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: '+ (xIsNext ? 'X': 'O')}</p>
                {renderMoves}
            </div>
        </>
    )
}

export default Game;