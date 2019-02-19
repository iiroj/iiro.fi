import { useEffect, useState } from "react";

export default (isSticky, containerRef) => {
  if (typeof window === "undefined") return;

  const [sticky, setSticky] = useState(isSticky);

  const updateSticky = () => {
    const { height, top } = containerRef.current.getBoundingClientRect();
    setSticky(window.innerHeight - top >= height);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      requestAnimationFrame(updateSticky);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return sticky;
};
