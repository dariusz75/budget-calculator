import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Table extends Component {
  render() {
    const { items, tableName, totalAmount, removeItem } = this.props;
    const style = {
      marginBottom: 15,
      padding: 15,
      backgroundColor:
        tableName === "Incomes"
          ? "#f1f2f6"
          : tableName === "Expenses"
          ? "#dfe9ea"
          : "#fff"
    };

    return (
      <div style={style}>
        <h5>
          {tableName}
          <span className="badge badge-primary float-right">
            Total: £{totalAmount}
          </span>
        </h5>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.transactionName}</td>
                  <td>{item.category}</td>
                  <td>{item.amount}</td>
                  <td>
                    <FontAwesomeIcon
                      id={item.id}
                      icon="trash"
                      onClick={() => removeItem(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
