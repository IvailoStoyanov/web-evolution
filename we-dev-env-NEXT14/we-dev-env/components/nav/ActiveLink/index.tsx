import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../Navigation.module.scss";

interface ActiveLink {
  href: string,
  children: string,
}

export const ActiveLink = ({ href, children }: ActiveLink) => {
  const pathname = usePathname();

  return (
    <Link className={pathname === href ? styles.active : ''} href={href}>{children}</Link>
  )
}
