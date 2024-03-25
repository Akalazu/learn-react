import { useState } from "react";

export default function Player({ playerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edittedName, setEdittedName] = useState(playerName);

  const handleClick = () => {
    // setIsEditing(!isEditing); //bad practice and it is not updated by react instantaneously
    setIsEditing((editing) => !editing);
  };

  const handleEvent = (e) => setEdittedName(e.target.value);

  return (
    <li>
      <span className="player">
        <span className="player-name">
          {isEditing ? (
            <input
              type="text"
              value={edittedName}
              onChange={handleEvent}
              required
            />
          ) : (
            edittedName
          )}
        </span>
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
