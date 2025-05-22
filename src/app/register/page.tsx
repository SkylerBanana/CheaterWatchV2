("");
import { FormEvent } from "react";
export default async function RegisterPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <label>Email</label>
      <input className="border border-white" type="email" required />
      <label>Password</label>
      <input className="border border-white" type="password" required />
      <label>Confirm Password</label>
      <input className="border border-white" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
}
