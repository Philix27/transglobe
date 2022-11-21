import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  const show = "show";
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="navbar ">
        <label className="brand">Transglobe</label>
        <ul className={showNav ? "show" : ""}>
          <li
            className={_path == "/" ? "active" : ""}
            onClick={() => setShowNav(!showNav)}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/admin" ? "active" : ""}
          >
            <Link href="/admin">Login</Link>
          </li>
        </ul>
        <label className="icon">
          {showNav ? (
            <FaTimes onClick={() => setShowNav(!showNav)} />
          ) : (
            <FaBars onClick={() => setShowNav(!showNav)} />
          )}
        </label>
      </div>
    </>
  );
}
