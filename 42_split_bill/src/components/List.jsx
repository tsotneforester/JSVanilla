import React from "react";

function List({ data, setter /*setActiveFriend*/, activeFriendID, modal }) {
  function handleSelect(id) {
    setter(data.filter((e) => e.id == id)[0]);
  }

  function handleClose() {
    setter(false);
  }

  return (
    <div className="list">
      {data.map((person) => {
        return (
          <div key={person.id} className="card">
            <img src={person.image} alt={person.name} />
            <div className="info">
              <h1>{person.name}</h1>
              <h2 className={person.balance > 0 ? "green" : person.balance < 0 ? "red" : "white"}>{person.balance > 0 ? `${person.name} owes you ${Math.abs(person.balance)} €` : person.balance < 0 ? `You owe ${person.name} ${Math.abs(person.balance)} €` : `No dets with ${person.name} `}</h2>
            </div>
            {person.id == activeFriendID ? <button onClick={() => handleClose()}>close</button> : <button onClick={() => handleSelect(person.id)}>select</button>}
          </div>
        );
      })}
      <button onClick={() => modal(true)}>Add Friend</button>
    </div>
  );
}

export default List;
