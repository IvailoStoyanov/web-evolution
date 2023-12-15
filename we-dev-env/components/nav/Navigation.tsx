"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navigation.module.scss";
import Image from "next/image";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileNavVisible(true);
  }

  const handleMenuCloseClick = () => {
    setIsMobileNavVisible(false);
  }

  useEffect(() => {
    const checkScrollValue = () => {
      (window.scrollY > 200 && !isMobileNavVisible) ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', checkScrollValue);

    return () => {
      window.removeEventListener('scroll', checkScrollValue);
    };
    
  }, [isMobileNavVisible]);

  return (
    <>
      <style jsx>{`
          ul {
            transform: ${isMobileNavVisible ? "translateX(0)" : "translateX(-100%)"};
            opacity: ${isMobileNavVisible ? "1" : "0"};
          }
          .overlay {
            visibility: ${isMobileNavVisible && "visible"};
            opacity: ${isMobileNavVisible ? "0.7" : "0"};
          }
          .closeButtonEffect {
            ${isMobileNavVisible ? "" : "transform: scale(4)"};
            ${isMobileNavVisible ? "" : "opacity: 0"};
          }
          .closeButtonWrapper {
            ${isMobileNavVisible ? "" : "visibility: hidden"};
          }
        `}</style>

      <nav
        id="navigation"
        className={`${styles.navigation} ${isScrolled ? styles.navigation___scrolled : ""
          }`}
      >
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo/we-logo.svg"
            className={styles.image}
            alt="Web Evolution Logo"
            height={50}
            width={100}
          />
        </Link>
        <ul>
          <div
            className={`${styles.navigation_mobileCloseWrapper} closeButtonWrapper`}
          >
            <div
              className={`${styles.navigation_mobileCloseEffect} closeButtonEffect`}
            />
            <Image
              src="/icons/close-mobile-nav.svg"
              alt="close hamburger menu icon"
              height={50}
              width={50}
              onClick={handleMenuCloseClick}
              id="closeButton"
            />
          </div>
          <li onClick={handleMenuCloseClick}>
            <ActiveLink href="/our-projects">
              Work
            </ActiveLink>
          </li>
          <li onClick={handleMenuCloseClick}>
            <ActiveLink href="/our-services">
              Services
            </ActiveLink>
          </li>
          <li onClick={handleMenuCloseClick}>
            <ActiveLink href="/about">
              About
            </ActiveLink>
          </li>
          <li onClick={handleMenuCloseClick}>
            <ActiveLink href="/contact">
              Contact
            </ActiveLink>
          </li>
        </ul>
        <button
          className={styles.hamburger}
          onClick={handleHamburgerClick}
        >
          <Image
            src="/icons/hamburger.svg"
            alt="open hamburger menu icon"
            height={40}
            width={40}
          />
        </button>
        <div
          className={`${styles.navigation_overlay} overlay`}
          onClick={handleMenuCloseClick}
        ></div>
      </nav>
      <div className={styles.navigationCap}></div>
    </>
  );
}

export default Navigation;
