import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" extact> 
        {/* //active is boolean so it can be passed like this */}
            Burger Builder
        </NavigationItem> 
        {props.isAuthenticated 
            ?<NavigationItem link="/orders">
                Orders
            </NavigationItem>
            : null
        }
        { !props.isAuthenticated 
            ? <NavigationItem link="/auth">
                Authenticate
            </NavigationItem>
            : <NavigationItem link="/logout">
                Logout
            </NavigationItem>
        }
    </ul>
);

export default NavigationItems;