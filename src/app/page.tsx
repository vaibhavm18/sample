"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locoScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
     
    </div>
  );
}
