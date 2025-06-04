import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import LoginForm from "../components/auth/LoginForm";
export default async function LoginPage() {
  /*
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
    */
  return <LoginForm />;
}
