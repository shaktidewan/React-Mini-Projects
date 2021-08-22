import React from 'react';
import Square from './Square';

const style ={
    background:'gray',
    border: '2px solid darkblue',
    borderRadius: '10px',
    margin: '0 auto',
    height: '200px',
    width: '200px',
    display: 'grid',
    //for cube layout
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}
{/* IN GAME.js
<Board squares={board} onClick={handleClick} /> 
*/}

const Board = ({squares,onClick}) => (
    <div style={style}> 
    {squares.map((square,i) => (
        <Square 
        key={i} 
        value={square} 
        onClick={() => onClick(i)} />
    ))}
    </div>
    );

export default Board;