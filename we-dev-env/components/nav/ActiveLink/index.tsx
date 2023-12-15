import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../Navigation.module.scss";
import { ActiveLinkInterface } from "@/Interfaces/Interfaces";

export const ActiveLink = ({ href, children }: ActiveLinkInterface) => {
  const pathname = usePathname();

  return (
    <Link className={pathname === href ? styles.active : ''} href={href}>{children}</Link>
  )
}
