import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    
    render () {
        return (
            <>
            <Toolbar drawerToggleClicked={this.showSideDrawerHandler} showSideDrawer={this.showSideDrawerHandler}/>
            <SideDrawer show={this.state.showSideDrawer} showSideDrawer={this.showSideDrawerHandler}/>
            <main className={classes.content}>
                {this.props.children}
            </main>
            </>
        );
    }
}

export default Layout;