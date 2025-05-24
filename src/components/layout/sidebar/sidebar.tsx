"use client";

import cn from "clsx";
import { LogOut, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { navItems } from "./sidebar.data";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  const currentPath = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="Icon" width={50} height={50} />
      <div className={styles.iconsContainer}>
        {Object.values(navItems).map((group, id) => {
          return (
            <Fragment key={id}>
              {group.map((item) => (
                <Link
                  href={item.path}
                  key={item.path}
                  className={cn({
                    [styles.active]: currentPath === item.path,
                  })}
                >
                  <item.icon />
                </Link>
              ))}
              <div className="divider" />
            </Fragment>
          );
        })}
        <LogOut />
      </div>
      <div className={styles.iconsContainer}>
        <Sun />
        <Moon />
      </div>
    </aside>
  );
}
