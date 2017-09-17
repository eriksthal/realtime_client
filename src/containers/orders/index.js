import React from 'react'
import ProductTable from '../../components/ProductTable/product-table'
import Modal from '../../components/Modal/modal'
import TextInput from '../../components/TextInput/text-input'
import Button from '../../components/Button/button'
import { fire, pushData } from '../../utilities/utilities'

import '../common-styles.css'

class Orders extends React.Component{

  constructor(props) {
    super(props);
    this.state={orders: [], filteredOrders: [], name: '', customer: '', messages: [], filteredMessages: []};
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let ordersRef = fire.database().ref('orders').orderByKey().limitToLast(100);
    ordersRef.on('value', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let order = { text: snapshot.val(), id: snapshot.key };
      console.log(order);
      this.setState({ orders: order.text, filteredOrders: order.text });
    })
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('items').orderByKey().limitToLast(100);
    messagesRef.on('value', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: message.text, filteredMessages: message.text });
    })
  }

  updateName(e) {
    this.setState({name: e.target.value});
  }

  updateCustomer(e) {
    this.setState({customer: e.target.value});
  }

  stopPropagation(e) {
    e.stopPropagation();
  }
  addOrder(){
    pushData('orders',
      {
        name: this.state.name,
        customer: this.state.customer,
        ready: false,
        items: [
          {
            id: '-KRw34drgade_Are',
            sku: 'WB30001500',
            name: 'Thor',
            amount: '12',
            customer: 'Huawei',
            ready: false
          },
          {
            id: '0',
            sku: 'WB30001500',
            name: 'Thore',
            amount: '1',
            customer: 'Huawei',
            ready: false
          },
          {
            id: '1',
            sku: 'WB30001500',
            name: 'Thord',
            amount: '33',
            customer: 'Huawei',
            ready: false
          },
          {
            id: '3',
            sku: 'WB30001500',
            name: 'Thors',
            amount: '12',
            customer: 'Huawei',
            ready: false
          },
          {
            id: '6',
            sku: 'WB30001500',
            name: 'Thora',
            amount: '0',
            customer: 'Huawei',
            ready: true
          }
        ]
      }
    );
    this.setState({name: '', customer: ''});
  }

  alert() {
    alert('hey');
  }

  render() {
    let stripe = false;
    return(
      <div>
      <Modal label="Nueva Orden">
          <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
            <div>
            <TextInput value={this.state.name} onClick={this.stopPropagation.bind(this)} onChange={this.updateName.bind(this)} />
            <TextInput type="text" value={this.state.customer} onClick={this.stopPropagation.bind(this)} onChange={this.updateCustomer.bind(this)} />
            </div>
            <div style={{flexDirection: 'column'}}>
              <ProductTable items={this.state.filteredMessages} type="inventory"></ProductTable>
            </div>
            <Button onClick={this.addOrder.bind(this)} color="blue" label="Add Order" icon="plus"></Button>
            <Button color="red" label="Cancel" icon="times"></Button>
          </div>
      </Modal>
      <ProductTable items={this.state.filteredOrders} type="orders"></ProductTable>
      </div>
    );
  }
}

export default Orders
