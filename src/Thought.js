import React from "react";

export const Thought = ({ thought, removeThought, saveThought }) => {
  return (
    <li className="Thought">
      <span className="text">{thought.content}</span>
      <button
        className="remove-button"
        onClick={() => removeThought(thought.id)}
      >
        ✖
      </button>

      {!thought.isSaved && (
        <button className="save-button" onClick={() => saveThought(thought.id)}>
          Conserver
        </button>
      )}

      {thought.isSaved && <span className="saved-label"></span>}
    </li>
  );
};
