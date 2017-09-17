import React from 'react'
import { connect } from 'react-redux'

import './text-input.css'

class TextInput extends React.Component {

    isSearchInput() {
        if(this.props.search) {
            return(<i className="fa fa-search text-input__icon"></i>);
        }
    }

    render() {
        return (
            <div>
                <input value={this.props.value} onClick={this.props.onClick} className="text-input" type="text" placeholder={this.props.placeholder} onChange={this.props.onChange}/>{this.isSearchInput()}
            </div>
        );
    }
}

export default connect()(TextInput);

