// import { GlobalContext } from "../../../ctx";
// import { useSession, signIn, signOut } from 'next-auth/react'
import { Session } from "@/interfaces";
import { getSession, handleSignOut } from "@/utils/auth";
import { FC, Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Search } from "@/components/groups/search";
import Form, { FormType } from "@/components/groups/forms";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/groups/modal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface MobileNavProps {
  links: { text: string; pageUri: string; iconUrl: string }[];
  // navLinks: {text: string, url: string }[];
}

const MobileNav: FC<MobileNavProps> = ({ links }) => {
  // const { data: session } = useSession();
  const session = getSession();
  const [isModalOpen, setModalOpen] = useState(false);

  const _links = [
    {
      text: "home",
      pageUri: "/",
      iconUrl: "/search.png",
    },
    // {
    //   text: "groups",
    //   pageUri: "/groups",
    //   iconUrl: "/backpack.png",
    // },
    {
      text: "journeys",
      pageUri: "/journeys",
      iconUrl: "/distance.png",
    },
    {
      text: "chat",
      pageUri: "/chat",
      iconUrl: "/bubble-chat.png",
    },
    {
      text: "profile",
      pageUri: "/journeys",
      iconUrl: "/account.png",
    },
  ];

  return (
    <div className="w-full fixed z-50 bottom-0 shadow-sm border-t-1 border-gray-300 bg-white">
      {/* mobile nav bar bottom */}

      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-4 h-16 flex align-middle">
          <div className="flex align-middle justify-around w-full">
            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
            {_links.map((link, key) => (
              <a
                key={key}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                href={link.pageUri}
              >
                <Image src={link.iconUrl} width={24} height={24} alt="logo" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* <Disclosure as="nav" className=""></Disclosure> */}
      <Modal title="MobileNav" isActive={isModalOpen} toggleFn={modalToggleFn}>
        {/* profile options */}
        <Form type={FormType.SIGNUP} closeFn={modalToggleFn} />
      </Modal>
    </div>
  );

  function modalToggleFn(data: any) {
    console.log("modalToggleFn", data);
    setModalOpen(!isModalOpen);
  }
};

export default MobileNav;

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
