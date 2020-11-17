import React, { Component } from "react";
import uuid from "react-uuid";

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

  handleAddItem = (data) => {
    console.log("addItem value is:", data);
    const { transactionType, transactionName, amount, category } = data;
    //const newItem = { transactionType, transactionName, amount, category };
    let newIncomeItem;
    let newExpenseItem;
    if (transactionType === "income") {
      newIncomeItem = {
        id: uuid(),
        transactionType,
        transactionName,
        amount,
        category
      };
      this.setState({
        incomeItems: [...this.state.incomeItems, newIncomeItem],
        totalIncome: this.state.totalIncome + amount
      });
    }

    if (transactionType === "expense") {
      newExpenseItem = {
        id: uuid(),
        transactionType,
        transactionName,
        amount,
        category
      };
      this.setState({
        expenseItems: [...this.state.expenseItems, newExpenseItem],
        totalExpense: this.state.totalExpense + amount
      });
    }
    this.setState({
      totalBudget: this.state.totalIncome - this.state.totalExpense
    });
  };

  handleRemoveIncomeItem = (id) => {
    console.log("id is", id);
    let updatedIncomeItems = [...this.state.incomeItems];
    const itemToRemove = updatedIncomeItems.findIndex((item) => item.id === id);

    updatedIncomeItems.splice(itemToRemove, 1);
    this.setState({ incomeItems: updatedIncomeItems });
  };

  handleRemoveExpenseItem = (id) => {
    console.log("id is", id);
    let updatedExpenseItems = [...this.state.expenseItems];
    const itemToRemove = updatedExpenseItems.findIndex(
      (item) => item.id === id
    );

    updatedExpenseItems.splice(itemToRemove, 1);
    this.setState({ expenseItems: updatedExpenseItems });
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
          removeItem={this.handleRemoveIncomeItem}
        />
        <Table
          tableName="Expenses"
          items={expenseItems}
          totalAmount={totalExpense}
          removeItem={this.handleRemoveExpenseItem}
        />
        <BudgetForm addItem={this.handleAddItem} />
      </div>
    );
  }
}

export default BudgetCalculator;
