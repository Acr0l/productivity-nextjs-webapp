"use client";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar, Grid, Settings, User } from "react-feather";
import Card from "./Card";
import SidebarLink from "./SidebarLink";
const icons = { Settings, User, Grid, Calendar };
export interface SidebarLinkProps {
  label: string;
  icon: keyof typeof icons;
  link: string;
}
interface SidebarLinkPropsArray extends Array<SidebarLinkProps> {}
const links: SidebarLinkPropsArray = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return width < 640 ? (
    <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow rounded-2xl">
      <div className="flex justify-between">
        {links.map((link) => (
          <SidebarLink link={link} mobile={width < 640} key={link.label} />
        ))}
      </div>
    </section>
  ) : (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {links.map((link) => (
        <SidebarLink link={link} mobile={width < 640} key={link.label} />
      ))}
    </Card>
  );
};

export default Sidebar;
