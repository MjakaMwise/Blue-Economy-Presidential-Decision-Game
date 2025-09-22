import { MousePointer2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CursorItem =()=> {
  // live pointer position (immediate)
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);
  const [overInteractive, setOverInteractive] = useState(false);

  // Detect if target is interactive (link, button, input, etc.)
  const isInteractive = (el) => {
    if (!el) return false;
    const selector = "a,button,[role=button],input,select,textarea,label,summary";
    return !!el.closest?.(selector);
  };

  useEffect(() => {
    const handleMove = (e) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
      setOverInteractive(isInteractive(e.target));
    };

    const handleDown = () => setDown(true);
    const handleUp = () => setDown(false);
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointerenter", handleEnter);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointerenter", handleEnter);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

 
  // Base styles
  const base = {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 999999,
    pointerEvents: "none",
    willChange: "transform, width, height, background, border",
    transition: "transform 120ms ease, width 120ms ease, height 120ms ease, background 120ms ease, border-color 120ms ease, opacity 150ms ease",
    opacity: visible ? 1 : 0,
  } as React.CSSProperties;

  // Dot follows the actual pointer (no smoothing)
  const dotSize = down ? 28: 34;
  const fillC = ["#fff","#971c1c"]
  const dotStyle: React.CSSProperties = {
    ...base,
    width: dotSize,
    height: dotSize,
    borderRadius: 9999,
    fill: overInteractive ? fillC[1]: fillC[0 ],
    transform: `translate3d(${pos.x - dotSize / 2}px, ${pos.y - dotSize / 2}px, 0)`,
  };

 
  return (
    <>

      
      <MousePointer2 color={fillC[0]} size={108} style={dotStyle} absoluteStrokeWidth fill={fillC[0]}/>
    </>
  );
}

export default CursorItem