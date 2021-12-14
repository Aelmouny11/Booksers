import Link from "next/link";
import Search from "./search";
const links = ["Home", "Catgories", "About", "Support"];

const Header = () => {
  return (
    <div className="bg-indigo-700  pb-0 grid gap-5">
      <div className="p-4">
        {" "}
        <Link href="#">
          <h1 className="text-white font-bold">Booksers</h1>
        </Link>
      </div>
      <div className="bg-teal-200 flex items-center gap-4 p-2 pl-10  w-full">
        {links.map((ln) => {
          return (
            <div>
              <Link href="#">{ln}</Link>
            </div>
          );
        })}
        <Search />
      </div>
    </div>
  );
};

export default Header;
