import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Table extends Component {
  render() {
    const { items, tableName } = this.props;
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
        <h5>{tableName}</h5>
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
            {items.map((item, index) => {
              return (
                <tr key={`item_${index}`}>
                  <td>{item.transactionName}</td>
                  <td>{item.category}</td>
                  <td>{item.amount}</td>
                  <td>
                    <FontAwesomeIcon icon="trash" />
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
