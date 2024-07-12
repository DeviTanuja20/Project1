import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from '@/shared/types';
import Home from '@/scenes/Home';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses';
import Contactus from '@/scenes/contactUs';
import Footer from '@/scenes/footer';

function App (){
  const [selectedPage,setSelectedPage] =useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopofPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <div className="app bg-gray-20">
      <Navbar
      isTopofPage={isTopofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
      <Home setSelectedPage= {setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage} children={undefined}/>
      <OurClasses setSelectedPage={setSelectedPage} />
      <Contactus setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App;