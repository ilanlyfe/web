// import { GlobalContext } from "../../../ctx";
// import { useSession, signIn, signOut } from 'next-auth/react'
import { Session } from "@/interfaces";
import { getSession, handleSignOut } from "@/utils/auth";
import { FC, Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Icon, { IconVariant } from "@/components/core/icons";
import { useRouter } from "next/router";
import { Search } from "@/components/groups/search";
import Form, { FormType } from "@/components/groups/forms";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/groups/modal";
import MobileNav from "./mobile";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavBarProps {
  // navLinks: {text: string, url: string }[];
}

const NavBar: FC<NavBarProps> = () => {
  // const { data: session } = useSession();
  const session = getSession();
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const links = [
    {
      text: "journeys",
      pageUri: "/journeys",
      iconUrl: "/backpack.png",
    },
  ];

  return (
    <Fragment>
      {/* mobile nav bar bottom */}
      <MobileNav links={links} />
      <nav className="hidden w-full ">
        <Disclosure as="nav" className="bg-white shadow">
          {({ open }) => (
            <>
              <div className="flex align-middle mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex px-2 lg:px-0 w-full">
                    <Link className="flex align-middle" href="/">
                      <div className="flex flex-shrink-0 items-center">
                        <Image
                          src="https://encycolorpedia.com/emojis/coconut.svg"
                          width={32}
                          height={32}
                          alt="juvae logo"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-start">
                      <Search />
                    </div>
                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      {links.map((link, key) => (
                        <a
                          key={key}
                          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                          href={link.pageUri}
                        >
                          <Image
                            src={link.iconUrl}
                            width={32}
                            height={32}
                            alt="juvae logo"
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <Icon variant={IconVariant.XMARK} />
                      ) : (
                        <Icon variant={IconVariant.BARS3} />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:ml-4 lg:flex lg:items-center">
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <Icon variant={IconVariant.BELL} />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://preview.redd.it/c2sic3r24mn81.png?width=1080&format=png&auto=webp&v=enabled&s=d0dce86d7e7b37444f18eb6e14915332f0a4e8c6"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {session !== undefined
                            ? renderMenu(session, modalToggleFn)
                            : null}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/wall.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        Tom Cook
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        tom@example.com
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <Icon variant={IconVariant.BELL} />
                    </button>
                  </div>

                  <div className="mt-3 space-y-1">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Modal title="NavBar" isActive={isModalOpen} toggleFn={modalToggleFn}>
          <Form type={FormType.SIGNUP} closeFn={modalToggleFn} />
        </Modal>
      </nav>
    </Fragment>
  );

  function modalToggleFn(data: any) {
    console.log("modalToggleFn", data);
    setModalOpen(!isModalOpen);
  }
};

export default NavBar;

function renderMenu(session: Session | null, toggleFn: (data: any) => void) {
  if (session && session.guest) {
    return (
      <Fragment>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700",
              )}
            >
              Your Profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700",
              )}
            >
              Settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700",
              )}
              onClick={() => handleSignOut()}
            >
              Log out
            </a>
          )}
        </Menu.Item>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700",
              )}
              onClick={(d) => toggleFn(d)}
            >
              Log in
            </a>
          )}
        </Menu.Item>
      </Fragment>
    );
  }
}
/*
{user?.isLoggedIn === false && (
            <li>
              <Link href="/login" legacyBehavior>
                <a>Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn === true && (
            <>
              <li>
                <Link href="/profile-sg" legacyBehavior>
                  <a>
                    <span
                      style={{
                        marginRight: '.3em',
                        verticalAlign: 'middle',
                        borderRadius: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={user.avatarUrl}
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    Profile (Static Generation, recommended)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile-ssr" legacyBehavior>
                  <a>Profile (Server-side Rendering)</a>
                </Link>
              </li>
              <li>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault()
                    mutateUser(
                      await fetchJson('/api/logout', { method: 'POST' }),
                      false
                    )
                    router.push('/login')
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
*/
