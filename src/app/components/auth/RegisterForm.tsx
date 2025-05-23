"use client";
import { FormEvent } from "react";
export default function RegisterForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      console.log(data.message);
    } else {
      console.log({ response });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <label>Email</label>
      <input
        name="email"
        className="border border-white"
        type="email"
        required
      />
      <label>Username</label>
      <input
        name="username"
        className="border border-white"
        type="text"
        required
      />
      <label>Password</label>
      <input
        name="password"
        className="border border-white"
        type="password"
        required
      />
      <label>Confirm Password</label>
      <input
        name="confirmPassword"
        className="border border-white"
        type="password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}
