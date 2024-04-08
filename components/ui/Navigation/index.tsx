import { useState } from "react";
import NavigationHeader from "./NavigationHeader";
import NavigationCategories from "./NavigationCategories";
import NavigationOptions from "./NavigationOptions";
import TransparentBackground from "../../ui/TransparentBackground.tsx";

export default function Navigation() {
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const toggleMenu = (): void => {
    setIsNavigationActive((prev) => !prev);
  };

  return (
    <>
      <NavigationHeader toggleMenu={toggleMenu} />
      <nav
        className={`w-full max-w-sm transition-all ease-in-out duration-300 ${
          isNavigationActive ? "left-0" : "left-[-384px]"
        } h-[calc(100vh-60px)]
        } pt-5 flex flex-col fixed top-[60px] z-20 overflow-y-scroll bg-white xlg:left-0 xlg:z-10 xlg:flex xlg:bg-blue-800 xlg:h-screen xlg:top-0 xlg:w-72 xlg:overflow-y-hidden`}
      >
        <NavigationCategories />
        <hr className="w-64 mx-auto border-0 border-b border-b-gray-400 xlg:border-b-white border-dashed" />
        <NavigationOptions />
      </nav>
      {isNavigationActive && (
        <TransparentBackground hiddenAfterStreching={true} />
      )}
    </>
  );
}
