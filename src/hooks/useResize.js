import { useRef, useState, useEffect } from "react";

function useResize() {
  const el = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function setDimensions() {
      if (el.current) {
        const width = el.current.offsetWidth;
        const height = el.current.offsetHeight;

        width && setWidth(el.current.offsetWidth);
        height && setHeight(el.current.offsetHeight);
      }
    }

    setDimensions();

    window.addEventListener("resize", setDimensions);
  }, [el]);

  return { el, width, height };
}

export default useResize;
