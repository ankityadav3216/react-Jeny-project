import { useEffect, useRef } from "react";

const useAutoHorizontalScroll = (
  containerRef,
  { speed = 0.6, pauseAfterInteractMs = 2000 } = {}
) => {
  const directionRef = useRef(1);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const pauseFor = (ms = pauseAfterInteractMs) => {
      pausedRef.current = true;
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
      resumeTimerRef.current = window.setTimeout(() => {
        pausedRef.current = false;
      }, ms);
    };

    const tick = () => {
      if (pausedRef.current) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (maxScrollLeft <= 0) return;

      if (container.scrollLeft <= 0) {
        directionRef.current = 1;
      } else if (container.scrollLeft >= maxScrollLeft - 1) {
        directionRef.current = -1;
      }

      container.scrollLeft += directionRef.current * speed;
    };

    const intervalId = window.setInterval(tick, 16);

    const handleMouseEnter = () => {
      pausedRef.current = true;
    };
    const handleMouseLeave = () => {
      pausedRef.current = false;
    };
    const handleUserInteract = () => {
      pauseFor();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleUserInteract, { passive: true });
    container.addEventListener("touchmove", handleUserInteract, { passive: true });
    container.addEventListener("wheel", handleUserInteract, { passive: true });
    container.addEventListener("click", handleUserInteract);

    return () => {
      window.clearInterval(intervalId);
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }

      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleUserInteract);
      container.removeEventListener("touchmove", handleUserInteract);
      container.removeEventListener("wheel", handleUserInteract);
      container.removeEventListener("click", handleUserInteract);
    };
  }, [containerRef, speed, pauseAfterInteractMs]);
};

export default useAutoHorizontalScroll;
