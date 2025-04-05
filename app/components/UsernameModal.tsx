import React, { useState } from "react";

type Props = {
  onSubmit: (name: string) => void;
};

const UsernameModal: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      onSubmit(input.trim());
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl text-white flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold">Choisis ton pseudo</h2>
        <input
          className="p-2 rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Teemo94"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default UsernameModal;
