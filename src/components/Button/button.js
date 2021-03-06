import React from 'react'
import { connect } from 'react-redux'
import { pushRoute } from '../../utilities/utilities'

import './button.css'

class Button extends React.Component {

    getIcon() {
        if (this.props.icon) {
            return(<i className={'fa fa-'+this.props.icon+' button__icon'}></i>);
        }
    }

    goTo() {
        if(this.props.onClick) {
            this.props.onClick();
        } else {
            pushRoute(this, this.props.route);
        }
    }

    getButtonType() {
        let buttonClass = 'button rounded ';
        if (this.props.color) {
            buttonClass = buttonClass + this.props.color
        }
        return buttonClass;
    }

    render() {
        return (
            <div>
                <div>
                    <div className={this.getButtonType()} onClick={this.goTo.bind(this)}>
                        <div className="button__label">{this.getIcon()}{this.props.label}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Button);

