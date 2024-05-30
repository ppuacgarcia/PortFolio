import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: {
    path: string;
    title: string;
  }[];
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}


