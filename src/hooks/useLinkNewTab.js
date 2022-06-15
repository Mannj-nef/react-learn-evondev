import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const nodeRef = useRef(null);

  useEffect(() => {
    const domRef = nodeRef.current;

    if (domRef) {
      const links = [...domRef.querySelectorAll("a")];
      links.length > 0 &&
        links.forEach((item) => {
          item.setAttribute("target", "_blank");
        });
    }
  });

  return {
    nodeRef,
  };
}
