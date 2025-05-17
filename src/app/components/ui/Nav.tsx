"use client";
import Input from "./Input";
export default function Nav() {
  const items = ["Your List", "Recent Bans", "LeaderBoard"];
  const Links = ["/list", "/bans", "/leaderboard"];

  const navitems = items.map((item, index) => (
    <a className="select-none hover:opacity-50" key={index}>
      <div className="rounded p-2">{item}</div>
    </a>
  ));

  return (
    <nav className="flex items-center justify-center py-5   flex-col bg-[#1d202f]">
      <div className="flex flex-row justify-between">
        <Input />
      </div>

      <div className="flex flex-row justify-center bg-[#141621] w-full px-2">
        {navitems}
      </div>
    </nav>
  );
}
