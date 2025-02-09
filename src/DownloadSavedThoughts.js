import React from "react";

export default function DownloadSavedThoughts({ savedThoughts }) {
  const downloadSavedThoughts = () => {
    const savedThoughtsText = savedThoughts
      .map((thought) => `${thought.id}: ${thought.content}`)
      .join("\n");

    const blob = new Blob([savedThoughtsText], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pensees_gardees.txt";
    link.click();
  };

  return (
    <button className="save-button" onClick={downloadSavedThoughts}>
      Télécharger les pensées gardées
    </button>
  );
}
