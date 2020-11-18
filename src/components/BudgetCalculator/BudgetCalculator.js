import React, { Component } from "react";
import uuid from "react-uuid";

import "./budget-calculator.css";
import { Display, Table, BudgetForm } from "../../components";

class BudgetCalculator extends Component {
  state = {
    incomeItems: [],
    expenseItems: [],
    totalIncome: 0,
    totalExpense: 0,
    totalBudget: 0
  };

  handleAddItem = (data) => {
    //console.log("addItem value is:", data);
    const { transactionType, transactionName, amount, category } = data;
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
    let updatedIncomeItems = [...this.state.incomeItems];
    const itemToRemove = updatedIncomeItems.findIndex((item) => item.id === id);
    const amountToRemove = updatedIncomeItems[itemToRemove].amount;

    updatedIncomeItems.splice(itemToRemove, 1);
    this.setState((prevState) => ({
      incomeItems: updatedIncomeItems,
      totalIncome: prevState.totalIncome - amountToRemove,
      totalBudget: prevState.totalBudget - amountToRemove
    }));
  };

  handleRemoveExpenseItem = (id) => {
    let updatedExpenseItems = [...this.state.expenseItems];
    const itemToRemove = updatedExpenseItems.findIndex(
      (item) => item.id === id
    );
    const amountToRemove = updatedExpenseItems[itemToRemove].amount;

    updatedExpenseItems.splice(itemToRemove, 1);
    this.setState((prevState) => ({
      expenseItems: updatedExpenseItems,
      totalExpense: prevState.totalExpense - amountToRemove,
      totalBudget: prevState.totalBudget + amountToRemove
    }));
  };

  componentDidMount() {
    if (localStorage.getItem("lastState")) {
      const lastState = JSON.parse(localStorage.getItem("lastState"));
      this.setState(lastState);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("lastState", JSON.stringify(this.state));
  }

  render() {
    const {
      incomeItems,
      expenseItems,
      totalIncome,
      totalExpense,
      totalBudget
    } = this.state;

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
