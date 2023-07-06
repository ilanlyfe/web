// import { GlobalContext } from "../../../ctx";
// import { useSession, signIn, signOut } from 'next-auth/react'
import { Session } from "@/interfaces";
import { getSession, handleSignOut } from "@/utils/auth";
import { FC, Fragment, useContext, useState } from "react";
import { Menu } from "@headlessui/react";
import Form, { FormType } from "@/components/groups/forms";
import NavGroup from "./nav-group";
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

  return (
    <nav className="md:hidden flex w-full fixed z-50 bottom-0 bg-white shadow border-1 border-gray-200  ">
      {/* mobile nav bar bottom */}
      <div className="mx-auto w-full px-2 sm:px-4 lg:px-8">
        <div className="mx-4 h-16 flex align-middle">
          <div className="flex align-middle  w-full">
            <NavGroup links={links} />
            <div className="sm:flex sm:space-x-8"></div>
          </div>
        </div>
      </div>
      {/* <Disclosure as="nav" className=""></Disclosure> */}
      <Modal title="MobileNav" isActive={isModalOpen} toggleFn={modalToggleFn}>
        {/* profile options */}
        <Form type={FormType.SIGNUP} closeFn={modalToggleFn} />
      </Modal>
    </nav>
  );

  function modalToggleFn(data: any) {
    console.log("modalToggleFn", data);
    setModalOpen(!isModalOpen);
  }
};

export default MobileNav;


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
