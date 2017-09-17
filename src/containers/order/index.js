import React from 'react'
import { connect } from 'react-redux'
import { fire, pushData, pushRoute } from '../../utilities/utilities'
import TableRow from '../../components/TableRow/table-row'

import '../common-styles.css'

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {order: {}};
    }

    componentWillMount() {
        /* Create reference to messages in Firebase Database */
        fire.database().ref(`orders/${this.props.match.params.id}`).once('value').then(function(snapshot) {
            this.setState({order: snapshot.val()});
        }.bind(this));
    }

    _renderItems() {
        if(this.state.order.items){
            let stripe = false;
            return this.state.order.items.map((item, i) => {
                stripe = !stripe;
                return(
                    <TableRow
                        key={i}
                        firstLabel="Nombre: "
                        firstValue={item.name}
                        secondLabel="Cantidad: "
                        secondValue={item.amount}
                        route={`/item/${item.id}`}
                        striped={stripe}
                    ></TableRow>
                );
            });
        }
    }

  render() {
    return(
      <div>
        {this.state.order.name}
        <br/>
        {this.state.order.customer}
        <br/>
        Items:<br />
        {this._renderItems()}
      </div>
    );
  }
}

export default connect()(Order);
