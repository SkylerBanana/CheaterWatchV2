"use client";
import { FormEvent } from "react";
export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/steam", {
      method: "POST",
      body: JSON.stringify({
        steamuser: formData.get("steamUser"),
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="steamUser"
        required
        type="text"
        className="w-full h-[20px] px-2 text-sm border border-gray-300 rounded"
      />
      <button type="submit"></button>
    </form>
  );
}
