import Link from "next/link";
import React from "react";
import AimagDropdown from "./AimagDropdown";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-6 text-white px-12">
      <Link href={"/"} className="text-3xl font-extrabold font-bigbang">
        Big Bang
      </Link>
      <div className="flex space-x-5 text-gray-300 text-md font-medium items-center">
        <AimagDropdown />
        <Link href={"/"} className="hover:text-white">
          Home
        </Link>
        <Link href={"/maps"} className="hover:text-white">
          Maps
        </Link>
        <Link href={"/event"} className="hover:text-white">
          Event
        </Link>
        <Link href={"/suggest"} className="hover:text-white">
          Suggest
        </Link>
        <Link href={"/about"} className="hover:text-white">
          About
        </Link>
        <div className="flex items-center bg-neutral-800 rounded-full border border-neutral-700">
          <button className="px-2.5 py-1.5 text-sm font-semibold text-neutral-400 rounded-full">
            MN
          </button>
          <button className="px-2.5 py-1.5 text-sm font-semibold text-neutral-400 rounded-full">
            EN
          </button>
        </div>
        <Link
          href={"/signin"}
          className="border border-neutral-700 px-3 py-1.5 rounded-3xl ml-5 text-gray-50"
        >
          Sign in
        </Link>
        <Link
          href={"/profile"}
          className="rounded-full bg-[#f5c52a] px-3 py-1.5 text-black"
        >
          B
        </Link>
      </div>
    </div>
  );
};

export default Nav;
