"use client";
import Icon from "@/components/core/icons";
import { FC, Fragment } from "react";
import { IconVariant } from "@/components/core/icons";
import Modal from "@/components/groups/modal";
import Button from "@/components/core/button";
import { Menu, Transition } from "@headlessui/react";
import { ButtonVariant } from "@/components/core/button";
import { Session } from "@/interfaces";
import { getSession, handleSignOut } from "@/utils/auth";

type NavGroupProps = {
  links: {
    pageUri: string;
    iconUrl: string;
    text: string;
  }[];
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const NavGroup: FC<NavGroupProps> = ({ links }) => {
  const session = getSession();

  const menuItemStyles = "block px-4 py-2 text-sm text-gray-700";
  const activeMenuItemStyles = "bg-gray-100";

  return (
    <div className="flex w-full justify-end">
      <div className="flex w-48 m-auto justify-evenly sm:-mr-12">
        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
        {links.map((link, key) => {
          let variant: unknown;

          function ifLinkActive() {
            return "border-transparent";
          }

          function ifNotMobileHide() {
            // if (window !== undefined) console.log(window.innerWidth);
            return "hidden";
          }
          if (link.text === "home") {
            variant = IconVariant.SEARCH;
          } else if (link.text === "journeys") {
            variant = IconVariant.MAP;
          } else if (link.text === "chat") {
            variant = IconVariant.CHAT;
          } else {
            variant = IconVariant.MORE;
          }
          if (link.text !== "more")
            return (
              <a
                key={key}
                className={`inline-flex items-center border-b-2 border-indigo-500 
            ${ifLinkActive()} px-1 pt-1 text-sm font-medium text-gray-500 
            hover:border-gray-300 hover:text-gray-700 last:mr-auto`}
                href={link.pageUri}
              >
                <Icon variant={variant! as IconVariant} strokeWidth={1.5} />
              </a>
            );
          // TODO: only retun the button if the view port or device is mobile .
          return (
            <div
              key={key}
              className={`inline-flex mr-8 items-center border-b-2 border-indigo-500
            ${ifLinkActive()} px-1 pt-1 text-sm font-medium text-gray-500 
            hover:border-gray-300 hover:text-gray-700 ${ifNotMobileHide()}`}
            >
              <Button
                variant={variant as ButtonVariant}
                onClick={handleMoreClick}
              />
            </div>
          );
        })}

        {/* notification bell */}
        <button
          type="button"
          className="hidden sm:block rounded-full bg-white p-1 text-gray-600 hover:text-gray-500 
          xfocus:outline-none xfocus:ring-2 xfocus:ring-indigo-500 xfocus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <Icon variant={IconVariant.BELL} />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="hidden sm:block relative">
          <div>
            <Menu.Button
              className="flex rounded-full bg-white text-sm focus:outline-none xfocus:ring-2 
            xfocus:ring-indigo-500 xfocus:ring-offset-2"
            >
              <span className="sr-only">Open user menu</span>
              {session.token !== "" ? (
                <>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </>
              ) : (
                <Icon variant={IconVariant.BARS3} />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md 
            bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {session.token !== "" ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? activeMenuItemStyles : "",
                          menuItemStyles,
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
                          active ? activeMenuItemStyles : "",
                          menuItemStyles,
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
                          active ? activeMenuItemStyles : "",
                          menuItemStyles,
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? activeMenuItemStyles : "",
                          menuItemStyles,
                        )}
                      >
                        Sign In
                      </a>
                    )}
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <Modal title="MobileNav" isActive={false} toggleFn={modalToggleFn}>
        This is the modal
      </Modal>
    </div>
  );
};

export default NavGroup;
function modalToggleFn(data: any) {
  console.log("modalToggleFn", data);
}

function handleMoreClick() {
  console.log("more button clicked");
}

function renderMenu(session: Session | null, toggleFn: (data: any) => void) {
  const menuItemStyles = "block px-4 py-2 text-sm text-gray-700";
  const activeMenuItemStyles = "bg-gray-100";
  if (session && session.guest) {
    return (
      <Fragment>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? activeMenuItemStyles : "",
                menuItemStyles,
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
                active ? activeMenuItemStyles : "",
                menuItemStyles,
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
                active ? activeMenuItemStyles : "",
                menuItemStyles,
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
                active ? activeMenuItemStyles : "",
                menuItemStyles,
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
