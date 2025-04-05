"use client"
import React, { useEffect, useState } from "react";
import UsernameModal from "../../components/UsernameModal";

const Home: React.FC = () => {
  const [playerName, setPlayerName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("lol_guest_name");
    if (savedName) {
      setPlayerName(savedName);
    }
  }, []);

  const handleSetName = (name: string) => {
    localStorage.setItem("lol_guest_name", name);
    setPlayerName(name);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {!playerName && <UsernameModal onSubmit={handleSetName} />}

      {playerName && (
        <>
          <h1 className="text-4xl font-bold mb-6">Bienvenue {playerName}</h1>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
            Commencer une partie
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
