import Form from "../components/auth/RegisterForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
export default async function RegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <Form />;
}
