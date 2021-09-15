import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

const Rating = (props) => {
    return (
        <div>
            {
                [...Array(5)].map((_,i) => (
                    <span 
                    key={i} 
                    onClick={() => props.onClick(i)}
                    style={props.style}
                    >
                        {props.rating > i ? (
                            <AiFillStar fontSize="15px" />
                        ) : (
                            <AiOutlineStar fontSize="15px" />
                        )}
                    </span>
                ))
            }
        </div>
    )
}

export default Rating
