import { useState } from "react";
import { Bars3Icon , XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import Link from "./link";
import { SelectedPage } from '@/shared/types';
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopofPage : boolean;
  selectedPage: SelectedPage;
  setSelectedPage : (value:SelectedPage) => void;
};

const Navbar = ( {isTopofPage, selectedPage, setSelectedPage } : Props) => {
    const flexBetweeen = "flex items-centre justify-between ";
    const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");
    const navbarBackground = isTopofPage ? "" : "bg-primary-100 drop-shadow"
  return (
   <nav>
    <div className={`${navbarBackground} ${flexBetweeen} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetweeen} mx-auto w-5/6`}>
          <div className={`${flexBetweeen} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */ }
            {isAboveMediumScreens ? (
              <div className= {`${flexBetweeen} w-full`}>
                <div className= {`${flexBetweeen}} gap-8 text-sm)`}>
                    <Link page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link page="Benefits"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link page="Our Classes"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link page="Contact Us"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                </div>
                <div className= {`${flexBetweeen} gap-8`}>
                    <p>Sign in</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                    </div> 
                </div>)
                : (
                  <button 
                    className="rounded-full bg-secondary-500 p-2" 
                    onClick={()=> setIsMenuToggled( !isMenuToggled)}>
                      <Bars3Icon className="h-6 w-6 text-white" />
                  </button>
                )}
            </div>
        </div>
    </div>
    {/* MOBILE MENU MODEL */}
    {! isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button onClick={()=> setIsMenuToggled( !isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400"/>
          </button>
        </div>
        {/*MENU ITEMS */}
        <div className= "ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link page="Benefits"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link page="Our Classes"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link page="Contact Us"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                </div>
      </div>
    )}
   </nav>
  );
};
export default Navbar;