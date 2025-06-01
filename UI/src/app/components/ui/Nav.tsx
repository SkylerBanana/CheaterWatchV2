"use client";
import Input from "./Input";
import Link from "next/link";
export default function Nav() {
  const items = ["Your List", "Recent Bans", "LeaderBoard", "Login"];
  const Links = ["/list", "/bans", "/leaderboard", "/login"];

  const navitems = items.map((item, index) => (
    <Link
      className="select-none hover:opacity-75 text-center "
      href={Links[index]}
      key={index}
    >
      <div className="rounded  p-2">{item}</div>
    </Link>
  ));

  return (
    <aside className=" max-w-[300px] h-dvh  flex-col  bg-[#141621]">
      <div className=" px-2">{navitems}</div>
    </aside>
  );
}
