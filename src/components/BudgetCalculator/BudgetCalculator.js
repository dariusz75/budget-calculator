import React, { Component } from "react";

import "./budget-calculator.css";
import { Display, Table, BudgetForm } from "../../components";

class BudgetCalculator extends Component {
  state = {
    items: [],
    incomeItems: [],
    expenseItems: []
  };

  addItem = (data) => {
    console.log("addItem value is:", data);
    const { transactionType, transactionName, amount, category } = data;
    const newItem = { transactionType, transactionName, amount, category };
    let newIncomeItem;
    let newExpenseItem;
    if (transactionType === "income") {
      newIncomeItem = { transactionType, transactionName, amount, category };
      this.setState({
        incomeItems: [...this.state.incomeItems, newIncomeItem]
      });
    }

    if (transactionType === "expense") {
      newExpenseItem = { transactionType, transactionName, amount, category };
      this.setState({
        expenseItems: [...this.state.expenseItems, newExpenseItem]
      });
    }
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  render() {
    const { items, incomeItems, expenseItems } = this.state;
    console.log("state.items is:", items);
    console.log("state.incomeItems is:", incomeItems);
    console.log("state.expanceItems is:", expenseItems);
    return (
      <div className="main-wrapper">
        <Display />
        <Table tableName="Incomes" items={incomeItems} />
        <Table tableName="Expenses" items={expenseItems} />
        <BudgetForm addItem={this.addItem} />
      </div>
    );
  }
}

export default BudgetCalculator;
