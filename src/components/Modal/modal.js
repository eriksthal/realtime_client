import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button/button'
import { pushRoute } from '../../utilities/utilities'
import './modal.css'

var classNames = require('classnames');

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    showModal() {
        this.setState({
            showModal: true
        });
        document.body.classList.add("noScroll");
    }

    closeModal() {
        this.setState({
            showModal: false
        });
        document.body.classList.remove("noScroll");
    }

    render() {
        const parentClass = classNames({ 'navigation-item__parent': true, 'selected': this.state.showModal })
        const modalClass = classNames({'modal': true, visible: this.state.showModal});
        return (
            <div>
                <Button onClick={this.showModal.bind(this)} label="Nueva Orden" icon="plus" color="blue"></Button>
                <div className={modalClass} onClick={this.closeModal.bind(this)}>
                    <div className="modal__card">
                        <button onClick={this.closeModal.bind(this)}>Close</button>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Modal);

