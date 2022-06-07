import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/* {filteredExpensed.length === 0 && <p>No expenses found.</p>}
      {filteredExpensed.length > 0 &&
        filteredExpensed.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            // key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}

      {/* {filteredExpensed.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpensed.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            // key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
