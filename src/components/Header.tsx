"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/Header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isAnimatingMenu, setIsAnimatingMenu] = useState(false);

  useEffect(() => {
    function manageScroll() {
      const appHeader = document.querySelector("#app_header");
      if (!(appHeader instanceof HTMLElement)) return;

      if (window.scrollY > 0) appHeader.classList.add("scrolled");
      else appHeader.classList.remove("scrolled");
    }

    function handleResize() {
      if (isMobile && activeMenu && window.innerWidth >= 780) {
        setActiveMenu(false);
        const $html = document.querySelector("html");
        if (!($html instanceof HTMLElement)) return;

        $html.style.overflow = "auto";
      }
      setIsMobile(window.innerWidth <= 780);
    }

    handleResize();
    manageScroll();

    window.addEventListener("scroll", manageScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", manageScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, activeMenu]);

  const onDragMenu = (e: any) => {
    const startY = e.pageY ?? e.touches[0].pageY;
    let pullDeltaY = 0;
    const DECISION_THRESHOLD = 40;

    if (isAnimatingMenu) return;
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);

    document.addEventListener("touchmove", onMove, { passive: true });
    document.addEventListener("touchend", onEnd, { passive: true });

    function onMove(e: any) {
      const currentY = e.pageY ?? e.touches[0].pageY;
      pullDeltaY = currentY - startY;

      if (pullDeltaY === 0 || pullDeltaY < 0) return;

      const $appMenu = document.querySelector("#app_menu");
      const $appMenuClose = document.querySelector("#app_close_menu");

      if (
        !($appMenu instanceof HTMLElement) ||
        !($appMenuClose instanceof HTMLElement)
      )
        return;

      const translateY = pullDeltaY / 2;
      const maxOpacity = 0.7;
      const opacity =
        maxOpacity - Math.min(maxOpacity, translateY / DECISION_THRESHOLD);

      $appMenu.style.transform = `translateY(${translateY}px)`;
      $appMenuClose.style.opacity = `${opacity}`;

      setIsAnimatingMenu(true);
    }

    function onEnd() {
      const $appMenu = document.querySelector("#app_menu");
      const $appMenuClose = document.querySelector("#app_close_menu");

      if (!($appMenu instanceof HTMLElement)) return;
      if (!($appMenuClose instanceof HTMLDivElement)) return;

      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);

      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);

      $appMenu.style.transition = "transform 0.2s cubic-bezier(.32,.72,0,1)";

      if (pullDeltaY >= DECISION_THRESHOLD) {
        $appMenu.removeAttribute("style");

        $appMenu.style.transition = "transform 0.5s cubic-bezier(.32,.72,0,1)";
        $appMenu.style.transform = "translateY(100%)";

        $appMenuClose.style.opacity = "0";

        $appMenu.addEventListener("transitionend", () => {
          $appMenu.classList.remove("open");
          setActiveMenu(false);
        });
      } else {
        $appMenu.style.transform = `translateY(0px)`;
        $appMenuClose.style.opacity = `0.7`;
      }

      $appMenu.addEventListener("transitionend", async () => {
        $appMenu.removeAttribute("style");
        setIsAnimatingMenu(false);
      });
    }
  };

  const buttonMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const $html = document.querySelector("html");
    if (!($html instanceof HTMLElement)) return;

    e.preventDefault();
    setActiveMenu(!activeMenu);

    $html.style.overflow = "hidden";
  };

  const onCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    const $html = document.querySelector("html");
    if (!($html instanceof HTMLElement)) return;

    $html.style.overflow = "auto";

    if (isAnimatingMenu) return;

    setIsAnimatingMenu(true);
    e.preventDefault();

    const $appMenu = document.querySelector("#app_menu");
    const $appMenuClose = document.querySelector("#app_close_menu");

    if (!($appMenu instanceof HTMLElement)) return;
    if (!($appMenuClose instanceof HTMLDivElement)) return;

    $appMenu.removeAttribute("style");

    $appMenu.style.transition = "transform 0.5s cubic-bezier(.32,.72,0,1)";
    $appMenu.style.transform = "translateY(100%)";

    $appMenuClose.style.opacity = "0";

    $appMenu.addEventListener("transitionend", () => {
      $appMenu.classList.remove("open");
      setActiveMenu(false);
      setIsAnimatingMenu(false);
    });
  };

  useEffect(() => {
    const $appMenu = document.querySelector("#app_menu");
    const $appMenuClose = document.querySelector("#app_close_menu");
    const $html = document.querySelector("html");

    if (!($appMenu instanceof HTMLElement)) return;
    if (!($appMenuClose instanceof HTMLDivElement)) return;
    if (!($html instanceof HTMLElement)) return;

    if (activeMenu) {
      $appMenu.classList.add("open");
      $appMenuClose.classList.add("open");

      $appMenu.style.transition = "bottom 0.5s cubic-bezier(.32,.72,0,1)";

      setTimeout(() => {
        $appMenu.addEventListener("transitionend", () => {
          $appMenu.removeAttribute("style");
          $appMenuClose.removeAttribute("style");
        });
      }, 10);
    }
  }, [activeMenu]);

  return (
    <>
      <header id="app_header">
        <section className="principal">
          <div className="logo">
            <Link href="/">
              <h1>
                Eddy<span>Devv</span>
              </h1>
            </Link>
          </div>
          {!isMobile && (
            <>
              <div className="spacer"></div>
              <nav className="navigate">
                <Link className="link" href="/" title="Home">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                  </svg>
                  <span className="text">Home</span>
                </Link>
                <Link className="link" href="/projects" title="Projects">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
                    <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M14 12l6 0"></path>
                    <path d="M14 16l6 0"></path>
                    <path d="M14 20l6 0"></path>
                  </svg>
                  <span className="text">Projects</span>
                </Link>
                <Link className="link" href="/blog" title="Blog">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11 21h-5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3.5"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M4 11h11"></path>
                    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                  </svg>
                  <span className="text">Blog</span>
                </Link>
              </nav>
            </>
          )}
        </section>
        <section className="others">
          <Link
            className="act"
            title="GitHub"
            href="https://github.com/EddyerDevv/EddyDevv"
            target="_blank"
          >
            <svg
              viewBox="0 0 256 250"
              width="256"
              height="250"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path>
            </svg>
          </Link>
          {isMobile && (
            <button className="btn accent menu" onClick={buttonMenuHandler}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </button>
          )}
        </section>
      </header>

      {isMobile && activeMenu && (
        <>
          <div id="app_close_menu" onClick={onCloseMenu}></div>
          <section
            id="app_menu"
            onMouseDown={onDragMenu}
            onTouchStart={onDragMenu}
          >
            <header className="header">
              <div className="content">
                <span className="decorator"></span>
              </div>
              <span className="text">Menu</span>
            </header>
            <nav className="navigate">
              <Link className="link" href="/" title="Home">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                </svg>
                <span className="text">Home</span>
              </Link>
              <Link className="link" href="/projects" title="Projects">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
                  <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M14 12l6 0"></path>
                  <path d="M14 16l6 0"></path>
                  <path d="M14 20l6 0"></path>
                </svg>
                <span className="text">Projects</span>
              </Link>
              <Link className="link" href="/blog" title="Blog">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 21h-5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3.5"></path>
                  <path d="M16 3v4"></path>
                  <path d="M8 3v4"></path>
                  <path d="M4 11h11"></path>
                  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                </svg>
                <span className="text">Blog</span>
              </Link>
            </nav>
          </section>
        </>
      )}
    </>
  );
}

export default Header;
