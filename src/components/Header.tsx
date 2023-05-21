import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <div className="flex items-center space-x-2">
      <Link href="/">
        <div className="inline-flex items-center justify-center rounded w-[100px] h-[100px] p-2 hover:bg-blue-400 ">
          <Image
            className="rounded-full"
            alt="Logo"
            width={60}
            height={60}
            src="/../public/hopi.png"
          />
        </div>
      </Link>
      <div className="inline-flex items-center justify-center rounded w-[100px] h-[100px] p-2 hover:bg-blue-400">
        <Image
          className="rounded-full"
          alt="Logo"
          width={60}
          height={60}
          src="/../public/hopishop.jpg"
        />
      </div>
    </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/products"}>ÜRÜNLER</Link>
          </li>

          <li>
            <a>WEHOPI</a>
          </li>
          <li>
            <a>KAMPANYALAR</a>
          </li>
          <li>
            <a>MARKALAR</a>
          </li>
          <li>
            <a>HOPI</a>
          </li>
          <li>
            <a>BLOG </a>
          </li>
          <li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input-bordered input rounded-full pl-10"
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            {sessionData && (
              <>
                <div className="w-10 rounded-full">
                  <Image
                    width={40}
                    height={40}
                    src={sessionData?.user.image ?? ""}
                    alt="User Image"
                  />
                </div>
              </>
            )}
            {!sessionData && <a>Oturum Aç</a>}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {sessionData && (
              <>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={() => void signOut()}>Logout</button>
                </li>
              </>
            )}
            {!sessionData && (
              <li>
                <button onClick={() => void signIn()}>Sign in</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
