"use client";

import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SidebarLinkProps } from "./Sidebar";

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({
  link,
  mobile,
}: {
  link: SidebarLinkProps;
  mobile: Boolean;
}) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return mobile ? (
    <Link
      href={link.link}
      className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
    >
      <Icon
        className={clsx(
          "w-full focus:text-violet-500 hover:text-violet-500 justify-center inline-block text-center pt-2 pb-1",
          isActive && "text-violet-600"
        )}
      />
    </Link>
  ) : (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
