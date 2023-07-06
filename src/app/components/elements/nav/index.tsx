"use client";
// import { GlobalContext } from "../../../ctx";
// import { useSession, signIn, signOut } from 'next-auth/react'
import { getSession, handleSignOut } from "@/utils/auth";
import { FC, Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Icon, { IconVariant } from "@/components/core/icons";
import { useRouter } from "next/navigation";
import { Search } from "@/components/elements/query";
import Form, { FormType } from "@/components/groups/forms";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/groups/modal";
import MobileNav from "./mobile";
import PrimaryNav from "./primary";

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
    // {
    //   text: "home",
    //   pageUri: "/",
    //   iconUrl: "/search.png",
    // },
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
    // {
    //   text: "chat",
    //   pageUri: "/chat",
    //   iconUrl: "/bubble-chat.png",
    // },
    {
      text: "more",
      pageUri: "/profile",
      iconUrl: "/bubble-chat.png",
    },
  ];

  const mobileLinks = [
    {
      text: "home",
      pageUri: "/",
      iconUrl: "/search.png",
    },
    {
      text: "journeys",
      pageUri: "/journeys",
      iconUrl: "/distance.png",
    },
    // {
    //   text: "chat",
    //   pageUri: "/chat",
    //   iconUrl: "/bubble-chat.png",
    // },
    {
      text: "more",
      pageUri: "/profile",
      iconUrl: "/bubble-chat.png",
    },
  ];

  return (
    <Fragment>
      {/* mobile nav bar bottom */}
      <PrimaryNav links={links} />
      <MobileNav links={mobileLinks} />
    </Fragment>
  );

  function modalToggleFn(data: any) {
    console.log("modalToggleFn", data);
    setModalOpen(!isModalOpen);
  }
};

export default NavBar;

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
