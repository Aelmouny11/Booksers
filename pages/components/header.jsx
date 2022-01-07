import { useState,useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Search from "./search";
const links = ["Home", "Catgories", "About", "Support"];
const Header = () => {
  const {systemTheme, theme, setTheme } = useTheme();
  const [mounted,setMounted]=useState(false);
  useEffect(()=>{
    setMounted(true)
  },[])
  const renderThemeChanger=()=>{
    if(!mounted) return null;
    const currentTheme=theme==='system'? systemTheme:theme;
    if(currentTheme==='dark'){
      return(
        <SunIcon
        className="w-7 h-7"
        role="button"
        onClick={()=>setTheme('light')}
        />
      );
    }
   else{
    return(
      <MoonIcon
      className="w-7 h-7"    role="button" onClick={()=>setTheme('dark')}
      />
    );
  }
}
  return (
    <div className="bg-indigo-700  pb-0 grid gap-5 w-full dark:bg-slate-500  justify-between items-center">
      <div className="p-4 ">
        {" "}
        <Link href="#">
          <h1 className="text-white font-bold">Booksers</h1>
        </Link>
        {renderThemeChanger()}
      </div>
      <div className="bg-teal-200 flex items-center gap-4 p-2 pl-10  w-full dark:bg-indigo-600">
        {links.map((ln) => {
          return (
            <div className="">
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
