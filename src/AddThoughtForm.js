import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utils/Utilities';

export function AddThoughtForm({ addThought }) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
      isSaved: false,
    };

    addThought(newThought);
    setText('');
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="Libérez votre Esprit. Ici, écrivez vos Pensées"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Ajoutez" />
    </form>
  );
}
