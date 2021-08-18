import React,{useState} from 'react';
import Aux from '../Auxilliary/Auxilliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import  './Layout.css';
import SideDrawer from '../../components/Navigation/SideBar/SideDrawer';
import { connect } from 'react-redux';

const Layout = (props) => {
    const [state, setstate] = useState({
        showSideDrawer: true,
    });
    const SideDrawerCLosedHandler = () => {
        setstate({showSideDrawer: false})
    }
    const sideDrawerToggleClicked = () => {
        // setstate({
        //     showSideDrawer: !state.showSideDrawer
        // }) 
        // THIS WILL THROW AN ERROR 
        setstate((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    return(
        <Aux>
            <Toolbar 
            isAuth = {props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleClicked} />
            <SideDrawer 
            isAuth = {props.isAuthenticated}
            open={state.showSideDrawer} closed={SideDrawerCLosedHandler} />
            <main className='Content'>
                {props.children}
            </main> 
        </Aux>  
    );
}

const mapStateToProps = state => {
    return{
        //JS object
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);