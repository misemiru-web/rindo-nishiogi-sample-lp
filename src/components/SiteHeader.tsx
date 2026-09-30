/* eslint-disable @next/next/no-img-element -- The logo is a pre-optimized static WebP served through the shared basePath utility. */
"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath, imageAssets, siteData } from "@/data/site";
import styles from "./SiteHeader.module.css";

const navigation = [
  ["りんどうについて", "#concept"],
  ["料理", "#food"],
  ["お酒", "#drinks"],
  ["店内", "#space"],
  ["初めての方へ", "#first-visit"],
  ["店舗情報", "#access"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        closeMenu(true);
        return;
      }
      if (event.key !== "Tab") return;

      const focusableElements = [
        triggerRef.current,
        ...Array.from(mobileNavRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
      ].filter((element): element is HTMLElement => element !== null);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);
      if (!firstElement || !lastElement) return;

      if (event.shiftKey && (document.activeElement === firstElement || !focusableElements.includes(document.activeElement as HTMLElement))) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${open ? styles.menuOpen : ""}`}>
      <a className={styles.brand} href="#top" aria-label="りんどう ページ先頭へ">
        <img src={assetPath(imageAssets.brand.header)} width="4344" height="1448" alt="" />
      </a>
      <nav className={styles.desktopNav} aria-label="主要ナビゲーション">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
      <a className={styles.reserve} href={siteData.links.reservation} target="_blank" rel="noopener noreferrer">
        食べログで予約<span className="sr-only">（新しいタブで開く）</span><span aria-hidden="true"> ↗</span>
      </a>
      <button
        ref={triggerRef}
        className={styles.menuButton}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((current) => !current)}
      >
        <span /><span /><span />
      </button>
      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className={styles.mobileNav}
        aria-label="モバイルナビゲーション"
        hidden={!open}
      >
        <p>NISHIOGIKUBO<br />DINING &amp; SAKE</p>
        {navigation.map(([label, href]) => (
          <a href={href} key={href} onClick={() => closeMenu()}>{label}<span aria-hidden="true">—</span></a>
        ))}
        <a className={styles.mobileReserve} href={siteData.links.reservation} target="_blank" rel="noopener noreferrer">
          食べログで予約<span className="sr-only">（新しいタブで開く）</span><span aria-hidden="true"> ↗</span>
        </a>
      </nav>
    </header>
  );
}
