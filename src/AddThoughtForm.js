import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utils/Utilities";

export function AddThoughtForm({ addThought }) {
  const [content, setText] = useState("");

  const handlecontentChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newThought = {
      id: generateId(),
      content: content,
      expiresAt: getNewExpirationTime(),
      isSaved: false
    };

    addThought(newThought);
    setText("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="Libérez votre Esprit. Ici, écrivez vos Pensées"
        value={content}
        onChange={handlecontentChange}
      />
      <input type="submit" value="Ajoutez" />
    </form>
  );
}
