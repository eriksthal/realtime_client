import React from 'react'
import { connect } from 'react-redux'
import { pushRoute } from '../../utilities/utilities'
import NavigationItem from '../NavigationItem/navigation-item'
import Button from '../../components/Button/button'
import './navigation-bar.css'

var classNames = require('classnames');

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    toggleDrawer() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        const leftDrawerClasses = classNames({ 'navigation-bar__left-drawer': true, 'visible': this.state.visible });
        return (
            <div className="navigation-bar">
                {/* Left Drawer */}
                <div className={leftDrawerClasses}>
                    <div
                        className='navigation-bar__header'
                        onClick={this.toggleDrawer.bind(this)}
                    >
                        <div className="navigation-bar__app-name">
                            Plateau
                        </div>
                        <div className="navigation-bar__close-icon">
                            <i className="fa fa-close fa-2x"></i>
                        </div>
                    </div>
                    <NavigationItem
                        icon='gamepad'
                        label="Inventario"
                        route="/inventory">
                    </NavigationItem>
                    <NavigationItem
                        icon='archive'
                        label="Ordenes"
                        route="/orders">
                    </NavigationItem>
                    <NavigationItem icon='tachometer' label="Reportes" route="/reports"></NavigationItem>
                    <NavigationItem icon='handshake-o' route='/customers' label="Clientes"></NavigationItem>
                    <NavigationItem
                        icon='plus'
                        label="Menu 1"
                        children={[
                            {label: 'Sub menu 1', route: '/wawawa'},
                            {label: 'Wawwa', route: '/route2'},
                            {label: 'wawaw', route: '/route3'},
                        ]}>
                    </NavigationItem>
                    <div className='navigation-bar__left-drawer--bottom'>
                        <Button label="Misc Button" color="red" route="/test" icon="rocket" onClick={()=> alert('hey')}></Button>
                    </div>
                </div>
                {/* Navigation Bar Content */}
                <div
                        className='navigation-bar__header'
                    >
                        <div onClick={this.toggleDrawer.bind(this)} className="navigation-bar__menu-icon">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div onClick={pushRoute.bind(this, this, this.props.indexRoute)} className="navigation-bar__main-app-name">
                            Plateau
                        </div>
                    </div>
            </div>
        );
    }
}

export default connect()(NavigationBar);

