import React, { Component } from "react";

import "./budget-calculator.css";
import { Display, Table, BudgetForm } from "../../components";

class BudgetCalculator extends Component {
  state = {
    //items: [],
    incomeItems: [],
    expenseItems: [],
    totalIncome: 0,
    totalExpense: 0,
    totalBudget: 0
  };

  addItem = (data) => {
    console.log("addItem value is:", data);
    const { transactionType, transactionName, amount, category } = data;
    //const newItem = { transactionType, transactionName, amount, category };
    let newIncomeItem;
    let newExpenseItem;
    if (transactionType === "income") {
      newIncomeItem = { transactionType, transactionName, amount, category };
      this.setState({
        incomeItems: [...this.state.incomeItems, newIncomeItem],
        totalIncome: this.state.totalIncome + amount
      });
    }

    if (transactionType === "expense") {
      newExpenseItem = { transactionType, transactionName, amount, category };
      this.setState({
        expenseItems: [...this.state.expenseItems, newExpenseItem],
        totalExpense: this.state.totalExpense + amount
      });
    }
    this.setState({
      totalBudget: this.state.totalIncome - this.state.totalExpense
    });
  };

  render() {
    const {
      incomeItems,
      expenseItems,
      totalIncome,
      totalExpense,
      totalBudget
    } = this.state;
    //console.log("state.items is:", items);
    console.log("state.incomeItems is:", incomeItems);
    console.log("state.expanceItems is:", expenseItems);
    console.log("state.totalBudget is:", totalBudget);
    return (
      <div className="main-wrapper">
        <Display totalBudget={totalBudget} />
        <Table
          tableName="Incomes"
          items={incomeItems}
          totalAmount={totalIncome}
        />
        <Table
          tableName="Expenses"
          items={expenseItems}
          totalAmount={totalExpense}
        />
        <BudgetForm addItem={this.addItem} />
      </div>
    );
  }
}

export default BudgetCalculator;
