import React from 'react';
//Destructuring props
// const props = {
//     onClick: () => "FUnction",
//     value: "X"
// }

// const {value} = props;
// value;
const style ={
    background: 'lightblue',
    border: '2px solid darkblue',
    borderRadius: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    outline: 'none'
}
const Square = ({value,onClick}) => (
    <button
     style={style} 
     onClick={onClick}
     > 
    {value}
    </button>
)

export default Square;