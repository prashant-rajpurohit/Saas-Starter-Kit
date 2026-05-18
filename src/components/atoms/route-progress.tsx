"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.1 });

export function RouteProgress() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const bar = document.querySelector("#nprogress .bar") as HTMLElement;
    const themeColor = getComputedStyle(document.body)
      .getPropertyValue("--primary")
      ?.trim();
    if (bar && themeColor) {
      bar.style.setProperty("background", themeColor, "important");
    }
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 200); //fake delay
    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
