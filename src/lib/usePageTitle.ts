import { useEffect } from "react";
import { site } from "@/content/site";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title === "Home" ? site.name : `${title} | ${site.name}`;
  }, [title]);
}
