import React from 'react'
import ProductTable from '../../components/ProductTable/product-table'
import TextInput from '../../components/TextInput/text-input'
import { fire, pushData } from '../../utilities/utilities'

import '../common-styles.css'

class Inventory extends React.Component{

  constructor(props) {
    super(props);
    this.state={messages: [], filteredMessages: []};
    this.messagesRef = fire.database().ref('items').orderByKey().limitToFirst(10);
    this.messagesRef.on('value', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: message.text, filteredMessages: message.text });
    });
  }

  nextPage() {
    const lastKey = Object.keys(this.state.messages).pop();
    this.messagesRef = fire.database().ref('items').orderByKey().limitToFirst(10)
    .startAt(lastKey);
    this.messagesRef.on('value', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: message.text, filteredMessages: message.text });
    });
  }

  previousPage() {
    const firstKey = Object.keys(this.state.messages)[0];
    console.log(Object.keys(this.state.messages));
    this.messagesRef = fire.database().ref('items').orderByKey().limitToFirst(10)
    .endAt(firstKey);
    this.messagesRef.on('value', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: message.text, filteredMessages: message.text });
    });
  }

  filterResults(event) {
    var updatedList = this.state.messages;
    updatedList = updatedList.filter(item => {
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredMessages: updatedList});
  }

  addOrder(){
    pushData('orders',
      {
        name: "Erik",
        customer: "Huawei",
        ready: false,
        items: [
          {"12344": 0, ready: "true"},
          {"12347": 33, ready: "false"},
          {"12245": 33, ready: "false"},
          {"12005": 33, ready: "false"},
          {"98345": 0, ready: "true"}
        ]
      }
    );
  }

  addItem(){
    pushData('items',
      {
        name: "Erik",
        customer: "Huawei",
        description: 'Des',
        location: '1-2-3',
        quantity: 1,
        sku: '3345rWD'
      }
    );
  }

  render() {
    return(
      <div>
      <h1 className="title">Inventory Page</h1>
      <button onClick={this.addItem.bind(this)}>Add</button>
      <button onClick={this.previousPage.bind(this)}>Previous</button>
      <button onClick={this.nextPage.bind(this)}>Next</button>
      <div className="container">
        <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <TextInput search="true" placeholder="Search..." onChange={this.filterResults.bind(this)}></TextInput>
        </div>
        <ProductTable items={this.state.filteredMessages} type='inventory'>
        </ProductTable>
      </div>
      </div>
    );
  }
}

export default Inventory
