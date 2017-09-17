import React from 'react'
import { connect } from 'react-redux'
import { pushRoute } from '../../utilities/utilities'
import TableRow from '../TableRow/table-row'
import './product-table.css'

class ProductTable extends React.Component {

    _buildInventoryTable() {
        let stripe = false;
        return(
             Object.keys(this.props.items).map((item, i) => {
                stripe = !stripe;
                return(
                    <TableRow
                        key={i}
                        thirdValue={this.props.items[item].name}
                        secondValue={this.props.items[item].location}
                        description={this.props.items[item].description}
                        firstValue={i}
                        customer={this.props.items[item].customer}
                        fourthValue={this.props.items[item].quantity}
                        striped={stripe}
                        firstLabel="SKU: "
                        secondLabel="Ubicacion: "
                        thirdLabel="Nombre: "
                        fourthLabel="QTY"
                    ></TableRow>
                );
            })
        );
    }

    _buildOrdersTable() {
        let stripe = false;
        return(
            Object.keys(this.props.items).map((order, i) => {
                stripe = !stripe;
                return(
                    <TableRow
                        key={i}
                        firstValue={order}
                        firstLabel="Id: "
                        secondValue={this.props.items[order].name}
                        secondLabel="Nombre: "
                        thirdValue={this.props.items[order].customer}
                        thirdLabel="Cliente: "
                        striped={stripe}
                        route={`/order/${order}`}
                    >
                    </TableRow>
                );
            })
        );
    }

    _getTableType() {
        switch(this.props.type) {
            case 'inventory':
            return this._buildInventoryTable();
            case 'orders':
            return this._buildOrdersTable();
        }
    }
    render() {
        return (
            <div>
                <div className="product-table__table-header">
                    <TableRow
                        thirdValue="Nombre"
                        secondValue="Ubicación"
                        firstValue="SKU"
                        fourthValue="QTY"
                        striped={true}
                        hideChevron={true}
                    ></TableRow>
                </div>
                {this._getTableType()}
            </div>
        );
    }
}

ProductTable.defaultProps = {
  type: 'inventory'
};

export default connect()(ProductTable);

