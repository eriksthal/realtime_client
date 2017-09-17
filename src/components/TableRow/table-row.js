import React from 'react'
import { connect } from 'react-redux'
import { pushRoute } from '../../utilities/utilities'

import './table-row.css'

var classNames = require('classnames');

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDetail: false };
    }

    goTo() {
        if(this.props.route) {
            pushRoute(this, this.props.route);
        }
    }

    toggleDetail() {
        this.setState({
            showDetail: !this.state.showDetail
        });
    }

    render() {
        const detailClass = classNames({ 'table-row__detail': true, 'visible': this.state.showDetail });
        const rowClass = classNames({ 'table-row__row': true, 'striped': this.props.striped });
        const chevronClass = classNames({ 'fa': true, 'fa-chevron-right': true, 'table-row__chevron': true, hidden: this.props.hideChevron });
        return (
            <div className="table-row" onClick={this.goTo.bind(this)}>
                <div className={rowClass} onClick={this.toggleDetail.bind(this)}>
                    <div className="table-row__row--first-half">
                        <label className="table-row__element"><span className="table-row__element-first">{this.props.firstLabel}</span>{this.props.firstValue}</label>
                        <label className="table-row__element"><span className="table-row__element-second">{this.props.secondLabel}</span>{this.props.secondValue}</label>
                        <label className="table-row__element"><span className="table-row__element-third">{this.props.thirdLabel}</span>{this.props.thirdValue}</label>
                    </div>
                    <div className="table-row__row--second-half">
                        <label className="table-row__element right"><span className="table-row__element-fourth">{this.props.fourthLabel}</span>{this.props.fourthValue}</label><i className={chevronClass}></i>
                    </div>
                </div>
                <div className={detailClass}>
                    <h2 className="title">Product Name</h2>
                    <div className="table-row__detail--container">
                        <h2>SKU {this.props.sku}</h2>
                        <h3>Product Description</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(TableRow);

