"use client";
// import { GlobalContext } from "../../../ctx";
// import { useSession, signIn, signOut } from 'next-auth/react'
import { Session } from "@/interfaces";
import { getSession, handleSignOut } from "@/utils/auth";
import { FC, Fragment, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import Icon, { IconVariant } from "@/components/core/icons";
import { useRouter } from "next/navigation";
import { Search } from "@/components/elements/query";
import Form, { FormType } from "@/components/groups/forms";
import Modal from "@/components/groups/modal";
import NavGroup from "./nav-group";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface PrimaryNavBarProps {
  links: { text: string; pageUri: string; iconUrl: string }[];
  // navLinks: {text: string, url: string }[];
}

const PrimaryNavBar: FC<PrimaryNavBarProps> = ({ links }) => {
  // const { data: session } = useSession();
  const session = getSession();
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="flex frosty-bg justify-between items-center h-16 w-full px-12 shadow border-b-1 border-gray-300 fixed z-50 frosty-bg"
    >
      {({ open }) => (
        <>
          {/* logo */}
          <div className="hidden sm:flex  flex-nav flex-shrink-0 items-center">
            <img
              className="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>

          {/* search/query */}
          <div className="flex flex-auto flex-shrink-0ww max-w-92 items-center">
            <div className="w-full text-center">
              <Search />
            </div>
          </div>
          {/* nav group */}
          <div className="hidden sm:flex flex-nav flex-shrink-0 items-center">
            <NavGroup links={links} />
          </div>

          {/* TODO: we're not using the mobile drop down, instead the modal will be used to show the more menu on mobile view ports */}
          <div className="mobile-filter hidden -mr-2  items-center ">
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
          {/* <div className="mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-around items-center h-full">
              
            </div>
          </div> */}
          <Modal title="NavBar" isActive={isModalOpen} toggleFn={modalToggleFn}>
            <Form type={FormType.SIGNUP} closeFn={modalToggleFn} />
          </Modal>
        </>
      )}
    </Disclosure>
  );

  function modalToggleFn(data: any) {
    console.log("modalToggleFn", data);
    setModalOpen(!isModalOpen);
  }
};

export default PrimaryNavBar;



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
/**
 * <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
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
 */
