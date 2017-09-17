import React from 'react'
import { connect } from 'react-redux'
import { pushRoute } from '../../utilities/utilities'
import './navigation-item.css'

var classNames = require('classnames');

class NavigationItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showChildren: false };
    }

    getIcon() {
        if (this.props.icon) {
            return(<i className={'fa fa-'+this.props.icon+' navigation-item__icon'}></i>);
        }
    }

    getMoreIcon() {
        if (this.props.children) {
            if(this.state.showChildren) {
                return(<i className={'fa fa-chevron-up'}></i>);
            }
            else {
                return(<i className={'fa fa-chevron-down'}></i>);
            }
        }
    }

    goTo() {
        if(this.props.children) {
            this.toggleChildren();
        } else {
            pushRoute(this, this.props.route);
        }
    }

    getChildren() {
        if(this.props.children) {
        const children = classNames({ 'navigation-item__children--container': true, 'visible': this.state.showChildren });
        return(
            <div className={children}>
                    {this.props.children.map((child, i) =>
                        <div className="navigation-item__child" onClick={pushRoute.bind(this, this, child.route)}  key={i}>{child.label}</div>
                    )}
            </div>
        );
        }
    }

    toggleChildren() {
        this.setState({
            showChildren: !this.state.showChildren
        });
    }

    render() {
        const parentClass= classNames({ 'navigation-item__parent': true, 'selected': this.state.showChildren })
        return (
            <div>
                <div>
                    <div className={parentClass} onClick={this.goTo.bind(this)}>
                        <div className="navigation-item__label-container">{this.getIcon()}{this.props.label}</div>
                        <div className="navigation-item__more-icon">{this.getMoreIcon()}</div>
                    </div>
                </div>
                {this.getChildren()}
            </div>
        );
    }
}

export default connect()(NavigationItem);

