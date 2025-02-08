import React, { useState, useEffect } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import './App.css';

export default function App() {
  const [thoughts, setThoughts] = useState([]);

  // Add nouvelle pensée
  const addThought = (thought) => {
    setThoughts((prevThoughts) => [thought, ...prevThoughts]);
  };

  // enlève une pensée by ID
  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prevThoughts) =>
      prevThoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  // Save une pensée by marking it as saved
  const saveThought = (thoughtId) => {
    setThoughts((prevThoughts) =>
      prevThoughts.map((thought) =>
        thought.id === thoughtId ? { ...thought, isSaved: true } : thought
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughts((prevThoughts) =>
        prevThoughts.filter((thought) => thought.isSaved || thought.expiresAt > Date.now())
      );
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  const savedThoughts = thoughts.filter((thought) => thought.isSaved);
  const passingThoughts = thoughts.filter((thought) => !thought.isSaved);

  return (
    <div className="App">
      <header>
        <h1>Pensées Passagères</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />

        <div className="thoughts-container">
          <div className="passing-thoughts">
            <h2>Pensées Passagères</h2>
            <ul className="thoughts">
              {passingThoughts.map((thought) => (
                <Thought
                  key={thought.id}
                  thought={thought}
                  removeThought={removeThought}
                  saveThought={saveThought}
                />
              ))}
            </ul>
          </div>

          <div className="saved-thoughts">
            <h2>Pensées Gardées</h2>
            <ul className="thoughts">
              {savedThoughts.map((thought) => (
                <Thought
                  key={thought.id}
                  thought={thought}
                  removeThought={removeThought}
                  saveThought={saveThought}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
