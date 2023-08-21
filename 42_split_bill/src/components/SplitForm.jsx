import React, { useState } from "react";

function SplitForm({ activeFriend, data, dataSetter, friendSetter }) {
  const [bill, setBill] = useState({
    amount: "",
    myExpense: "",
    mePaying: true,
  });

  function handleBillSubmit(e) {
    e.preventDefault();
    if (bill.amount) {
      let activeFriendIndex = data.findIndex((e) => e.id == activeFriend.id);

      let dataCopy = [...data];
      if (bill.mePaying) {
        dataCopy[activeFriendIndex].balance += bill.amount - bill.myExpense;
      } else {
        dataCopy[activeFriendIndex].balance -= bill.myExpense;
      }

      dataSetter(dataCopy);
      friendSetter(false);
      setBill({
        amount: "",
        myExpense: "",
        mePaying: true,
      });
    }
  }

  function handleBillChange(e) {
    setBill({ ...bill, amount: e.target.value.replace(/\D/, "") });
  }

  function handleMyExpenseChange(e) {
    setBill({ ...bill, myExpense: e.target.value.replace(/\D/, "") });
  }

  function handleMePayngChange(e) {
    setBill({ ...bill, mePaying: Boolean(Number(e.target.value)) });
  }

  return (
    <div className="split">
      <h1>Split A bill with {activeFriend.name} </h1>
      <form action="" onSubmit={handleBillSubmit}>
        <div className="line">
          <label htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 15c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1z"></path>
              <path d="M5 2H2v2h2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4h2V2H5zm13 18H6V4h12z"></path>
            </svg>
            Bill Value
          </label>
          <input type="text" value={bill.amount} onChange={handleBillChange} />
        </div>
        <div className="line">
          <label htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z"></path>
              <circle cx="8.5" cy="12.5" r="1.5"></circle>
              <circle cx="15.5" cy="12.5" r="1.5"></circle>
            </svg>
            Yoiur Expence
          </label>
          <input type="text" value={bill.myExpense} onChange={handleMyExpenseChange} />
        </div>
        <div className="line">
          <label htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle cx="6" cy="4" r="2"></circle>
              <path d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"></path>
              <circle cx="17" cy="4" r="2"></circle>
              <path d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"></path>
            </svg>
            {activeFriend.name} Expence
          </label>
          <input type="text" disabled value={bill.amount - bill.myExpense == 0 ? "" : bill.amount - bill.myExpense} />
        </div>
        <div className="line">
          <label htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M14 9h8v6h-8z"></path>
              <path d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2v-2h-8c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h8V5c0-1.103-.897-2-2-2z"></path>
            </svg>
            who pays
          </label>
          <select onChange={handleMePayngChange}>
            <option value="1">Me</option>
            <option value="0">{activeFriend.name}</option>
          </select>
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default SplitForm;
