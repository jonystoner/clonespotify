import "./App.css";

import {
  FaHome,
  FaSearch,
  FaBook,
  FaArrowLeft,
  FaArrowRight,
  FaUser,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex flex-row h-screen">
          <div className="w-44 max-sm bg-black ">
            <img className="w-40 mt-4" alt="" src="img/logo2.png" />
            <aside className="mt-10 text-white items-center gap-4">
              <ul className="  ml-4 flex flex-row gap-3 pt-2">
                <FaHome />
                Home
              </ul>
              <ul className="ml-4 flex flex-row gap-3 pt-2">
                <FaSearch />
                Search
              </ul>
              <ul className="ml-4 flex flex-row gap-3 pt-2">
                <FaBook />
                Biblioteca
              </ul>
            </aside>
            <ul className="w-screen h-1 bg-neutral-700 mt-9" />
            <div className="flex flex-col text-white mt-10 ml-4">
              <ul> Sua Biblioteca </ul>
            </div>
          </div>
          <div className="bg-cyan-950 w-screen">
            <div className="flex flex-row justify-between ml-10 mr-10 mt-7">
              <div className="">
                <button>
                  <FaArrowLeft />
                </button>
                <button>
                  <FaArrowRight />
                </button>
              </div>
              <div className=""> 
                <button className="w-16 gap-1 flex flex-row h-10 items-center rounded-lg bg-white text-black"> 
                  <FaUser/>
                     Login
                 </button> 
              </div>
            </div>
          </div>
        </div>
        <div className="h-44 bg-black">
          <div className="w-40">
            <img className="w-44 h-40" alt="" src="img/donl.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
