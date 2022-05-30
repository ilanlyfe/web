import { GlobalContext } from "../../../ctx";
import { FC, Fragment, useContext, useState } from "react";
import Link from "../../core/Link";
import { PrimaryNavLinks } from "./PrimaryNavLInks";
// import Modal from "../../core/Modal";
// import Search from "../Search";
// import SignUp from "../Forms/SignUp/index";
// import SignInForm from "../Forms/SignInForm";

interface NavBarProps {
  navLinks: any[];
}
const NavBar: FC<NavBarProps> = ({ navLinks }) => {
  const { currentUser, handleLogOut } = useContext(GlobalContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalState] = useState(false);

  return (
    // <header className="fixed top-0 z-50 w-full shadow-md sm:px-8 text-gray-700 bg-white body-font xxmotion-safe:animate-fadeIn" style={{ background: "#fff" }}>
    <header className="fixed top-0 z-50 w-full shadow-md sm:px-8 text-gray-700 bg-white body-font motion-safe:animate-fadeIn" style={{ background: "#fff" }}>
      <div className="container flex flex-col flex-wrap items-center justify-between py-3 sm:py-5 mx-auto md:flex-row max-w-7xl">
        <div className="hidden sm:flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
          <Link href="/" text="ilanlyfe">
            <a>
              <span className="mr-2 text-xl font-black leading-none text-gray-900 select-none logo"></span>
            </a>
          </Link>
        </div>

        <div className="flex-grow w-full sm:w-auto">
          <div className="sm:ml-8 px-1 mx-3 rounded-lg  md:max-w-sm " style={{ backgroundColor: "#fff" }}>
            <div className=" flex justify-center sm:justify-start h-12">
              {/* <Search /> */}
              {/* <button
                className=" px-3 leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-400 transition-colors duration-200 w-full py-2 text-gray-300 focus:outline-none "
                // value=""

                onClick={toggleModal}
              >
                <svg width={24} height={24} fill="none" className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span> What are you looking for?</span>
              </button> */}
              {/* TODO: Implement filter options */}
              {/* <div className="">
              <span style={{ width: 1 }} className=" rounded-lg mr-2 h-6 w-1/12 bg-gray-200"></span>
              <FilterButton size={33} />
            </div> */}
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col md:flex-row">
          <PrimaryNavLinks links={navLinks} />
        </div>
        {/* <div className="flex-grow ">
          <div className=" flex justify-center sm:justify-start ">
            <Search />
          </div>
        </div> */}

        <div className="hidden ">
          {/*sm:flex flex-col md:flex-row*/}
          <PrimaryNavLinks links={navLinks} />
          <div className="inline-flex items-center justify-center md:justify-end">
            {currentUser ? (
              <Link variant="action" onClick={handleLogOut} text="Sign out" />
            ) : (
              <Fragment>
                {/* <Link variant="action" onClick={toggleSignInModalState} text="Sign in" />
                <Link variant="action" onClick={toggleModal} text="Sign up" /> */}
              </Fragment>
            )}
          </div>
        </div>
      </div>
      {/* <Modal open={isModalOpen} toggleModal={toggleModal}>
        <SignUp />
      </Modal>
      <Modal open={isSignInModalOpen} toggleModal={toggleSignInModalState}>
        <SignInForm toggleSignInModalState={toggleSignInModalState} />
      </Modal> */}
    </header>
  );
  function toggleModal() {
    setModalOpen(!isModalOpen);
  }
  function toggleSignInModalState() {
    setSignInModalState(!isSignInModalOpen);
  }
};

export default NavBar;
