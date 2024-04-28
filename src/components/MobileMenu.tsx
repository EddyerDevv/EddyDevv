"use client";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import { HomeIcon, LayoutDashboardIcon, StarIcon } from "lucide-react";
import Link from "next/link";

interface MenuProps {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuButtonRef: React.RefObject<HTMLElement>;
}

interface ButtonProps {
  label: string;
  href?: string;
  icon: React.ReactNode;
}

const buttonIconSize = "icon";
const buttonArray: ButtonProps[] = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className={buttonIconSize} />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <LayoutDashboardIcon className={buttonIconSize} />,
  },

  {
    label: "Blog",
    href: "/blog",
    icon: <StarIcon className={buttonIconSize} />,
  },
];

function MobileMenu({ activeMenu, setActiveMenu, menuButtonRef }: MenuProps) {
  const [activeOutside, setActiveOutside] = useState(true);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const appHeaderMenu = document.getElementById("app_header_menu");
    if (!(appHeaderMenu instanceof HTMLElement)) return;

    appHeaderMenu.style.transform = "scale(0)";
    appHeaderMenu.style.opacity = "0";

    setTimeout(() => {
      appHeaderMenu.style.transition =
        "transform 0.4s cubic-bezier(.32,.72,0,1), opacity 0.25s ease";
      appHeaderMenu.style.transform = "scale(1)";
      appHeaderMenu.style.opacity = "1";

      appHeaderMenu.addEventListener("transitionend", () => {
        setActiveOutside(false);
      });
    }, 10);

    return () => {
      appHeaderMenu.style.transform = "scale(0)";
      appHeaderMenu.style.opacity = "0";
    };
  }, [activeMenu]);

  useEffect(() => {
    const menuButton = menuButtonRef.current;
    const menu = menuRef.current;
    if (!(menuButton instanceof HTMLElement)) return;
    if (!(menu instanceof HTMLElement)) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (activeOutside) return;
      if (
        !menuButton.contains(event.target as Node) &&
        !menu.contains(event.target as Node)
      ) {
        menu.style.opacity = "0";

        menu.addEventListener("transitionend", () => {
          setActiveMenu(false);
        });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuButtonRef, menuRef, activeOutside]);

  const handleMenu = () => {
    const menu = menuRef.current;
    if (!(menu instanceof HTMLElement)) return;

    menu.style.opacity = "0";

    menu.addEventListener("transitionend", () => {
      setActiveMenu(false);
    });
  };

  return (
    <article id="app_header_menu" ref={menuRef}>
      <div className="nav">
        {buttonArray.map((button, index) => (
          <Fragment key={index}>
            {button.href ? (
              <Link
                href={button.href}
                className={`button`}
                onClick={() => handleMenu()}
              >
                <span className="text">{button.label}</span>
                {button.icon}
              </Link>
            ) : (
              <button className={`button`} onClick={() => handleMenu()}>
                <span className="text">{button.label}</span>
                {button.icon}
              </button>
            )}
          </Fragment>
        ))}
      </div>
    </article>
  );
}

export default memo(MobileMenu);
