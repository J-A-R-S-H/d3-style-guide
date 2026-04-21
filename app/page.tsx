"use client";

import TransitionLink from "./components/TransitionLink";

import typographyPage from "./images/typography-page.png";
import colorPage from "./images/color-page.png";
import imageryPage from "./images/imagery-page.png";

export default function Home() {
  return (
    <section>
      <h1 className="text-7xl font-extrabold text-center mt-10 mb-4">
        Visual Web Style Guide
      </h1>

      <p>
        A style guide is a comprehensive rulebook for a brand or publication,
        establishing consistent standards for visual design, tone of voice, and
        writing conventions. It ensures a professional, recognized identity
        across all channels by covering elements like logos, typography, color
        palettes
      </p>
      <div className="grid grid-cols-3 min-[1600px]:grid-cols-4  text-xl font-bold mt-6 gap-5 mb-6">
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
          <TransitionLink
            href="/logoSymbol"
            label="Logo and Symbol"
            src="https://www.vistaprint.com/hub/wp-content/uploads/sites/14/2025/08/featured-92317261000128321-1284x600.jpg"
          />
        </div>

        <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
          <TransitionLink
            href="/typography"
            label="Typography"
            src={typographyPage.src}
          />
        </div>

        <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
          <TransitionLink href="/colors" label="Colors" src={colorPage.src} />
        </div>

        <div className=" transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
          <TransitionLink
            href="/iconography"
            label="Iconography"
            src={imageryPage.src}
          />
        </div>
      </div>
    </section>
  );
}
