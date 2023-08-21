import React, { useState } from "react";
import { nanoid } from "nanoid";

function FriendForm({ data, dataSetter, modalStatus, modalSetter }) {
  const [newFriendName, setNewFriendName] = useState("");

  function handleNameChange(e) {
    e.preventDefault();
    setNewFriendName(e.target.value);
  }

  function handleNewFriend(e) {
    e.preventDefault();
    let uniqid = nanoid();
    if (newFriendName) {
      dataSetter([...data, { id: uniqid, image: `https://i.pravatar.cc/72?u=${uniqid}`, name: newFriendName, balance: 0 }]);
      setNewFriendName("");
      modalSetter(false);
    }
  }

  return (
    modalStatus && (
      <>
        <div className="overlay" onClick={() => modalSetter(false)}></div>
        <div className="add">
          <form onSubmit={handleNewFriend}>
            <div className="line">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path>
              </svg>
              <span>Friend name</span>
              <input type="text" value={newFriendName} onChange={handleNameChange} />
            </div>
            <button>Add</button>
          </form>
        </div>
      </>
    )
  );
}

export default FriendForm;
