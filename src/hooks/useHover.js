import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const nodeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dom = nodeRef.current;
    const handleMouseEnter = () => {
      setHovered(true);
    };
    const handleMouseLeave = () => {
      setHovered(false);
    };
    if (dom) {
      dom.addEventListener("mouseenter", handleMouseEnter);
      dom.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);
  return { nodeRef, hovered };
}
