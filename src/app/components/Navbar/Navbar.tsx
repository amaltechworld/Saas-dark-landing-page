
import MenuIcon from "@/app/components/icons/menu.svg"

export const Navbar = () => {
  return (
      <div className=" p-[1rem] bg-black">
          <div className="py-4 px-4 flex justify-between items-center">
              <div className="relative">
                  <div className="absolute w-full top-2 bottom-0 logo-bg-custom-gradient blur-md"></div>
                  <img
                      src="/images/logosaas.png"
                      className="h-12 w-12 relative"
                      alt="saas logo"
                  />
              </div>

              <div className="border border-white/30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                  <MenuIcon className="text-white" />
              </div>
              <nav className="  hidden sm:flex gap-6 items-center ">
                  <a href="#" className=" text-white/60 hover:text-white/100 transition">About</a>
                  <a href="#" className=" text-white/60 hover:text-white/100 transition">Features</a>
                  <a href="#" className=" text-white/60 hover:text-white/100 transition">Updates</a>
                  <a href="#" className=" text-white/60 hover:text-white/100 transition">Help</a>
                  <a href="#" className=" text-white/60 hover:text-white/100 transition">Customers</a>
                  <button className="bg-white py-2 px-4 rounded-lg">Fet for free</button>
              </nav>
          </div>
      </div>
  );
};
