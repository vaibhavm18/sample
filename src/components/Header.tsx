"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as SmoothLink } from "react-scroll";

const navbarItems = ["Home", "Plans", "testimonials", "Contact Us"];
export default function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
      return;
    }

    setScrollHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  return (
    <header
      className={`bg-gray-100 py-3 px-6 transition-all duration-300 ease-in-out ${
        scrollHeader ? "fixed w-full shadow-lg" : "absolute  "
      } top-0 left-0 right-0 z-30`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-3xl font-bold">
          Sample
        </Link>

        <ul className="md:flex gap-6 hidden">
          {navbarItems.map((item) => (
            <li key={item} className="cursor-pointer text-lg">
              <SmoothLink
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to={item.toLowerCase()}
                offset={-80}
              >
                {item}
              </SmoothLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
