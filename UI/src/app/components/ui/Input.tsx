import { useState } from "react";
export default function Input() {
  const [steamId, setSteamId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Steam ID entered:", steamId);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex">
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go
        </button>
        <input
          id="steam-id"
          value={steamId}
          onChange={(e) => setSteamId(e.target.value)}
          className="flex-grow border rounded px-3 py-2"
          type="text"
          placeholder="Enter a Steam ID"
        />
      </div>
    </form>
  );
}
