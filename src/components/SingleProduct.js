import React from 'react'
import {Card,Button } from "react-bootstrap";
import Rating from './Rating';
import { CartState } from '../context/Context';

const SingleProduct = ({prod}) => {
    const {
        state: { cart },
        dispatch, //for manuplating states
    } = CartState();

    return (
        <div className="products">
            <Card>
                <Card.Img 
                variant="top" 
                src={prod.image}
                alt={prod.name}    
                />
                <Card.Body>
                    <Card.Title>
                        {prod.name}
                    </Card.Title>
                    <Card.Subtitle
                    style={{paddingBottom: 10}}>
                    <span>Rs {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 Days Delivery</div>
                    )}
                    <Rating rating={prod.ratings} />
                    </Card.Subtitle>

                    {/* CHECKING if particular things are available 
                    in cart or not, showing add or remove on conidtion */}
                    {
                        cart.some(p => p.id === prod.id) ? (
                            <Button
                            onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: prod
                                })
                            }} 
                            variant="danger">Remove from cart</Button>
                        ):(
                            <Button 
                            onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: prod
                                })
                            }}
                            disabled={!prod.inStock}>
                                {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                            </Button>
                        )
                    }
                    {/* onClick function in add button where we use dispatch and 
                    it takes two parameters, one for type and another for payload */}
                </Card.Body>
            </Card>

        </div>
    )
}

export default SingleProduct
