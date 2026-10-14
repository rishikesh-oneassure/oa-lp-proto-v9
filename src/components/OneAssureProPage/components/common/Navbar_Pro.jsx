import { Button } from "@/components/UI/Button";
import { useEffect, useRef, useState } from "react";

const NAV_TOP_OFFSET = 38;

function Navbar_Pro() {
  const navRef = useRef(null);
  const [dockTop, setDockTop] = useState(null);

  useEffect(() => {
    const nav = navRef.current;
    const hero = document.getElementById("hero");
    if (!nav || !hero) return;

    let frame = 0;

    const update = () => {
      const releaseAt = NAV_TOP_OFFSET + nav.offsetHeight;
      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom <= releaseAt) {
        setDockTop(heroBottom + window.scrollY - nav.offsetHeight);
      } else {
        setDockTop(null);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const docked = dockTop != null;

  return (
    <div
      ref={navRef}
      className={`left-1/2 z-50 w-full -translate-x-1/2 px-4 md:px-6 ${
        docked ? "absolute" : "fixed top-[38px]"
      }`}
      style={docked ? { top: dockTop } : undefined}
    >
      <nav className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center gap-2 rounded-[100px] border border-primary-300 bg-white/40 px-3 py-2 shadow-[0px_2px_10px_0px_#0000001F] backdrop-blur-md sm:h-[76px] sm:gap-2.5 sm:px-6 sm:py-3">
        <a href="/" className="shrink-0">
          <img
            src="https://cdn.oasr.in/oa-site/cms-uploads/media/Logo_File_7th_August_4ea73a2feb.svg"
            alt="OneAssure"
            className="h-8 w-[112px] object-contain sm:h-10 sm:w-[141px]"
          />
        </a>

        <div className="ml-auto">
          <Button
            variant="default"
            type="button"
            className="h-10 rounded-full bg-primary-800 px-3.5 text-xs font-semibold text-white hover:scale-100 sm:h-[52px] sm:px-6 sm:text-sm"
          >
            Get Clarity Now
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_Pro;
