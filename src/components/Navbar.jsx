"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter(); // next navigation theke import kori
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: 'Gallery',
      path: '/gallery'
    }
  ];
  const handlerFn = () => {
    router.push("/login");
  };
  if (pathName.includes("dashboard"))
    return (
      <div className="bg-gray-800 p-4 text-white sticky top-0">
        <Link href={"/"}>Dashboard</Link>
      </div>
    );
  return (
    <>
      <nav className="flex gap-3 items-center justify-between bg-gray-800 p-4 text-white sticky top-0">
        <h1 className="text-2xl">
          Meal <span className="text-cyan-500">Hero</span>{" "}
        </h1>
        <ul className="flex justify-center space-x-4">
          {links.map((link) => (
            <Link
              className={`${pathName === link.path ? "text-cyan-500" : ""}`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handlerFn}
          className="bg-cyan-500 px-4 py-2 rounded-lg"
        >
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;
