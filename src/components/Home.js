import React from 'react'
import {CartState} from '../context/Context';
import SingleProduct from './SingleProduct';
import './styles.css';
import Filters from './Filters';

const Home = () => {
    const {
        state : {products},
        productState:{byStock,byFastDelivery,sort,byRating,searchQuery,},
    } = CartState();

    //logical function to render products according filter
    const transformProducts = () => {
        let sortedProducts = products;

        //checking if there is sthg in sort like any highTolow like these and we will manipulate sortedProducts
        if(sort){
            sortedProducts = sortedProducts.sort((a,b) =>(
                sort==='lowToHigh'?a.price-b.price:b.price-a.price
            ));
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery);
        }
        if(byRating){
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >=byRating
                );
        }
        if(searchQuery){
            sortedProducts = sortedProducts.filter(
                (prod) => prod.name.toLowerCase().includes(searchQuery)
                );
        }
        

        return sortedProducts
    }
    return (
        <div className='home'>
            <Filters/>
            <div className='productContainer'>
                {transformProducts().map((prod,idx) => {
                    return <SingleProduct prod={prod} key={idx} />
                })}
            </div>
        </div>
    )
}

export default Home
