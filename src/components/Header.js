import React from 'react'
import { Container,FormControl,Navbar,Dropdown,Button } from 'react-bootstrap'
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart,AiFillDelete} from "react-icons/ai"
import { CartState } from '../context/Context';

const Header = () => {
    const {
        state: {cart},
        dispatch,
        productDispatch,
    } = CartState()

    return (
        <Navbar bg='dark' variant='dark'
        style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Yakkha Bakery Shop</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl 
                        style={{width:500}}
                        placeholder='Search our products'
                        className='m-auto'
                        onChange={(e) =>{
                            productDispatch({
                                type:"FILTER_BY_SEARCH",
                                payload: e.target.value,
                            });
                        }}
                    />
                </Navbar.Text>
                <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <AiOutlineShoppingCart/>  {cart.length}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370}}>
                    {cart.length > 0 ? (
                        <>
                        {
                            cart.map((prod)=>(
                                <span className="cartitem" key={prod.id}>
                                <img
                                src={prod.image}
                                className="cartItemImg"
                                alt={prod.name}
                                />
                                <div classNmae="cartItemDetail">
                                    <span>{prod.name}</span>
                                    <span> Rs.{prod.price.split(".")[0]}</span>
                                </div>
                                <AiFillDelete
                                onClick={() => {
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: prod
                                    })
                                }} 
                                variant="danger"></AiFillDelete>
                                </span>
                            ))
                        }
                        <Link to="/cart">
                        <Button style={{width: "95%",margin: "0 10px"}}>
                            Go To Cart
                        </Button>
                        </Link>
                        </>
                    ) : (
                        <Dropdown.Item href="#/action-3">Nothing</Dropdown.Item>
                    )}
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header
